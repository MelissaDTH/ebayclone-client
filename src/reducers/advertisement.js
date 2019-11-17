import { ADVERTISEMENT_FETCHED, DELETE_ADVERTISEMENT_SUCCES } from "../actions/advertisements";

export default function(state = {}, action = {}) {
  // console.log('ADVERTISEMENT_FETCHED payload @ reducer?', action.payload)
  switch (action.type) {
    case ADVERTISEMENT_FETCHED:
      return action.payload
    case DELETE_ADVERTISEMENT_SUCCES:
      return {}
    default:
      return state;
  }
}