import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeRecords } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import headers from '../../utils/empRecordsHeaders.json';

const EmployeeRecords = ({ dates, employeeRecords, resp: { datas, loading } }) => {
    const [warehouse, setWarehouse] = useState('all');

    useEffect(() => {
        employeeRecords(dates, warehouse);
    }, [dates, warehouse, employeeRecords]);

    const onChange = e => {
        // console.log(e.target.value)
        setWarehouse(e.target.value)
    };

    return (
        <Fragment>
            <div className="ui segment">
                <p><strong>Employee Records</strong></p>
                <label>Facility: </label>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }} onChange={e => onChange(e)}>
                    <option value="all">All</option>
                    <option value="NC">NC</option>
                    <option value="UT">UT</option>
                </select>
                <ReactTable
                    data={datas}
                    columns={headers}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 25, 50, 100, 150]}
                    className="-striped -highlight"
                />
            </div>
        </Fragment>
    )
};

EmployeeRecords.propTypes = {
    employeeRecords: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    resp: state.responses
})

export default connect(mapStateToProps, { employeeRecords })(EmployeeRecords);