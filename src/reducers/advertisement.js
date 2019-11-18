import { ADVERTISEMENT_FETCHED, DELETE_ADVERTISEMENT_SUCCES, ADVERTISEMENT_UPDATE_SUCCESS } from "../actions/advertisements";

export default function(state = {}, action = {}) {
  // console.log('ADVERTISEMENT_FETCHED payload @ reducer?', action.payload)
  switch (action.type) {
    case ADVERTISEMENT_FETCHED:
      return action.payload

    case DELETE_ADVERTISEMENT_SUCCES:
      return {}

    case ADVERTISEMENT_UPDATE_SUCCESS:
      return action.payload
      
    default:
      return state;
  }
}