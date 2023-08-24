import axios from "axios"
import { setLoading } from "../actionCreators/actionCreator"
const baseUrl ="http://localhost:3001"

export const login = (payload, cb) => {
    return(dispatch, getState) => {
        console.log(payload)
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: `${baseUrl}/login`,
            data: payload
        })
        .then((response) => {
            localStorage.setItem('accessToken', response.data.access_token);
            cb()
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export const getRecruitmentList = (payload) => {
    return(dispatch, getState) => {
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: payload
        })
        .then((response) => {
            localStorage.setItem('accessToken', response.data.access_token);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}

export const getRecruitmentDetail = (payload) => {
    return(dispatch, getState) => {
        console.log(payload)
        dispatch(setLoading(true))
        axios({
            method: 'POST',
            url: 'http://localhost:3001/login',
            data: payload
        })
        .then((response) => {
            localStorage.setItem('accessToken', response.data.access_token);
        })
        .finally(() => {
            dispatch(setLoading(false))
        })
    }
}