import axios from 'axios';
import { format } from 'date-fns';

import { GET_STAFF, DATA_ERROR, EMPLOYEE_RECORDS } from './types';

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