import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeAverage } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

const EmployeeAverage = ({ dates, employeeAverage, resp: { avgs, loading } }) => {
    const [warehouse, setWarehouse] = useState('all');

    useEffect(() => {
        employeeAverage(dates, warehouse);
    }, [dates, warehouse]);

    const onChange = e => {
        setWarehouse(e.target.value)
    };

    const columns = [
        {
            Header: "Staff",
            accessor: "employee_name"
        },
        {
            Header: "Process Prime",
            accessor: "processPrimeAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Process Rapid",
            accessor: "processRapidAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Add Inventory",
            accessor: "addInventoryAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Cases Processed",
            accessor: "caseProcessedAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Cases Labeled",
            accessor: "casesLabeledAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Item Labeled",
            accessor: "itemsLabeledAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Process Removal",
            accessor: "processRemovalAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Audit Locations",
            accessor: "auditLocationsAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Process Returns",
            accessor: "processReturnsAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        },
        {
            Header: "Process OnSite",
            accessor: "processOnsiteAvg",
            Cell: props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
        }
    ];

    return (
        <Fragment>
            <div className="ui segment">
                <p><strong>Employee Average</strong></p>
                <label>Facility </label>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }} onChange={e => onChange(e)}>
                    <option value="all">All</option>
                    <option value="NC">NC</option>
                    <option value="UT">UT</option>
                </select>
                <ReactTable
                    data={avgs}
                    columns={columns}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 25, 50, 100, 150]}
                    className="-striped -highlight"
                />
            </div>
        </Fragment>
    )
};

EmployeeAverage.propTypes = {
    employeeAverage: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    resp: state.responses
})

export default connect(mapStateToProps, { employeeAverage })(EmployeeAverage);