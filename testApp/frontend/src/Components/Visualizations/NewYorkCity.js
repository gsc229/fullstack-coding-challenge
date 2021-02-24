import React, { useContext, useMemo } from 'react'
import { complaintTypePieConverter, defs, fill } from './helpers/pieConverters'
import { TotalsContext } from '../../Pages/TotalsContext'
import PieChart from './PieChart'

const NewYorkCity = () => {

  const { totals } = useContext(TotalsContext)
  console.log({totals})
  const pieData = useMemo(() => complaintTypePieConverter(totals.typeTotals.data || []) , [totals])

  return (
    <div className='nyc-pie-container' >
      <PieChart data={pieData} defs={defs} fill={fill} showLegend={false} />
    </div>
  )
}

export default NewYorkCity
