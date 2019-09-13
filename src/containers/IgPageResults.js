import React from 'react'
import Header from '../components/Header'
import '../styles/IgConnect.css'
import { Link } from 'react-router-dom'

const pageResults = ({ history }) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='col-sm-10 offset-sm-1' style={{ marginTop: 90 }}>
          <div className='tableHeadContainer'>
            <h4>Media Details</h4>
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
                <th scope='row'>1</th>
                <td>07:45 19-19</td>
                <td>@otto</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>07:45 19-19</td>
                <td>@otto</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>03:35 19-19</td>
                <td>@photo_cc</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>4</th>
                <td>07:45 19-19</td>
                <td>@otto</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>5</th>
                <td>10:30 19-20</td>
                <td>@dawn.com</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>6</th>
                <td>07:45 19-19</td>
                <td>@otto</td>
                <td className='detailsRow'>
                  <Link to='/igPageResults'>details</Link>
                </td>
              </tr>
              <tr>
                <th scope='row'>7</th>
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
                <p className='page-link'>3</p>
              </li>
              <li className='page-item'>
                <p className='page-link'>4</p>
              </li>
              <li className='page-item'>
                <p className='page-link'>5</p>
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
    </div>
  )
}
export default pageResults
