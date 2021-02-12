import React from 'react'
import { TableHeadRow } from '../../styled'
import { columnsToRender } from '../helper'

export const ColumnHeadings = () => {
  const renderColumnHeadings = () => {
    return columnsToRender.map(item => {
      return (
        <TableHeadRow scope='col' key={item.key}>
          {item.value}
        </TableHeadRow>
      )
    })
  }
  return <>{renderColumnHeadings()}</>
}
