import React from 'react'
import { TableRow, TableData } from '../../styled'

export const TableRows = ({ mediaList }) => {
  const renderTableRows = () => {
    return mediaList.map(item => {
      return (
        <TableRow key={item.key}>
          <TableData>{item.label}</TableData>
          <TableData>{item.data}</TableData>
        </TableRow>
      )
    })
  }
  return <>{renderTableRows()}</>
}
