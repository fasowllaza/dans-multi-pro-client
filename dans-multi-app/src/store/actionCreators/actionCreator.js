import { SET_DETAIL, SET_ERROR, SET_FILTER, SET_LOADING, SET_RECRUITMENT_LIST, SET_TOKEN } from "../actionType/actionType"

export const setLoading = (input) => {
    return (dispatch) =>{
        dispatch({
            type:SET_LOADING,
            payload: input
        })
    }
}
 
export const setRecruitmentDetail = (input) => {
    return (dispatch) =>{
        dispatch({
            type:SET_DETAIL,
            payload: input
        })
    }
}

export const setRecruitmentList = (input) => {
    return (dispatch) =>{
        dispatch({
            type:SET_RECRUITMENT_LIST,
            payload: input
        })
    }
}

export const setError = (input) => {
    return (dispatch) => {
        dispatch({
            type:SET_ERROR,
            payload: input
        })
    }
}

export const setToken = (input) => {
    return (dispatch) => {
        dispatch({
            type:SET_TOKEN,
            payload: input
        })
    }
}

export const setFilter = (input) => {
    return (dispatch) => {
        dispatch({
            type:SET_FILTER,
            payload: input
        })
    }
}