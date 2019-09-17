import React from 'react'
import '../styles/IgConnect.css'
import '../styles/Global.css'

const TwConnect = ({ history }) => {
  return (
    <div>
      <div className='container'>
        <div
          className='col-sm-3 offset-sm-4'
          id='innerContainer'
        >
          <button
            type='submit'
            className='btn btn-primary btn-md connectBtn'
          >
            Twitter connect
          </button>
        </div>
      </div>
    </div>
  )
}

export default TwConnect
