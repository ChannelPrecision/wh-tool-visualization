import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeAveragePerEmployee } from '../../actions/responses';

import CanvasJSReact from '../../canvasjs.react';
// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TaskAveragePerEmployee = ({ dates, employeeAveragePerEmployee, resp: { taskAvgPerEmp, loading } }) => {
    const [task, setTask] = useState('processPrimeAvg');

    useEffect(() => {
        employeeAveragePerEmployee(dates);
    }, [dates, task]);

    const dataValue = taskAvgPerEmp.length > 0 ? taskAvgPerEmp.map((res) => ({
        'label': res.employee_name,
        'y': res[task]
    })) : [];

    // console.log(dataValue);

    const options = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            title: "Employee",
            reversed: true,
            interval: 1
        },
        axisY: {
            title: "Average",
            includeZero: true
        },
        data: [{
            type: "bar",
            dataPoints: dataValue
        }]
    }

    const onChange = e => {
        setTask(e.target.value)
    };

    return (
        <Fragment>
            <div className="ui segment">
                <p><strong>Task Average / Employee</strong></p>
                <div style={{ paddingBottom: "15px" }}>
                    <label>Task Name </label>
                    <select className="ui dropdown selection" style={{ width: '250px' }} onChange={e => onChange(e)}>
                        <option value="processPrimeAvg">Process Prime</option>
                        <option value="processRapidAvg">Process Rapid</option>
                        <option value="addInventoryAvg">Add Inventory</option>
                        <option value="caseProcessedAvg">Cases Processed</option>
                        <option value="casesLabeledAvg">Cases Labeled</option>
                        <option value="itemsLabeledAvg">Items Labeled</option>
                        <option value="processRemovalAvg">Process Removal</option>
                        <option value="processReturnsAvg">Process Returns</option>
                        <option value="auditLocationsAvg">Audit Locations</option>
                        <option value="primePickingAvg">Prime Picking</option>
                        <option value="polyBagAvg">Poly Bag & Packing</option>
                    </select>
                </div>
                <CanvasJSChart options={options}
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
            <br></br>
        </Fragment>
    )
};

TaskAveragePerEmployee.propTypes = {
    employeeAveragePerEmployee: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { employeeAveragePerEmployee })(TaskAveragePerEmployee);