import React, { useEffect } from 'react'
import { Container } from '../../../config/commonStyles'
import {
  TableHeadContainer,
  TableHeading,
  Table,
  MediaDetailsDiv,
  InstagramFullImg,
  TableRow,
  TableData,
  TBody,
  Anchor,
  MediaContainer,
  MediaDetailContainer
} from '../styled'
import { extractData } from './helper'
import { TableRows } from './components/TableRows'

export const PageResults = ({
  match: {
    params: { mediaId }
  },
  fetchMediaDetail,
  accessToken,
  media
}) => {
  // local scope variables
  let mediaInsights = media ? media.media_insights[0] : null
  useEffect(
    () => {
      if (!media) {
        fetchMediaDetail(accessToken, mediaId)
      }
    },
    [media] // eslint-disable-line
  )
  return (
    <Container>
      <MediaDetailsDiv sm={{ span: 10, offset: 1 }}>
        <TableHeadContainer>
          <TableHeading>Media Details</TableHeading>
        </TableHeadContainer>
        <MediaContainer>
          <InstagramFullImg
            src={media ? media.media_url : ''}
            thumbnail
            marginBottom='1rem'
            maxHeight='18rem'
            width='30rem'
            scaleX='-1'
            padding='.2rem'
            borderWidth='.1rem'
          />
        </MediaContainer>
        <MediaDetailContainer>
          {!media || (
            <Table>
              <TBody>
                <TableRow>
                  <TableData>Media url</TableData>
                  <TableData>
                    <Anchor href={media.media_url}>{media.media_url}</Anchor>
                  </TableData>
                </TableRow>
                <TableRows mediaList={extractData(mediaInsights)} />
              </TBody>
            </Table>
          )}
        </MediaDetailContainer>
      </MediaDetailsDiv>
    </Container>
  )
}
