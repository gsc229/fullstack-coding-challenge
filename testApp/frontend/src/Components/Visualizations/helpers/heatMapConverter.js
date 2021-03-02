import { labelColorKey } from '../helpers/allTypes'


const getTypeAndZipObject = (datum) => {

  const zipObj = {}

  Object.keys(labelColorKey).forEach(key =>{
    zipObj[key] = 0
    zipObj[`${key}Color`] = labelColorKey[key][`${key}Color`]
  })

  zipObj['zipcode'] = Object.keys(datum)[0]

  datum[Object.keys(datum)[0]].forEach(complaint => {
    zipObj[complaint.complaint_type] = complaint.count
  })

  return zipObj
}



export const heatMapConverter = (zipAndTypesData) => {

  const converted = zipAndTypesData.map(datum => getTypeAndZipObject(datum))



  return converted

}