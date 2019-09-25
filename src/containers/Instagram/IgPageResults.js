import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { fetchMediaDetail } from '../../actions/DataActions'
import * as moment from 'moment-timezone'
import {
  TableHeadContainer,
  TableHeading,
  Table,
  MediaDetailsDiv,
  InstagramFullImg
} from './styled'
import { tokenSelector, selectedMediaSelector } from '../../selectors/index'
import shortid from 'shortid'

const PageResults = ({ location, match, fetchMediaDetail }) => {
  // redux store selectors
  const state = useSelector(state => state)
  const accessToken = tokenSelector(state)
  const media = selectedMediaSelector(state)
  // local scope variables
  let mediaInsights = media ? media.media_insights[0] : null
  let { mediaId } = match.params
  useEffect(
    () => {
      if (!media) {
        fetchMediaDetail(accessToken, mediaId)
      }
    },
    [media] // eslint-disable-line
  )
  const renderTableRows = (titleList, dataList) => {
    return titleList.map((title, index) => {
      return (
        <tr key={shortid.generate()}>
          <td>{title}</td>
          <td>{dataList[index]}</td>
        </tr>
      )
    })
  }
  return (
    <div className='container'>
      <MediaDetailsDiv className='col-sm-10 offset-sm-1'>
        <TableHeadContainer>
          <TableHeading>Media Details</TableHeading>
        </TableHeadContainer>
        <div className='media'>
          <InstagramFullImg
            src={media ? media.media_url : ''}
            className='mr-3'
            alt='...'
          />
        </div>
        <div className='media-body'>
          {media ? (
            <Table className='table'>
              <tbody>
                <tr>
                  <td>Media url</td>
                  <td>
                    <a href={media.media_url}>{media.media_url}</a>
                  </td>
                </tr>
                {renderTableRows(
                  [
                    'Comments count',
                    'Likes count',
                    'Caption',
                    'Tags',
                    'Posted on Instagram'
                  ],
                  [
                    mediaInsights.comments_count,
                    mediaInsights.likes_count,
                    mediaInsights.media_caption,
                    mediaInsights.media_tags,
                    moment(mediaInsights.post_created_time).format('lll')
                  ]
                )}
              </tbody>
            </Table>
          ) : (
            <div />
          )}
        </div>
      </MediaDetailsDiv>
    </div>
  )
}
export default connect(
  null,
  { fetchMediaDetail }
)(PageResults)
