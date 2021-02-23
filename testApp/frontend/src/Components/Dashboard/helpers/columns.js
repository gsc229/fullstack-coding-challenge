import { complaintFieldTitle } from './complatintFieldTitle'


export const COLUMNS = Object.entries(complaintFieldTitle)
.sort((a, b) => a[1].order - b[1].order)
.map(col => ({Header: col[1].title, Footer: col[1].title, accessor: col[0]}))

console.log({COLUMNS})