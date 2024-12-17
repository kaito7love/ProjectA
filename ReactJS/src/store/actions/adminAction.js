import actionTypes from "./actionTypes";
import * as userService from "../../services/userService";

import { toast } from 'react-toastify';


export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await userService.getAllCodeService('gender');
            if (res && res.errCode === 0) {

                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
        }
    }
}
export const fetchGenderSuccess = (dataGender) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: dataGender,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await userService.getAllCodeService('position');
            if (res && res.errCode === 0) {

                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (error) {
            dispatch(fetchPositionFailed())
        }
    }
}
export const fetchPositionSuccess = (dataPosition) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: dataPosition,
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await userService.getAllCodeService('role');
            if (res && res.errCode === 0) {

                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (error) {
            dispatch(fetchRoleFailed())
        }
    }
}
export const fetchRoleSuccess = (dataRole) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: dataRole,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.getAllUsers('All');
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                dispatch(fetchAllUserFailed())
            }
        } catch (error) {
            dispatch(fetchAllUserFailed())
        }
    }
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED,
})

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.createUserService(data);
            console.log(res);
            if (res && res.errCode === 0) {
                toast.success("Create User Successful !!!")
                dispatch(saveUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                dispatch(saveUserFailed())
            }
        } catch (error) {
            dispatch(saveUserFailed())
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.SAVE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.SAVE_USER_FAILED,
})


export const deleteUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.deleteUserService(data.id);
            if (res && res.errCode === 0) {
                toast.success("Delete User Successful !!!")
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUserStart())
            } else {
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            dispatch(deleteUserFailed())
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})

export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await userService.getTopDoctorService('')
            // console.log(res);

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    data: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
        } catch (error) {
            console.log("FETCH_TOP_DOCTORS_FAILED", error);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            })
        }
    }
}