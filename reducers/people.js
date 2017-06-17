import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER } from '../constants'
const initialState = {
  people: [],
  isFetching: false,
  error: false
}

export default function peopleReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_PEOPLE:
      return {
        ...state,
        people: [],
        isFetching: true
      }

    case FETCHING_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.data
      }

    case FETCHING_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }

    case ADD_MEMBER:
    state.people.push({ first_name: action.first_name, last_name:action.last_name, email:action.email, mobile_no:action.mobile_no, role:action.role })
    return {
      ...state,
      isFetching: false,
      people: state.people
    }

    case EDIT_MEMBER:
    state.people.push({ first_name: action.first_name, last_name:action.last_name, email:action.email, mobile_no:action.mobile_no, role:action.role })
    return {
      ...state,
      isFetching: false,
      people: state.people
    }

    case DELETE_MEMBER:

    function search(email, people){
    for (let i=0; i < people.length; i++) {
        if (people[i].email === email) {
            return i;
        }
      }
    }
    var ObjectIndex = search(action.email, state.people);
    state.people.splice(ObjectIndex,1);
    return {
      ...state,
      isFetching: false,
      people: state.people
    }

    default:
      return state
  }
}
