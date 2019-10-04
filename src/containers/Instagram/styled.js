import styled from 'styled-components'
import { FormInput } from '../../config/commonStyles'
import { Col } from 'react-bootstrap'
import { Image } from '../../components/Image/index'
import { Table as customTable } from '../../components/Table/index'

export const TableHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TableHeading = styled.h4`
  margin-left: 0.4rem;
`

export const TableSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TableSearchLabel = styled.label`
  align-self: center;
`

export const TableSearchInput = styled(FormInput)``

export const CrawlUserInput = styled(FormInput)``

export const Table = styled(customTable)``

export const TableRow = styled.tr`
  padding-top: 3rem;
`
export const TableData = styled.td``
export const TableHeadRow = styled.th``

export const PagginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end
  margin-bottom: 2rem;
`

export const DetailColumn = styled.td`
  cursor: pointer;
`

export const SeparateTextDiv = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 0.5rem;
`
export const ConnectIgDiv = styled(Col)`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.2rem;
`

export const SmallIcon = styled(Image)``

export const MediaDetailsDiv = styled(Col)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const InstagramFullImg = styled(Image)``

export const Anchor = styled.a`
  width: 100%;
  :hover {
    text-decoration: none;
  }
`
export const H5 = styled.h5``
export const THead = styled.thead`
  background-color: ${props => props.theme.dark}
  color: ${props => props.theme.light};
`
export const TBody = styled.tbody``
export const TableContainer = styled(Col)``
export const LoadingContainer = styled(Col)``

export const MediaContainer = styled.div``
export const MediaDetailContainer = styled.div``

export const PageTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
