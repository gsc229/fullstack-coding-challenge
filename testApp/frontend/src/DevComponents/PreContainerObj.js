import React from 'react'

const PreContainerObj = ({
  dataObj
}) => {


  return (
    <div className='pre-container'>
      {dataObj && Object.keys(dataObj).map(key => {
        return <pre style={{color: 'white'}}>{JSON.stringify({[key]: dataObj[key]}, null, 2)}</pre>
      })}
      {!dataObj && <p>DEV PRE CONTAINER: You didn't pass a data object prop down</p>}
    </div>
  )
}

export default PreContainerObj
