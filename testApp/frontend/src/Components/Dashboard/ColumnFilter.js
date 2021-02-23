import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

const ColumnFilter = ({ column }) => {

  const { filterValue, setFilter } = column

  const [value, setValue] = useState(filterValue)

  // for large data sets debouncing will slow down search execution triggered by keyup events
  // the time paramer is the time it takes to execute the search after the user has finished typing
  const onChange = useAsyncDebounce(value => {
    setFilter(value || '')
  }, 200)

  return (
    <div className='column-filter'>
      <input
      onClick={ e => e.stopPropagation()}
      placeholder='column search' 
      onChange={ e => {
        setValue(e.target.value)
        onChange(e.target.value)
      }}
      value={ filterValue || '' }/>
    </div>
  )
}

export default ColumnFilter
