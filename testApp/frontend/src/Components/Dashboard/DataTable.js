import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import { useTable, useGlobalFilter, useSortBy, useFilters } from 'react-table'
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
    /* useFilters, */
    useGlobalFilter,
    useSortBy
    )

  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={ globalFilter } setFilter={ setGlobalFilter } />
      
      <Table responsive striped bordered hover size="sm" {...getTableProps}>
        <thead>
            {headerGroups.map((headerGroup, i) => (
            <tr key={`A-${i}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, j) => (
                <th key={`A-${i}-${j}`} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted 
                  ? 
                  (column.isSortedDesc 
                  ? <span className='sort-span'> &#x25BC;&nbsp; </span> 
                  : 
                  <span className='sort-span'> &#x25B2;&nbsp; </span>) 
                  : 
                  <span className='sort-span' >sort</span>}
                  <div>
                    {column.canFilter ? column.render('Filter') : null}
                  </div>
                </th>
              ))}
            </tr>
            ))}
          
        </thead>

        <tbody>

        {rows.map((row, i) => {
            
            prepareRow(row)
            return (
              <tr key={`B-${i}`} {...row.getRowProps()}>
                {row.cells.map((cell, j )=> {
                  return (
                    <td key={`B-${i}-${j}`} {...cell.getCellProps()}>
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
            footerGroups.map((footerGroup, i) => (
              <tr key={`C-${i}`} {...footerGroup.getFooterProps}>
                {
                  footerGroup.headers.map((column, j) =>(
                    <td key={`C-${i}-${j}`} {...column.getFooterProps}>
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
