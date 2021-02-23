import React, { useContext, useMemo } from 'react'
import { ResponsivePie } from '@nivo/pie'
import { DashBoardContext } from '../../Pages/DashBoardContext'
import { pieConverter, defs, fill } from './helpers/pieConverter'
import { useWindowSize } from '../../custom_hooks/useWindowSize'


const PieChart = () => {

  const { complaintTallies } = useContext(DashBoardContext)

  const { width } = useWindowSize()

  const getStyles = () => {

    if(width > 991){
      return{
        margin: { top: 40, right: 100, bottom: 80, left: 180 },
        legend: {
          translateX: 0,
          translateY: 62,
          itemsSpacing: 15,
          itemWidth: 78,
          itemHeight: 26
        }
      }
    } else{
      
    return{
      margin: { top: 40, right: 150, bottom: 100, left: 180 },
      legend: {
        translateX: -150,
        translateY: 62,
        itemsSpacing: 15,
        itemWidth: 78,
        itemHeight: 26
      }
    }
    }
  }

  const data = pieConverter(complaintTallies)


  return (
    <ResponsivePie
        data={data}
        margin={getStyles().margin}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'purple_blue' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        defs={defs}
        fill={fill}
        legends={[
          {   
              ...getStyles().legend,
              anchor: 'bottom-left',
              direction: 'row',
              justify: false,
              itemTextColor: '#999',
              itemDirection: 'top-to-bottom',
              itemOpacity: 1,
              symbolSize: 19,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
    />
  )
}

export default PieChart
