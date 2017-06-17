import { FETCHING_MEMBER, FETCHING_MEMBER_SUCCESS, FETCHING_MEMBER_FAILURE, ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER } from './constants'
import getMembers from './api'

export function fetchData() {
  return (dispatch) => {
    dispatch(getMember())
    getMembers()
      .then((data) => {
        dispatch(getMemberSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function getMember() {
  return {
    type: FETCHING_MEMBER
  }
}

export function getMemberSuccess(data) {
  return {
    type: FETCHING_MEMBER_SUCCESS,
    data
  }
}

export function getMemberFailure() {
  return {
    type: FETCHING_MEMBER_FAILURE
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
