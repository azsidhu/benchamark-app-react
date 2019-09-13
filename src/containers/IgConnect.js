import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../styles/IgConnect.css'
import '../styles/Global.css'
import { images } from '../assets/images'
import { connect, useSelector } from 'react-redux'
import { fetchUserMedia, CrawlNewUser } from '../actions/DataActions'
import { Link } from 'react-router-dom'
import { pageSize } from '../config/static'
import Pagination from 'react-js-pagination'
import { ToastsStore } from 'react-toasts'
// var moment = require('moment')
var moment = require('moment-timezone')

const IgConnect = ({ history, fetchUserMedia, CrawlNewUser }) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  const [username, setUsername] = useState('')
  // redux store data
  const auth = useSelector(state => state.user.auth)
  const data = useSelector(state => state.data)
  // local scope variables
  const instaMedia = data.instaMedia
  const instaMediaIds = data.instaMediaIds

  useEffect(
    () => {
      fetchUserMedia(auth.access, currentPage)
    },
    [currentPage] // eslint-disable-line
  )
  // helper methods for component
  const handlePageChange = pageNumber => {
    setCurrentPage(Number(pageNumber))
  }
  const renderMediaRows = () => {
    return instaMediaIds.map((id, index) => {
      const { created_at, insta_user_id } = instaMedia[id]
      const { media_type, likes_count, comments_count } = instaMedia[
        id
      ].media_insights[0]
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      console.log('timezone: ',timezone)
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
          <td>{likes_count}</td>
          <td>{comments_count}</td>
          <td className='detailsRow'>
            <Link
              to={{
                pathname: '/igPageResults',
                data: {
                  media: instaMedia[id]
                }
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
    }
  }
  return (
    <div>
      <Header />
      <div className='container'>
        <div
          className='col-sm-3 offset-sm-4'
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 10
          }}
        >
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
            style={{ marginLeft: 10 }}
          >
            Crawl
          </button>
        </div>
        <div
          className='col-sm-3 offset-sm-4'
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10
          }}
        >
          <h5>{' OR '}</h5>
        </div>
        <div
          className='col-sm-3 offset-sm-4'
          style={{ display: 'flex', flexDirection: 'row', marginBottom: 30 }}
        >
          <button
            type='submit'
            className='btn btn-primary btn-md'
            onClick={() => history.push('/instaRedirect')}
            style={{ marginLeft: 10 }}
          >
            Connect to Instagram
            <img
              src={images.instaLogo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              style={{ marginLeft: 4 }}
            />
          </button>
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
              />
            </div>
          </div>
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Id</th>
                <th scope='col'>Insta uid</th>
                <th scope='col'>Media Type</th>
                <th scope='col'>Last Crawl</th>
                <th scope='col'>Likes count</th>
                <th scope='col'>Comments count</th>
                <th scope='col'>Visit</th>
              </tr>
            </thead>
            <tbody>{renderMediaRows()}</tbody>
          </table>
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
        </div>
      </div>
    </div>
  )
}

export default connect(
  null,
  { fetchUserMedia, CrawlNewUser }
)(IgConnect)
