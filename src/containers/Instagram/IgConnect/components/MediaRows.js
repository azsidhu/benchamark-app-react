import React from 'react'
import { DetailColumn, TableRow, TableData } from '../../styled'
import { Link } from 'react-router-dom'
import { extractRowData } from '../helper'

export const MediaRows = ({
  instaMediaIds,
  instaMedia,
  setIgConnectSearchText,
  searchText,
  setSelectedMedia
}) => {
  const renderMediaRows = () => {
    return instaMediaIds.map(id => {
      const rowData = extractRowData(instaMedia, id)
      return (
        <TableRow key={id}>
          {renderColumnData(rowData)}
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
