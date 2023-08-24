import { SET_FILTER, SET_LOADING, SET_RECRUITMENT_LIST, SET_RECRUITMENT_DETAIL, SET_ERROR, SET_TOKEN, SET_DETAIL } from "../actionType/actionType"


const initialState = {
    isLoading: false,
    recruitmentDetail: {},
    recruitments: [],
    token: '',
    filter: {},
    error: ''
}

const reducers = (state= initialState, action) => {
    if (action.type === SET_LOADING) {
        return {...state, isLoading: action.payload}
    } else if (action.type === SET_ERROR) {
        return {...state, error: action.payload}
    } else if (action.type === SET_RECRUITMENT_LIST) {
        return {...state, recruitments: action.payload}
    } else if (action.type === SET_DETAIL){
        return {...state, recruitmentDetail: action.payload}
    } else if(action.type === SET_TOKEN) {
        return {...state, token: action.payload}
    } else if(action.type === SET_FILTER) {
        return {...state, filter: action.payload}
    } return state
}

export default reducers