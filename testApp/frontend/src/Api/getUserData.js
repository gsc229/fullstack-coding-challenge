import axiosWithAuth from '../utils/axiosWIthAuth'

export const getUserProfile = (logOutput=false) => {
  return axiosWithAuth()
  .get('userProfile/user/get-profile')
  .then(profileResponse => {
    logOutput && console.log({profileResponse})
    return profileResponse
  })
  .catch(profileError => {
    logOutput && console.log({profileError})
    return false
  })
}
