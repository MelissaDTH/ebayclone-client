import request from 'superagent'
// import axios from 'axios'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'
export const ADVERTISEMENT_FETCHED = 'ADVERTISEMENT_FETCHED'
export const NEW_ADVERTISEMENT = 'NEW_ADVERTISEMENT'

const baseUrl = 'http://localhost:4000' // url from the api

const advertisementsFetched = advertisements => ({
  type: ADVERTISEMENTS_FETCHED,
  payload : advertisements
})

export const loadAdvertisements = () => (dispatch, getState) => {
  // when the state already contains advertisements, we don't fetch them again
  if (getState().advertisements.length) return

  // this is a function in a function, thus a thunk.
  request(`${baseUrl}/advertisements`)
    .then(response => {

      dispatch(advertisementsFetched(response.body))
    })
    .catch(console.error)
}

// Create a new adv (sell)
const newAdvertisement = advertisement => ({
    type: NEW_ADVERTISEMENT,
    payload: advertisement
})

export const createAdvertisement = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/advertisements`)
    .send(data)
    .then(response => {
      const action = newAdvertisement(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

// Show details of 1 advertisement
const advertisementFetched = advertisement => ({
  type: ADVERTISEMENT_FETCHED,
  payload : advertisement
})

export const loadAdvertisement = (id) => (dispatch, getState) => {
  console.log('getState', getState().advertisement);
  
  if (getState().advertisement.length) return

  request(`${baseUrl}/advertisements/${id}`)
    .then(response => {

      dispatch(advertisementFetched(response.body))
    })
    .catch(console.error)
}

// delete one advertisement
export const DELETE_ADVERTISEMENT_SUCCES = 'DELETE_ADVERTISEMENT_SUCCES'
const deleteAdvertisementSuccess = id => ({
  type: DELETE_ADVERTISEMENT_SUCCES,
  payload: id
})

export const deleteAdvertisement = id => (dispatch, getState) => {
  // const jwt = getState().user.jwt; //AUTHORIZATION
  //console.log("Login: ", getState().login)
  //console.log("Advertisement: ", id)
  request
    .delete(`${baseUrl}/advertisements/${id}`)
    // .set("Authorization", `Bearer ${jwt}`) //AUTHORIZATION
    .then(response => {
      console.log("response delete body:", response.body)
      dispatch(deleteAdvertisementSuccess(response.body))
    })
    .catch(console.error)
}