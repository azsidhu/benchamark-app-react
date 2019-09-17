import React from 'react'
import '../styles/IgConnect.css'
import '../styles/Global.css'

const FbConnect = ({ history }) => {
  return (
    <div>
      <div className='container'>
        <div className='container'>
          <div
            className='col-sm-3 offset-sm-4'
            id='innerContainer'
          >
            <button
              type='submit'
              className='btn btn-primary btn-md connectBtn'
            >
              Facebook connect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FbConnect
