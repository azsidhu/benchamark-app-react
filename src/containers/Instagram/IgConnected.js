import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FetchNewData, fetchUserMedia } from '../../actions/DataActions'
import { connect, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { pageSize } from '../../config/static'
import Pagination from 'react-js-pagination'
import Button from '../../components/Button'
import shortid from 'shortid'
import {
  TableHeadContainer,
  TableHeading,
  TableSearchContainer,
  TableSearchLabel,
  TableSearchInput,
  Table,
  PagginationDiv,
  DetailColumn
} from './styled'
import {
  tokenSelector,
  mediaSelector,
  mediaCountSelector,
  mediaIdsSelector,
  dataLoadingSelector
} from '../../selectors/index'
var moment = require('moment')

const IgConnected = ({ history, FetchNewData, fetchUserMedia }) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  // redux store selectors
  const state = useSelector(state => state)
  const accessToken = tokenSelector(state)
  const instaMedia = mediaSelector(state)
  const instaMediaIds = mediaIdsSelector(state)
  const dataLoading = dataLoadingSelector(state)
  const mediaCount = mediaCountSelector(state)

  useEffect(
    () => {
      if (window.location.href.split('#')[1] && !dataLoading) {
        let accessTokenIG = window.location.href.split('#')[1].split('=')[1]
        if (accessToken) {
          FetchNewData(accessToken, accessTokenIG)
        }
      }
    },
    [currentPage, dataLoading] // eslint-disable-line
  )
  // helper methods for component
  const handleCrawlClick = () => {
    history.push('/igconnect')
  }
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
        <tr key={shortid.generate()}>
          {renderColumnData([
            id,
            media_type,
            moment(created_at).format('lll'),
            likes_count,
            comments_count
          ])}
          <DetailColumn>
            <Link to='/igPageResults'>details</Link>
          </DetailColumn>
        </tr>
      )
    })
  }
  const renderColumnData = dataList => {
    return dataList.map((item, index) => {
      return <td key={shortid.generate()}>{item}</td>
    })
  }
  const renderColumnHeadings = () => {
    let columnsToRender = [
      'Id',
      'Media type',
      'Crawl time',
      'Likes',
      'Comments',
      'Visit'
    ]
    return columnsToRender.map((item, index) => {
      return (
        <th scope='col' key={shortid.generate()}>
          {item}
        </th>
      )
    })
  }
  return (
    <div className='container'>
      <div className='col-sm-2'>
        <Button
          type='submit'
          onClick={handleCrawlClick}
          marginTop='20px'
          marginBottom='10px'
        >
          Crawl again
        </Button>
      </div>
      <div className='col-sm-9 offset-sm-1'>
        <TableHeadContainer>
          <TableHeading>Recent crawl results</TableHeading>
          <TableSearchContainer>
            <TableSearchLabel htmlFor='inputPassword'>Search:</TableSearchLabel>
            <TableSearchInput
              type='text'
              className='form-control'
              id='inputSearchText'
            />
          </TableSearchContainer>
        </TableHeadContainer>
        <Table className='table'>
          <thead className='thead-dark'>
            <tr>{renderColumnHeadings()}</tr>
          </thead>
          <tbody>{renderMediaRows()}</tbody>
        </Table>
        {dataLoading ? (
          <div className='col-sm-5 offset-sm-5'>
            <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} loading />
          </div>
        ) : (
          <PagginationDiv>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={pageSize}
              totalItemsCount={mediaCount}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass='page-item'
              linkClass='page-link'
            />
          </PagginationDiv>
        )}
      </div>
    </div>
  )
}
export default connect(
  null,
  { FetchNewData, fetchUserMedia }
)(IgConnected)
