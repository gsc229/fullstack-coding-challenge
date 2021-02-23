import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import { useTable, useGlobalFilter } from 'react-table'
import { COLUMNS } from './helpers/columns'
import GlobalFilter from './GlobalFilter'

const DataTable = ({complaintsData}) => {


  const columns = useMemo(() => COLUMNS, []) 
  const data = useMemo(() => complaintsData, [])

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows, 
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {columns, data}, 
    useGlobalFilter)

  const { globalFilter } = state

  return (
    <>
      
      <GlobalFilter filter={ globalFilter } setFilter={ setGlobalFilter } />
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
    </>
  )
}

export default DataTable
