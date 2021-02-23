import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'


const GlobalFilter = ({ filter, setFilter }) => {

  const [value, setValue] = useState(filter)

  // for large data sets debouncing will slow down search execution triggered by keyup events
  // the time paramer is the time it takes to execute the search after the user has finished typing
  const onChange = useAsyncDebounce(value => {
    setFilter(value || '')
  }, 200)

  return (
    <div className='global-filter'>
      Search: &nbsp;
      <input
      onClick={e => e.stopPropagation()}
      placeholder='all cells'
      value={value || ''}
      onChange={ e =>{
        setValue(e.target.value)
        onChange(e.target.value)
      }}/>
    </div>
  )
}

export default GlobalFilter
