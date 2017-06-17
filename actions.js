import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE, ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER } from './constants'
import getPeoples from './api'

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
    data
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

export function editMember(first_name, last_name, email, contact_no, role) {
  return {
    type: EDIT_MEMBER,
    first_name,
    last_name,
    email,
    contact_no,
    role
  }
}

export function deleteMember(email) {
  return {
    type: DELETE_MEMBER,
    email
  }
}
