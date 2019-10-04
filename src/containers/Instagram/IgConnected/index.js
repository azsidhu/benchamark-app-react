import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { pageSize } from '../../../config/utils'
import Pagination from 'react-js-pagination'
import { Button } from '../../../components/Button/index'
import { theme } from '../../../config/theme'
import { Container, InnerContainer } from '../../../config/commonStyles'
import Modal from '../../../components/Modal/Modal'
import {
  TableHeadContainer,
  TableHeading,
  TableSearchContainer,
  TableSearchLabel,
  TableSearchInput,
  Table,
  PagginationDiv,
  TableRow,
  THead,
  TBody,
  LoadingContainer,
  TableContainer
} from '../styled'
import { crawlerMsg, actionBtnTitle } from './helper'
import { MediaRows } from './components/MediaRows'
import { ColumnHeadings } from './components/ColumnHeadings'

export const IgConnected = ({
  history,
  FetchNewData,
  setCrawledImagesZIPlink,
  accessToken,
  instaMedia,
  instaMediaIds,
  dataLoading,
  mediaCount,
  zipImagesLink
}) => {
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)

  // lifecycle hooks
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
  const onCloseModal = () => {
    setCrawledImagesZIPlink(null)
  }
  const onActionBtnClick = () => {
    window.open(zipImagesLink)
    setCrawledImagesZIPlink(null)
  }
  return (
    <Container>
      <InnerContainer sm={{ span: 2, offset: 0 }}>
        <Button
          backgroundColor={theme.buttonBackground}
          hoverBackground={theme.buttonHover}
          onClick={handleCrawlClick}
        >
          Crawl again
        </Button>
      </InnerContainer>
      <TableContainer sm={{ span: 9, offset: 1 }}>
        <TableHeadContainer>
          <TableHeading>Recent crawl results</TableHeading>
          <TableSearchContainer>
            <TableSearchLabel htmlFor='inputPassword'>Search:</TableSearchLabel>
            <TableSearchInput type='text' id='inputSearchText' />
          </TableSearchContainer>
        </TableHeadContainer>
        <Table>
          <THead>
            <TableRow>
              <ColumnHeadings />
            </TableRow>
          </THead>
          <TBody>
            {dataLoading || (
              <MediaRows
                instaMediaIds={instaMediaIds}
                instaMedia={instaMedia}
              />
            )}
          </TBody>
        </Table>
        {dataLoading ? (
          <LoadingContainer sm={{ span: 5, offset: 5 }}>
            <ClipLoader
              sizeUnit={'rem'}
              size={4}
              color={theme.loaderColor}
              loading
            />
          </LoadingContainer>
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
      </TableContainer>
      {!zipImagesLink || (
        <Modal
          bodyString={crawlerMsg}
          actionBtnTitle={actionBtnTitle}
          hideHeading
          onCloseModal={onCloseModal}
          onActionBtnClick={onActionBtnClick}
        />
      )}
    </Container>
  )
}
