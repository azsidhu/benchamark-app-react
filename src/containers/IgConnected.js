import React, { useEffect, useState } from 'react'
import '../styles/IgConnect.css'
import '../styles/Global.css'
import { Link } from 'react-router-dom'
import { FetchNewData, fetchUserMedia } from '../actions/DataActions'
import { connect, useSelector } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay'
import Loader from 'react-spinners/ClipLoader'
import { pageSize } from '../config/static'
import Pagination from 'react-js-pagination'
var moment = require('moment')

const IgConnected = ({ history, FetchNewData, fetchUserMedia }) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  // redux store data
  const auth = useSelector(state => state.user.auth)
  // console.log('auth: ',auth)
  const dataLoading = useSelector(state => state.data.dataLoading)
  const data = useSelector(state => state.data)
  // local scope variables
  const instaMedia = data.instaMedia
  const instaMediaIds = data.instaMediaIds
  useEffect(
    () => {
      if (window.location.href.split('#')[1] && !dataLoading) {
        console.log('dataLoading: ', dataLoading)
        console.log('making request')
        let accessToken = window.location.href.split('#')[1].split('=')[1]
        if (auth.access) {
          FetchNewData(auth.access, accessToken)
        }
      } else fetchUserMedia(auth.access, currentPage)
    },
    [currentPage, dataLoading] // eslint-disable-line
  )
  // helper methods for component
  const handlePageChange = pageNumber => {
    setCurrentPage(Number(pageNumber))
  }
  const renderMediaRows = () => {
    return instaMediaIds.map((id, index) => {
      const { created_at } = instaMedia[id]
      const { media_type, likes_count, comments_count } = instaMedia[
        id
      ].media_insights[0]
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{media_type}</td>
          <td>{moment(created_at).format('lll')}</td>
          <td>{likes_count}</td>
          <td>{comments_count}</td>
          <td className='detailsRow'>
            <Link to='/igPageResults'>details</Link>
          </td>
        </tr>
      )
    })
  }
  return (
    <LoadingOverlay
      active={dataLoading}
      spinner={<Loader color={'#fff'} />}
      text='Loading User data...'
      styles={{
        wrapper: {
          width: '100%',
          height: '100%',
          overflow: dataLoading ? 'hidden' : 'scroll'
        }
      }}
    >
      <div className='container'>
        <div className='col-sm-3 offset-sm-1' id='crawlBtn'>
          <button
            type='submit'
            className='btn btn-primary btn-md'
            onClick={() => history.push('/igconnect')}
            id='crawlAgainBtn'
          >
            Crawl again
          </button>
        </div>
        <div className='col-sm-9 offset-sm-1'>
          <div className='tableHeadContainer'>
            <h4>Recent crawl results</h4>
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
    </LoadingOverlay>
  )
}
export default connect(
  null,
  { FetchNewData, fetchUserMedia }
)(IgConnected)
