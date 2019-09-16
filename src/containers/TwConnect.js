import React from 'react'
import Header from '../components/Header'
import '../styles/IgConnect.css'
import '../styles/Global.css'

const TwConnect = ({ history }) => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div
          className='col-sm-3 offset-sm-4'
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 60,
            marginTop: 60
          }}
        >
          <button
            type='submit'
            className='btn btn-primary btn-md'
            style={{ marginLeft: 10 }}
          >
            Twitter connect
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwConnect
