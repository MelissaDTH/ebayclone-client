import request from 'superagent'
// import axios from 'axios'

export const ADVERTISEMENTS_FETCHED = 'ADVERTISEMENTS_FETCHED'
export const ADVERTISEMENT_FETCHED = 'ADVERTISEMENT_FETCHED'
export const NEW_ADVERTISEMENT = 'NEW_ADVERTISEMENT'
export const DELETE_ADVERTISEMENT_SUCCES = 'DELETE_ADVERTISEMENT_SUCCES'
export const ADVERTISEMENT_UPDATE_SUCCESS = 'ADVERTISEMENT_UPDATE_SUCCESS'

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

// delete one advertisement (use the action in both reducers wherever it has to be used)
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

// Update an advertisement (use the action in both reducers wherever it has to be used)
const advertisementUpdateSuccess = advertisement => ({
  type: ADVERTISEMENT_UPDATE_SUCCESS,
  payload: advertisement
})

export const updateAdvertisement = (id, newdata) => (dispatch) => {
  // a GET /advertisement request
  request
    .put(`${baseUrl}/advertisements/${id}`)
    .send(newdata)
    .then(response => {
      console.log("response update body:", response.body)
      // dispatch an ADVERTISEMENTS_FETCHED action that contains the ad's
      dispatch(advertisementUpdateSuccess(response.body))
    })
    .catch(console.error)
}