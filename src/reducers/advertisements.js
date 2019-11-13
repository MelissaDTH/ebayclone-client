import { ADVERTISEMENTS_FETCHED, NEW_ADVERTISEMENT } from "../actions/advertisements";

export default function(state = [], action = {}) {
  // console.log('ADVERTISEMENTS_FETCHED payload @ reducer?', action.payload)
  switch (action.type) {
    case ADVERTISEMENTS_FETCHED:
      return action.payload
      case NEW_ADVERTISEMENT:
        return [action.payload, ...state];
  
    default:
      return state;
  }
}
