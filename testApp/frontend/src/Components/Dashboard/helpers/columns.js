import { complaintFieldTitle } from './complatintFieldTitle'
import ColumnFilter from '../ColumnFilter'


export const COLUMNS = Object.entries(complaintFieldTitle)
.sort((a, b) => a[1].order - b[1].order)
.map(col => (
  {
    Header: col[1].title, 
    Footer: col[1].title, 
    accessor: col[0],
    Filter: ColumnFilter
  }
))

console.log({COLUMNS})