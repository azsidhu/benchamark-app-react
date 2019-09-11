import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../styles/IgConnect.css'
import '../styles/Global.css'
import { Link } from 'react-router-dom'
import { FetchNewData } from '../actions/DataActions'
import { connect, useSelector } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay'
import Loader from 'react-spinners/ClipLoader'

const IgConnected = ({ history, FetchNewData }) => {
  const auth = useSelector(state => state.user.auth)
  const dataLoading = useSelector(state => state.data.dataLoading)
  useEffect(
    () => {
      let accessToken = window.location.href.split('#')[1].split('=')[1]
      if (auth.access) {
        FetchNewData(auth.access, accessToken)
      }
    },
    [] // eslint-disable-line
  )
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
        <Header />
        <div className='container'>
          <div className='col-sm-6 offset-sm-3' style={{ marginTop: 5 }}>
            <p>You account has been connected and data crawled successfully</p>
          </div>
          <div
            className='col-sm-3 offset-sm-4'
            style={{ display: 'flex', flexDirection: 'row', marginBottom: 80 }}
          >
            <button
              type='submit'
              className='btn btn-primary btn-md'
              onClick={() => history.push('/igconnect')}
              style={{ marginLeft: 10 }}
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
                  <th scope='col'>#</th>
                  <th scope='col'>Crawl time</th>
                  <th scope='col'>Username</th>
                  <th scope='col'>Visit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>5</th>
                  <td>07:45 19-19</td>
                  <td>@otto</td>
                  <td className='detailsRow'>
                    <Link to='/igPageResults'>details</Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='pagginationDiv'>
              <ul className='pagination'>
                <li className='page-item'>
                  <p className='page-link' aria-label='Previous'>
                    <span aria-hidden='true'>&laquo;</span>
                  </p>
                </li>
                <li className='page-item'>
                  <p className='page-link'>1</p>
                </li>
                <li className='page-item'>
                  <p className='page-link'>2</p>
                </li>
                <li className='page-item'>
                  <p className='page-link' aria-label='Next'>
                    <span aria-hidden='true'>&raquo;</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </LoadingOverlay>
  )
}
export default connect(
  null,
  { FetchNewData }
)(IgConnected)
