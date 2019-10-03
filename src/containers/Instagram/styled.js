import styled from 'styled-components'
import { FormInput } from '../../config/commonStyles'
import { Col, Table as bootTable, Image } from 'react-bootstrap'

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

export const TableSearchInput = styled(FormInput)`
  margin-bottom: 0.4rem;
  margin-left: 0.3rem;
`

export const CrawlUserInput = styled(FormInput)`
  margin-right: 0.3rem;
`

export const Table = styled(bootTable)`
  background-color: ${props => props.theme.light};
  margin-bottom: 0.05rem;
  border-collapse: separate;
  border-spacing: 0.4em;
`

export const TableRow = styled.tr`
  padding-top: 2rem;
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

export const SmallIcon = styled(Image)`
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
`

export const MediaDetailsDiv = styled(Col)`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const InstagramFullImg = styled(Image)`
  width: 30rem;
  max-height: 18rem;
  margin-bottom: 1rem;
`

export const Anchor = styled.a``
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
