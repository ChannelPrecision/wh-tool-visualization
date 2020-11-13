import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskAverage } from '../../actions/responses';

import CanvasJSReact from '../../canvasjs.react';
// const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TaskAverage = ({ dates, taskAverage, resp: { taskAvg, loading } }) => {
    useEffect(() => {
        taskAverage(dates);
    }, [dates, taskAverage]);

    const dataValue = taskAvg.length > 0 ? Object.entries(taskAvg[0]).map((res) => ({
        'label': res[0],
        'y': res[1]
    })) : [];

    const options = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            title: "Task",
            reversed: true,
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

    return (
        <Fragment>
            <p style={{ marginBottom: "50px" }}><strong>Task Average</strong></p>
            <CanvasJSChart options={options}
            /* onRef = {ref => this.chart = ref} */
            />
        </Fragment>
    )
};

TaskAverage.propTypes = {
    taskAverage: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { taskAverage })(TaskAverage);
