import React, { useEffect, useState } from 'react'
import { getAllZipsAndTypes } from '../../Api/getVisualizationData'
import { ResponsiveHeatMapCanvas } from '@nivo/heatmap'
import PreContainerVisData  from '../../DevComponents/PreContainerVisData'
import { heatMapConverter } from './helpers/heatMapConverter'
import { typeLabels, typeLabelsColors, labelColorKey } from './helpers/allTypes'

const ZipHeatMap = () => {

  const [ heatMapData, setHeatMapData ] = useState([])

  useEffect(() => {

    const getAndConvertData = async () => {
      
      const zipAndTypesData = await getAllZipsAndTypes(true)

      if(zipAndTypesData){
        setHeatMapData(heatMapConverter(zipAndTypesData.data))
      }
    }

    getAndConvertData()


  }, [])


  return (
    <div className='heat-map-container'>
      <ResponsiveHeatMapCanvas
        data={heatMapData}
        keys={typeLabels}
        indexBy="zipcode"
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        forceSquare={false}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'zipcode',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.8 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(0, 0, 0, 0.1)',
                rotation: -45,
                lineWidth: 4,
                spacing: 7
            }
        ]}
        fill={[ { id: 'lines' } ]}
        animate={true}
        motionConfig="wobbly"
        motionStiffness={80}
        motionDamping={9}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
      <PreContainerVisData dataObj={{typeLength: typeLabels.length, typeLabels, labelColorKey, heatMapData}} />
    </div>
  )
}

export default ZipHeatMap
