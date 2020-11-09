import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStaff } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import headers from '../../utils/headers.json';

const EmployeeRecords = ({ dates, getStaff, resp: { staff, loading } }) => {
    useEffect(() => {
        getStaff(dates)
    }, getStaff);

    // console.log(dates[0] + ' ~ ' + dates[1]);
    const options = staff.map((el, index) => <option key={index} value={el.employee_name}>{el.employee_name}</option>);

    const data = [];

    return (
        <Fragment>
            <div className="ui segment">
                <p>Productivity</p>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }}>
                    <option value="all">All</option>
                    {options}
                </select>
                <ReactTable
                    data={data}
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
    getStaff: PropTypes.func.isRequired,
    staff: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { getStaff })(EmployeeRecords);