import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FetchNewData, fetchUserMedia } from '../../actions/DataActions'
import { connect, useSelector } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay'
import Loader from 'react-spinners/ClipLoader'
import { pageSize } from '../../config/static'
import Pagination from 'react-js-pagination'
import Button from '../../components/Button'
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
var moment = require('moment')

const IgConnected = ({ history, FetchNewData, fetchUserMedia }) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  // redux store data
  const auth = useSelector(state => state.user.auth)
  // console.log('auth: ',auth)
  const dataLoading = useSelector(state => state.data.dataLoading)
  const data = useSelector(state => state.data)
  // local scope variables
  const instaMedia = data.instaMedia
  const instaMediaIds = data.instaMediaIds
  useEffect(
    () => {
      if (window.location.href.split('#')[1] && !dataLoading) {
        let accessToken = window.location.href.split('#')[1].split('=')[1]
        if (auth.access) {
          FetchNewData(auth.access, accessToken)
        }
      }
    },
    [currentPage, dataLoading] // eslint-disable-line
  )
  // helper methods for component
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
        <tr key={index}>
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
      return <td key={index}>{item}</td>
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
        <th scope='col' key={index}>
          {item}
        </th>
      )
    })
  }
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
      <div className='container'>
        <div className='col-sm-2'>
          <Button
            type='submit'
            onClick={() => history.push('/igconnect')}
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
              <TableSearchLabel htmlFor='inputPassword'>
                Search:
              </TableSearchLabel>
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
          <PagginationDiv>
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={pageSize}
              totalItemsCount={data.mediaCount}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              itemClass='page-item'
              linkClass='page-link'
            />
          </PagginationDiv>
        </div>
      </div>
    </LoadingOverlay>
  )
}
export default connect(
  null,
  { FetchNewData, fetchUserMedia }
)(IgConnected)
