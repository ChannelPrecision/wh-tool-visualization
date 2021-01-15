import {
    GET_STAFF,
    DATA_ERROR,
    EMPLOYEE_RECORDS,
    EMPLOYEE_AVERAGE,
    GET_PRODUCTIVITY,
    TASK_RECORDS,
    TASK_AVERAGE,
    EMPLOYEE_NAMES,
    EMPLOYEE,
    RESPONSE,
    TASK_RECORD,
    UPDATE_TASK
} from '../actions/types';

const initialState = {
    staff: [],
    datas: [],
    avgs: [],
    productivities: [],
    tasks: [],
    task: [],
    taskAvg: [],
    employees: [],
    emp: [],
    response: [],
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
        case RESPONSE:
        case UPDATE_TASK:
            return {
                ...state,
                response: payload,
                loading: false
            }
        case EMPLOYEE_RECORDS:
            return {
                ...state,
                datas: payload,
                loading: false
            }
        case EMPLOYEE_AVERAGE:
            return {
                ...state,
                avgs: payload,
                loading: false
            }
        case GET_PRODUCTIVITY:
            return {
                ...state,
                productivities: payload,
                loading: false
            }
        case TASK_RECORDS:
            return {
                ...state,
                tasks: payload,
                loading: false
            }
        case TASK_AVERAGE:
            return {
                ...state,
                taskAvg: payload,
                loading: false
            }
        case EMPLOYEE_NAMES:
            return {
                ...state,
                employees: payload,
                loading: false
            }
        case EMPLOYEE:
            return {
                ...state,
                emp: payload,
                loading: false
            }
        case TASK_RECORD:
            return {
                ...state,
                task: payload,
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