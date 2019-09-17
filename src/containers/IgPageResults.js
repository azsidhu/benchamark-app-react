import React from 'react'
import '../styles/IgConnect.css'

const pageResults = ({ location }) => {
  let url =
    'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
  let media
  if (location.data) {
    media = location.data.media
    url = media.media_url
  }
  return (
    <div>
      <div className='container'>
        <div
          className='col-sm-10 offset-sm-1'
          id='mediaDetailsDiv'
        >
          <div className='tableHeadContainer'>
            <h4>Media Details</h4>
          </div>
          <div className='media'>
            <img
              src={url}
              className='mr-3'
              alt='...'
              id='igMediaImg'
            />
          </div>
          <div className='media-body'>
            {media ? (
              <table className='table'>
                <tbody>
                  <tr>
                    <td>instagram user</td>
                    <td>{media.id}</td>
                  </tr>
                  <tr>
                    <td>media_id</td>
                    <td>{media.id}</td>
                  </tr>
                  <tr>
                    <td>media_url</td>
                    <td>
                      <a href={media.media_url}>{media.media_url}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>comments_count</td>
                    <td>{media.media_insights[0].comments_count}</td>
                  </tr>
                  <tr>
                    <td>likes_count</td>
                    <td>{media.media_insights[0].likes_count}</td>
                  </tr>
                  <tr>
                    <td>caption</td>
                    <td>{media.media_insights[0].media_caption}</td>
                  </tr>
                  <tr>
                    <td>tags</td>
                    <td>{media.media_insights[0].media_tags}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default pageResults
