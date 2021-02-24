import React from 'react'
import { complaintFieldTitle } from './complatintFieldTitle'
/* import ColumnFilter from '../ColumnFilter' */


export const COLUMNS = Object.entries(complaintFieldTitle)
.sort((a, b) => a[1].order - b[1].order)
.map(col => {
  return {
    Header: col[1].title, 
    Footer: col[1].title, 
    accessor: col[0],
    /* Filter: ColumnFilter, */
    Cell: function({ value }){
      if(col[0] === 'closedate'){
        if(!value) return <span style={{color: '#D8D8D8'}}>Open</span>
        return 'Closed ' + value
      }

      if(!value) return <span style={{color: '#D8D8D8'}}>no data</span>

      return value
    }
  }
})
