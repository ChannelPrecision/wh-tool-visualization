import React, { useState, useEffect } from 'react';
// import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskRecords } from '../../actions/responses';

import CanvasJSReact from '../../canvasjs.react';
// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TaskRecords = ({ dates, taskRecords, resp: { tasks, loading } }) => {
    const [task, setTask] = useState('processPrime');

    useEffect(() => {
        taskRecords(dates);
    }, [dates, taskRecords]);

    const dataValue = tasks.map((res) => ({
        'label': res.employee_name,
        'y': res[task]
    }));

    const options = {
        data: [{
            type: "pie",
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}</strong>",
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            startAngle: -90,
            dataPoints: dataValue
        }]
    }

    const onChange = e => {
        setTask(e.target.value)
    };

    return (
        <div>
            <p><strong>Task Records</strong></p>
            <div className="text-center">
                <select className="ui dropdown selection" style={{ width: '250px' }} onChange={e => onChange(e)}>
                    <option value="processPrime">Process Prime</option>
                    <option value="processRapid">Process Rapid</option>
                    <option value="addInventory">Add Inventory</option>
                    <option value="caseProcessed">Cases Processed</option>
                    <option value="caseLabeled">Cases Labeled</option>
                    <option value="itemsLabeled">Items Labeled</option>
                    <option value="processRemoval">Process Removal</option>
                    <option value="processReturns">Process Returns</option>
                    <option value="auditLocations">Audit Locations</option>
                    <option value="primePicking">Prime Picking</option>
                    <option value="polyBag">Poly Bag & Packing</option>
                </select>
            </div>
            {/* <PieChart
                data={data}
                radius={18}
                center={[50, 25]}
                viewBoxSize={[100, 44.5]}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage, 2)}%`}
                labelStyle={{
                    ...defaultLabelStyle,
                }}
            /> */}
            <CanvasJSChart options={options}
            />
        </div>
    )
};

TaskRecords.propTypes = {
    taskRecords: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
})

export default connect(mapStateToProps, { taskRecords })(TaskRecords);
