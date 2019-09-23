import React, { useEffect, useState } from 'react'
import '../styles/IgConnect.css'
import '../styles/Global.css'
import { images } from '../assets/images'
import { connect, useSelector } from 'react-redux'
import {
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
} from '../actions/DataActions'
import { Link } from 'react-router-dom'
import { pageSize } from '../config/static'
import Pagination from 'react-js-pagination'
import { ToastsStore } from 'react-toasts'
import * as moment from 'moment-timezone'
import { InstaRedirect } from '../config/urls'
import { ClipLoader } from 'react-spinners'

const IgConnect = ({
  history,
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
}) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  const [username, setUsername] = useState('')
  const [searchText, setSearchText] = useState('')
  // redux store data
  const auth = useSelector(state => state.user.auth)
  const data = useSelector(state => state.data)
  // local scope variables
  const instaMedia = data.instaMedia
  const instaMediaIds = data.instaMediaIds
  const igConnectSearchText = data.igConnectSearchText

  useEffect(
    () => {
      if (igConnectSearchText) {
        setSearchText(igConnectSearchText)
        setIgConnectSearchText('')
      }
      fetchUserMedia(
        auth.access,
        currentPage,
        searchText.length > 1 ? searchText : ''
      )
    },
    [currentPage, searchText] // eslint-disable-line
  )
  // helper methods for component
  const handlePageChange = pageNumber => {
    setCurrentPage(Number(pageNumber))
  }
  const renderMediaRows = () => {
    return instaMediaIds.map((id, index) => {
      const { created_at, insta_user_id } = instaMedia[id]
      const {
        media_type,
        likes_count,
        comments_count,
        filter_used
      } = instaMedia[id].media_insights[0]
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{insta_user_id}</td>
          <td>{media_type}</td>
          <td>
            {moment(created_at)
              .tz(timezone)
              .format('lll')}
          </td>
          <td>{filter_used}</td>
          <td>{likes_count}</td>
          <td>{comments_count}</td>
          <td className='detailsRow'>
            <Link
              to={`/igPageResults/${id}`}
              onClick={() => {
                setIgConnectSearchText(searchText)
                setSelectedMedia(instaMedia[id])
              }}
            >
              details
            </Link>
          </td>
        </tr>
      )
    })
  }
  const handleCrawlClick = () => {
    if (username.trim().length === 0) {
      ToastsStore.error('can not crawl an empty username')
    } else {
      CrawlNewUser(auth.access, username)
      history.push('/igconnected')
    }
  }
  const handleTextInputChange = event => {
    if (event.target.id === 'inputIgUser') {
      setUsername(event.target.value)
    } else if (event.target.id === 'inputSearchText') {
      setSearchText(event.target.value)
    }
  }
  return (
    <div>
      <div className='container'>
        <div className='col-sm-3 offset-sm-4' id='innerContainer'>
          <input
            type='text'
            className='form-control'
            id='inputIgUser'
            placeholder='Enter Insta username'
            onChange={handleTextInputChange}
          />
          <button
            type='submit'
            className='btn btn-primary btn-md'
            onClick={handleCrawlClick}
            id='crawlBtn'
          >
            Crawl
          </button>
        </div>
        <div className='col-sm-3 offset-sm-4' id='separateText'>
          <h5>{' OR '}</h5>
        </div>
        <div className='col-sm-3 offset-sm-4' id='connectIgDiv'>
          <a href={InstaRedirect} id='connectIgBtn' role='button'>
            Connect to Instagram
            <img
              src={images.instaLogo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              id='igIcon'
            />
          </a>
        </div>
        <div className='col-sm-9 offset-sm-1'>
          <div className='tableHeadContainer'>
            <h4>Previous crawl results</h4>
            <div className='tableSearchContainer'>
              <label htmlFor='inputPassword'>Search:</label>
              <input
                type='text'
                className='form-control'
                id='inputSearchText'
                onChange={handleTextInputChange}
                value={searchText}
              />
            </div>
          </div>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Insta uid</th>
                <th scope='col'>Media type</th>
                <th scope='col'>Crawl time</th>
                <th scope='col'>Filter used</th>
                <th scope='col'>Likes</th>
                <th scope='col'>Comments</th>
                <th scope='col'>Visit</th>
              </tr>
            </thead>
            <tbody>{data.dataLoading ? <tr /> : renderMediaRows()}</tbody>
          </table>
          {data.dataLoading ? (
            <div className='col-sm-5 offset-sm-5'>
              <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} loading />
            </div>
          ) : (
            <div className='pagginationDiv'>
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={data.mediaCount}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                itemClass='page-item'
                linkClass='page-link'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default connect(
  null,
  {
    fetchUserMedia,
    CrawlNewUser,
    setIgConnectSearchText,
    setSelectedMedia
  }
)(IgConnect)
