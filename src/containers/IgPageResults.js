import React, { useEffect } from 'react'
import '../styles/IgConnect.css'
import { connect, useSelector } from 'react-redux'
import { fetchMediaDetail } from '../actions/DataActions'
import * as moment from 'moment-timezone'

const PageResults = ({ location, match, fetchMediaDetail }) => {
  // redux store data
  const data = useSelector(state => state.data)
  const auth = useSelector(state => state.user.auth)
  // local scope variables
  let media = data.selectedMedia
  let { mediaId } = match.params
  useEffect(
    () => {
      if (!media) {
        fetchMediaDetail(auth.access, mediaId)
      }
    },
    [media] // eslint-disable-line
  )
  return (
    <div>
      <div className='container'>
        <div className='col-sm-10 offset-sm-1' id='mediaDetailsDiv'>
          <div className='tableHeadContainer'>
            <h4>Media Details</h4>
          </div>
          <div className='media'>
            <img
              src={media ? media.media_url : ''}
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
                    <td>Media url</td>
                    <td>
                      <a href={media.media_url}>{media.media_url}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Comments count</td>
                    <td>{media.media_insights[0].comments_count}</td>
                  </tr>
                  <tr>
                    <td>Likes count</td>
                    <td>{media.media_insights[0].likes_count}</td>
                  </tr>
                  <tr>
                    <td>Caption</td>
                    <td>{media.media_insights[0].media_caption}</td>
                  </tr>
                  <tr>
                    <td>Tags</td>
                    <td>{media.media_insights[0].media_tags}</td>
                  </tr>
                  <tr>
                    <td>Posted on Instagram</td>
                    <td>
                      {moment(media.media_insights[0].post_created_time).format(
                        'lll'
                      )}
                    </td>
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
export default connect(
  null,
  { fetchMediaDetail }
)(PageResults)
