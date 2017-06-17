import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, ADD_MEMBER } from './constants'
import getPeoples from './api'

// export function fetchPeopleFromAPI() {
//   return (dispatch) => {
//     dispatch(getPeople())
//     fetch('https://swapi.co/api/people/')
//     .then(data => data.json())
//     .then(json => {
//       console.log('json:', json)
//       dispatch(getPeopleSuccess(json.results))
//     })
//     .catch(err => dispatch(getPeopleFailure(err)))
//   }
// }

export function fetchData() {
  return (dispatch) => {
    dispatch(getPeople())
    getPeoples()
      .then((data) => {
        dispatch(getPeopleSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function getPeople() {
  return {
    type: FETCHING_PEOPLE
  }
}

export function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data,
  }
}

export function getPeopleFailure() {
  return {
    type: FETCHING_PEOPLE_FAILURE
  }
}

export function addMember(first_name, last_name, email, contact_no, role) {
  return {
    type: ADD_MEMBER,
    first_name,
    last_name,
    email,
    contact_no,
    role
  }
}
