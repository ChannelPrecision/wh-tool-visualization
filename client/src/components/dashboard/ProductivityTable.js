import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStaff, getProductivity } from '../../actions/responses';
import _ from 'lodash';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table-hoc-fixed-columns/lib/styles.css';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const EmployeeRecords = ({ dates, getStaff, getProductivity, resp: { staff, productivities, loading } }) => {
    const [emp, setEmp] = useState('all');

    useEffect(() => {
        getStaff(dates);
        getProductivity(dates, emp);
    }, [dates, emp, getStaff, getProductivity]);

    const onChange = e => {
        setEmp(e.target.value)
    };

    // console.log(dates[0] + ' ~ ' + dates[1]);
    const options = staff.map((el, index) => <option key={index} value={el.employee_name}>{el.employee_name}</option>);

    const columns = [
        {
            "Header": "Staff & Date",
            "fixed": "left",
            "columns": [
                {
                    "Header": "Date",
                    "accessor": "taskDate",
                    "width": 140
                },
                {
                    "Header": "Staff",
                    "accessor": "employee_name",
                    "width": 160
                }
            ]
        },
        {
            "Header": "Process Prime",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_prime_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_prime_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processPrimeAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Process Rapid",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_rapid_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_rapid_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processRapidAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Add Inventory",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "add_inventory_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "add_inventory_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "addInvAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Case Processed",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "bulk_cases_processed_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_processed_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "bulkCasesProcAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Case Labeled",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "bulk_cases_labeled_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_labeled_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "bulkCasesLabeledAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Items Labeled",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "items_labeled_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "items_labeled_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "itemsLabeledAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Process Removal",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "processed_removal_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "processed_removal_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "procRemovalAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Audit Locations",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "audit_locations_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "audit_locations_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "auditLocationAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Process Returns",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_returns_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_returns_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "procReturnsAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        },
        {
            "Header": "Process OnSite",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_onsite_qty",
                    "width": 60,
                    "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_onsite_time",
                    "width": 60,
                    "aggregate": value => _.round(_.sum(value), 2)
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processOnsiteAvg",
                    "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                }
            ]
        }
    ];

    return (
        <Fragment>
            <div className="ui segment">
                <p><strong>Productivity</strong></p>
                <label>Staff </label>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }} onChange={e => onChange(e)}>
                    <option value="all">All</option>
                    {options}
                </select>
                <ReactTableFixedColumns
                    pivotBy={["taskDate", "employee_name"]}
                    data={productivities}
                    columns={columns}
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
    getProductivity: PropTypes.func.isRequired,
    staff: PropTypes.object.isRequired,
    productivities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { getStaff, getProductivity })(EmployeeRecords);