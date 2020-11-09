import { GET_STAFF, DATA_ERROR, EMPLOYEE_RECORDS } from '../actions/types';

const initialState = {
    staff: [],
    datas: [],
    loading: true,
    error: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_STAFF:
            return {
                ...state,
                staff: payload,
                loading: false
            }
        case EMPLOYEE_RECORDS:
            return {
                ...state,
                datas: payload,
                loading: false
            }
        case DATA_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
};