import { ADVERTISEMENT_FETCHED } from "../actions/advertisements";

export default function(state = {}, action = {}) {
  console.log('ADVERTISEMENT_FETCHED payload @ reducer?', action.payload)
  switch (action.type) {
    case ADVERTISEMENT_FETCHED:
      return action.payload
  
    default:
      return state;
  }
}