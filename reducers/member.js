import { FETCHING_MEMBER, FETCHING_MEMBER_SUCCESS, FETCHING_MEMBER_FAILURE, ADD_MEMBER, EDIT_MEMBER, DELETE_MEMBER } from '../constants'
const initialState = {
  member: [],
  isFetching: false,
  error: false
}

export default function memberReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_MEMBER:
      return {
        ...state,
        member: [],
        isFetching: true
      }

    case FETCHING_MEMBER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        member: action.data
      }

    case FETCHING_MEMBER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }

    case ADD_MEMBER:
    state.member.push({ first_name: action.first_name, last_name:action.last_name, email:action.email, mobile_no:action.mobile_no, role:action.role })
    return {
      ...state,
      isFetching: false,
      member: state.member
    }

    case EDIT_MEMBER:
    function search(email, member){
    for (let i=0; i < member.length; i++) {
        if (member[i].email === email) {
            return i;
        }
      }
    }
    var ObjectIndex = search(action.email, state.member);
    state.member[ObjectIndex] = { first_name: action.first_name, last_name:action.last_name, email:action.email, mobile_no:action.mobile_no, role:action.role } ;
    return {
      ...state,
      isFetching: false,
      member: state.member
    }

    case DELETE_MEMBER:

    function search(email, member){
    for (let i=0; i < member.length; i++) {
        if (member[i].email === email) {
            return i;
        }
      }
    }
    var ObjectIndex = search(action.email, state.member);
    state.member.splice(ObjectIndex,1);
    return {
      ...state,
      isFetching: false,
      member: state.member
    }

    default:
      return state
  }
}
