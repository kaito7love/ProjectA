import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService('gender');
            if (res && res.errCode === 0) {

                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (error) {
            dispatch(fetchGenderFailed())
            console.log('fetch gender', error);
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