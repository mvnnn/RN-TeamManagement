import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, ADD_MEMBER } from '../constants'
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

    default:
      return state
  }
}
