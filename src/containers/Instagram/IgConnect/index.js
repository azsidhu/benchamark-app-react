import React, { useEffect, useState, useRef, useCallback } from 'react'
import { images } from '../../../assets/images'
import { theme } from '../../../config/theme'
import { ToastsStore } from 'react-toasts'
import { InstaRedirect } from '../../../config/urls'
import { ClipLoader } from 'react-spinners'
import { Button } from '../../../components/Button/index'
import { Container, InnerContainer } from '../../../config/commonStyles'
import { MediaRows } from './components/MediaRows'
import { ColumnHeadings } from './components/ColumnHeadings'
import {
  TableHeadContainer,
  TableHeading,
  TableSearchContainer,
  TableSearchLabel,
  TableSearchInput,
  Table,
  PagginationDiv as DummyDiv,
  SeparateTextDiv,
  ConnectIgDiv,
  SmallIcon,
  TableRow,
  THead,
  TBody,
  H5,
  TableContainer,
  LoadingContainer,
  CrawlUserInput,
  Anchor
} from '../styled'

export const IgConnect = ({
  history,
  fetchUserMedia,
  CrawlNewUser,
  setIgConnectSearchText,
  setSelectedMedia,
  accessToken,
  igConnectSearchText,
  instaMedia,
  instaMediaIds,
  dataLoading
}) => {
  const DummyDivRef = useRef(null)
  // local state variables
  const [currentPage, setCurrentPage] = useState(1)
  const [username, setUsername] = useState('')
  const [searchText, setSearchText] = useState('')

  // lifecycle methods
  const isInViewport = useCallback(
    (offset = 0) => {
      let element = DummyDivRef.current
      if (element) {
        const top = element.getBoundingClientRect().top
        if (top + offset >= 0 && top - Math.abs(offset) <= window.innerHeight) {
          setCurrentPage(currentPage + 1)
        }
      }
    },
    [currentPage]
  )

  useEffect(
    () => {
      if (igConnectSearchText) {
        setSearchText(igConnectSearchText)
        setIgConnectSearchText('')
      }
      // console.log('currentPage in useeffect: ', currentPage)
      fetchUserMedia(
        accessToken,
        currentPage,
        searchText.length > 1 ? searchText : ''
      )
    }, // eslint-disable-next-line
    [currentPage, searchText, accessToken, igConnectSearchText],
  )

  useEffect(
    () => {
      const attachListener = () => {
        window.addEventListener('scroll', () => isInViewport(), true)
      }

      const removeListener = () => {
        window.removeEventListener('scroll', isInViewport())
      }
      attachListener()
      return () => {
        removeListener()
      }
    },
    [isInViewport]
  )

  // helper methods for component

  const handleCrawlClick = () => {
    if (username.trim().length === 0) {
      ToastsStore.error('can not crawl an empty username')
    } else {
      CrawlNewUser(accessToken, username)
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
    <Container>
      <InnerContainer sm={{ span: 3, offset: 4 }}>
        <CrawlUserInput
          type='text'
          id='inputIgUser'
          placeholder='Enter Insta username'
          onChange={handleTextInputChange}
          marginRight='.5rem'
          borderColor={theme.lightGray}
        />
        <Button
          fontSize='1rem'
          backgroundColor={theme.buttonBackground}
          hoverBackground={theme.buttonHover}
          onClick={handleCrawlClick}
        >
          Crawl
        </Button>
      </InnerContainer>
      <SeparateTextDiv sm={{ span: 3, offset: 4 }}>
        <H5>{' OR '}</H5>
      </SeparateTextDiv>
      <ConnectIgDiv sm={{ span: 3, offset: 4 }}>
        <Anchor href={InstaRedirect}>
          <Button
            fontSize='1rem'
            fontFamily='Roboto'
            backgroundColor={theme.buttonBackground}
            hoverBackground={theme.buttonHover}
            paddingHorizontal='.4rem'
          >
            Connect to Instagram
            <SmallIcon
              width='2rem'
              height='2rem'
              display='inline'
              marginLeft='.4rem'
              src={images.instaLogo}
            />
          </Button>
        </Anchor>
      </ConnectIgDiv>
      <TableContainer sm={{ span: 9, offset: 1 }}>
        <TableHeadContainer>
          <TableHeading>Previous crawl results</TableHeading>
          <TableSearchContainer>
            <TableSearchLabel htmlFor='inputPassword'>Search:</TableSearchLabel>
            <TableSearchInput
              type='text'
              id='inputSearchText'
              onChange={handleTextInputChange}
              value={searchText}
              marginBottom='0.4rem'
              marginLeft='0.3rem'
              borderWidth='0rem'
              placeholder='Search by any column'
            />
          </TableSearchContainer>
        </TableHeadContainer>
        <Table
          backgroundColor={theme.light}
          marginBottom='0.05rem'
          borderSpacing='0.5em'
        >
          <THead>
            <TableRow>
              <ColumnHeadings />
            </TableRow>
          </THead>
          <TBody>
            <MediaRows
              instaMedia={instaMedia}
              instaMediaIds={instaMediaIds}
              setIgConnectSearchText={setIgConnectSearchText}
              searchText={searchText}
              setSelectedMedia={setSelectedMedia}
            />
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
          <DummyDiv ref={DummyDivRef} />
        )}
      </TableContainer>
    </Container>
  )
}
