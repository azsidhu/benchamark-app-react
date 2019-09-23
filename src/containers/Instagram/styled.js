import styled from 'styled-components'

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 10px;
`

const TableHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TableHeading = styled.h4`
  margin-left: 5px;
`

const TableSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TableSearchLabel = styled.label`
  align-self: center;
`

const TableSearchInput = styled.input`
  margin-bottom: 5px;
  margin-left: 2px;
`

const Table = styled.table`
  background-color: #fff;
  margin-bottom: 1px;
`

const PagginationDiv = styled.div`
  float: right;
  margin-bottom: 50px;
`

const DetailColumn = styled.td`
  color: #1565c0;
  cursor: pointer;
`

const SeparateTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`
const ConnectIgDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`

const SmallIcon = styled.img`
  margin-left: 4px;
  width: 30;
  height: 30px;
`

const MediaDetailsDiv = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`

const InstagramFullImg = styled.img`
  width: 600px;
  height: 400px;
  margin-bottom: 10px;
`

export {
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
  SmallIcon,
  MediaDetailsDiv,
  InstagramFullImg
}
