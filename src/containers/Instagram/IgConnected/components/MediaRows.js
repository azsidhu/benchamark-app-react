import React from 'react'
import { Link } from 'react-router-dom'
import { DetailColumn, TableRow, TableData } from '../../styled'
import { extractRowData } from '../helper'

export const MediaRows = ({ instaMediaIds, instaMedia }) => {
  const renderMediaRows = () => {
    return instaMediaIds.map(id => {
      const rowData = extractRowData(instaMedia, id)
      return (
        <TableRow key={id}>
          {renderColumnData(rowData)}
          <DetailColumn>
            <Link to='/igPageResults'>details</Link>
          </DetailColumn>
        </TableRow>
      )
    })
  }
  const renderColumnData = dataList => {
    return dataList.map(item => {
      return <TableData key={item.key}>{item.value}</TableData>
    })
  }

  return <>{renderMediaRows()}</>
}
