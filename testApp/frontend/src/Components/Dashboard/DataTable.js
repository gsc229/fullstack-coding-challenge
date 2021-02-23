import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import { useTable } from 'react-table'
import { COLUMNS } from './helpers/columns'
import { complaintFieldTitle } from './helpers/complatintFieldTitle'

const DataTable = ({complaintsData}) => {


  const columns = useMemo(() => COLUMNS, []) 
  const data = useMemo(() => complaintsData, [])

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows, 
    prepareRow
  } = useTable({columns, data: [...data]})

  return (
    <Table responsive striped bordered hover size="sm" {...getTableProps}>
      <thead>
          
          {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
          ))}
        
      </thead>
      <tbody>
      {rows.map((row, i) => {
          /* console.log({row}) */
          row.values.closedate = row.values.closedate ? `Closed ${row.values.closedate}` : 'Open'
          row.values.council_dist = row.values.council_dist ? row.values.council_dist : 'not provided'
          row.values.city = row.values.city ? row.values.city : 'not provided'
          row.values.borough = row.values.borough ? row.values.borough : 'not provided'
          row.values.community_board = row.values.community_board === ' ' ? 'not provided' : row.values.community_board 
          row.values.zip = row.values.zip ? row.values.zip : 'not provided'
          
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        {
          footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterProps}>
              {
                footerGroup.headers.map(column =>(
                  <td{...column.getFooterProps}>
                  {
                    column.render('Footer')
                  }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tfoot>
    </Table>
  )
}

export default DataTable
