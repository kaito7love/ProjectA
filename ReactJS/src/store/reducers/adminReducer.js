import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    role: [],
    position: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_GENDER_START:
            console.log("fetch gender start", action);

            return {
                ...state,
            }

        case actionTypes.FETCH_GENDER_SUCCESS:
            console.log("fetch gender success", action);
            // let copyState = { ...state };
            // copyState.genders = action.data
            state.genders = action.data
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log("fetch gender failed", action);
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;