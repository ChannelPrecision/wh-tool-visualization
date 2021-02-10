import axios from 'axios';
import { format } from 'date-fns';
import { setAlert } from './alert'

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
    UPDATE_TASK,
    ADD_TASK,
    EMP_AVG_PER_EMPLOYEE
} from './types';

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

export const employeeAveragePerEmployee = (date) => async dispatch => {
    try {
        const startDate = format(date[0], "yyyy-MM-dd");
        const endDate = format(date[1], "yyyy-MM-dd");
        const res = await axios.post(`/api/responses/avg_per_employee/${startDate}/${endDate}`);

        dispatch({
            type: EMP_AVG_PER_EMPLOYEE,
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

export const response = (formData) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile/resp', formData, config);

        dispatch({
            type: RESPONSE,
            payload: res.data
        });

    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
};

export const taskRecord = id => async dispatch => {
    try {
        const res = await axios.get(`/api/responses/task_record/${id}`);

        dispatch({
            type: TASK_RECORD,
            payload: res.data
        });

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const deleteTask = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/responses/delete_task/${id}`);

        dispatch({
            type: UPDATE_TASK,
            payload: res.data
        });

        dispatch(setAlert('Task Removed', 'success'));

    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const updateRecord = (id, formData) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        dispatch(setAlert('Response Updated', 'success'));

        const res = await axios.post(`/api/responses/update/${id}`, formData, config);

        dispatch({
            type: UPDATE_TASK,
            payload: res.data
        });


    } catch (err) {
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}

export const addTask = (formData, history) => async dispatch => {
    try {

        const res = await axios.put('/api/responses', formData);

        dispatch({
            type: ADD_TASK,
            payload: res.data
        });

        dispatch(setAlert('Response Submitted', 'success'));

        // history.push('/dashboard')
        setTimeout(() => {
            history.push('/dashboard')
        }, 2000)


    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error, 'danger')));
        }
        dispatch({
            type: DATA_ERROR,
            payload: { msg: err.msg }
        })
    }
}