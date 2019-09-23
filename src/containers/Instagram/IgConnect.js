import React, { useEffect, useState } from 'react'
import { images } from '../../assets/images'
import { connect, useSelector } from 'react-redux'
import {
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
} from '../../actions/DataActions'
import { Link } from 'react-router-dom'
import { pageSize } from '../../config/static'
import Pagination from 'react-js-pagination'
import { ToastsStore } from 'react-toasts'
import * as moment from 'moment-timezone'
import { InstaRedirect } from '../../config/urls'
import { ClipLoader } from 'react-spinners'
import Button from '../../components/Button'
import AnchorButton from '../../components/AnchorButton'
import {
  InnerContainer,
  TableHeadContainer,
  TableHeading,
  TableSearchContainer,
  TableSearchLabel,
  TableSearchInput,
  Table,
  PagginationDiv,
  DetailColumn,
  SeparateTextDiv,
  ConnectIgDiv,
  SmallIcon
} from './styled'

const IgConnect = ({
  history,
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia
}) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  const [username, setUsername] = useState('')
  const [searchText, setSearchText] = useState('')
  // redux store data
  const auth = useSelector(state => state.user.auth)
  const data = useSelector(state => state.data)
  // local scope variables
  const instaMedia = data.instaMedia
  const instaMediaIds = data.instaMediaIds
  const igConnectSearchText = data.igConnectSearchText

  useEffect(
    () => {
      if (igConnectSearchText) {
        setSearchText(igConnectSearchText)
        setIgConnectSearchText('')
      }
      fetchUserMedia(
        auth.access,
        currentPage,
        searchText.length > 1 ? searchText : ''
      )
    },
    [currentPage, searchText] // eslint-disable-line
  )
  // helper methods for component
  const handlePageChange = pageNumber => {
    setCurrentPage(Number(pageNumber))
  }

  const renderMediaRows = () => {
    return instaMediaIds.map((id, index) => {
      const { created_at, insta_user_id } = instaMedia[id]
      const {
        media_type,
        likes_count,
        comments_count,
        filter_used
      } = instaMedia[id].media_insights[0]
      let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return (
        <tr key={index}>
          {renderColumnData([
            id,
            insta_user_id,
            media_type,
            moment(created_at)
              .tz(timezone)
              .format('lll'),
            filter_used,
            likes_count,
            comments_count
          ])}
          <DetailColumn>
            <Link
              to={`/igPageResults/${id}`}
              onClick={() => {
                setIgConnectSearchText(searchText)
                setSelectedMedia(instaMedia[id])
              }}
            >
              details
            </Link>
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
      'Insta uid',
      'Media type',
      'Crawl time',
      'Filter used',
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

  const handleCrawlClick = () => {
    if (username.trim().length === 0) {
      ToastsStore.error('can not crawl an empty username')
    } else {
      CrawlNewUser(auth.access, username)
      history.push('/igconnected')
    }
  }
  const handleTextInputChange = event => {
    if (event.target.id === 'inputIgUser') {
      setUsername(event.target.value)
    } else if (event.target.id === 'inputSearchText') {
      setSearchText(event.target.value)
    }
  }
  return (
    <div>
      <div className='container'>
        <InnerContainer className='col-sm-3 offset-sm-4'>
          <input
            type='text'
            className='form-control'
            id='inputIgUser'
            placeholder='Enter Insta username'
            onChange={handleTextInputChange}
          />
          <Button
            type='submit'
            onClick={handleCrawlClick}
            marginLeft='10px'
            paddingHorizontal='20px'
          >
            Crawl
          </Button>
        </InnerContainer>
        <SeparateTextDiv className='col-sm-3 offset-sm-4'>
          <h5>{' OR '}</h5>
        </SeparateTextDiv>
        <ConnectIgDiv className='col-sm-3 offset-sm-4'>
          <AnchorButton href={InstaRedirect} role='button'>
            Connect to Instagram
            <SmallIcon
              src={images.instaLogo}
              className='d-inline-block align-top'
              alt=''
            />
          </AnchorButton>
        </ConnectIgDiv>
        <div className='col-sm-9 offset-sm-1'>
          <TableHeadContainer>
            <TableHeading>Previous crawl results</TableHeading>
            <TableSearchContainer>
              <TableSearchLabel htmlFor='inputPassword'>
                Search:
              </TableSearchLabel>
              <TableSearchInput
                type='text'
                className='form-control'
                id='inputSearchText'
                onChange={handleTextInputChange}
                value={searchText}
              />
            </TableSearchContainer>
          </TableHeadContainer>
          <Table className='table'>
            <thead className='thead-dark'>
              <tr>{renderColumnHeadings()}</tr>
            </thead>
            <tbody>{data.dataLoading ? <tr /> : renderMediaRows()}</tbody>
          </Table>
          {data.dataLoading ? (
            <div className='col-sm-5 offset-sm-5'>
              <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} loading />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  )
}
export default connect(
  null,
  {
    fetchUserMedia,
    CrawlNewUser,
    setIgConnectSearchText,
    setSelectedMedia
  }
)(IgConnect)
