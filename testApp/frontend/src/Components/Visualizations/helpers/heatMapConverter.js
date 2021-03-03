import { labelColorKey } from '../helpers/allTypes'


const getTypeAndZipObject = (datum) => {

  const zipObj = {}

  
  
    Object.keys(labelColorKey).forEach(key =>{
      zipObj[key] = 0
      zipObj[`${key}Color`] = labelColorKey[key][`${key}Color`]
    })

    zipObj['zipcode'] = datum.zip

    datum.breakdown.forEach(complaint => {
      if(complaint.complaint_type) zipObj[complaint.complaint_type] = complaint.count
    })

  

  return zipObj
}



export const heatMapConverter = (zipAndTypesData) => {

  const converted = zipAndTypesData.filter(datum => datum.zip.length === 5).map(datum => getTypeAndZipObject(datum))

  return converted

}