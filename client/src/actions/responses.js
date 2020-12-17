import axios from 'axios';
import { format } from 'date-fns';

import { GET_STAFF, DATA_ERROR, EMPLOYEE_RECORDS, EMPLOYEE_AVERAGE, GET_PRODUCTIVITY, TASK_RECORDS, TASK_AVERAGE, EMPLOYEE_NAMES, EMPLOYEE } from './types';

export const getStaff = date => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/staff/${startDate}/${endDate}`);

        dispatch({
            type: GET_STAFF,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
};

export const employeeRecords = (date, warehouse) => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/emp_records/${startDate}/${endDate}/${warehouse}`);

        dispatch({
            type: EMPLOYEE_RECORDS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const employeeAverage = (date, warehouse) => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/emp_average/${startDate}/${endDate}/${warehouse}`);

        dispatch({
            type: EMPLOYEE_AVERAGE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const getProductivity = (date, emp) => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/productivity/${startDate}/${endDate}/${emp}`);

        dispatch({
            type: GET_PRODUCTIVITY,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const taskRecords = (date) => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/task_records/${startDate}/${endDate}`);

        dispatch({
            type: TASK_RECORDS,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const taskAverage = date => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/task_average/${startDate}/${endDate}`);

        dispatch({
            type: TASK_AVERAGE,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const employeeNames = () => async dispatch => {
    try {
        const res = await axios.get('/api/responses/employees');

        dispatch({
            type: EMPLOYEE_NAMES,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const employee = name => async dispatch => {
    try {
        const res = await axios.post(`/api/responses/employee/${name}`);
        dispatch({
            type: EMPLOYEE,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}