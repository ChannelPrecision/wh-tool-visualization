import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStaff, getProductivity2 } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table-hoc-fixed-columns/lib/styles.css';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const EmployeeRecords = ({ dates, getStaff, getProductivity2, resp: { staff, prodByDate, loading } }) => {
    // const [emp, setEmp] = useState('all');
    const [dropdown, setDropdown] = useState({
        emp: 'all',
        location: 'all'
    });

    const { emp, location } = dropdown;

    useEffect(() => {
        getStaff(dates, location);
        getProductivity2(dates, emp, location);
    }, [dates, emp, loading, location]);

    // const onChange = e => {
    //     setEmp(e.target.value)
    // };

    const onChange = e => setDropdown({ ...dropdown, [e.target.name]: e.target.value });

    // console.log(dates[0] + ' ~ ' + dates[1]);
    const options = staff.map((el, index) => <option key={index} value={el.employee_name}>{el.employee_name}</option>);

    console.log(dropdown);

    const columns = [
        {
            "Header": "",
            "fixed": "left",
            "columns": [
                {
                    "Header": "",
                    "accessor": "taskDate",
                    "width": 50,
                    "Cell": props => <Link to={{ pathname: `view/date/${props.value}/${emp}`, params: props }}><i className='ui external alternate icon black'></i></Link>
                },
                {
                    "Header": "Date",
                    "accessor": "taskDate",
                    "width": 140
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_prime_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processPrimeAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    // "Aggregated": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>,
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_rapid_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processRapidAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "add_inventory_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "addInventoryAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_processed_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "bulkCasesAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_labeled_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "bulkCasesLabeledAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "items_labeled_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "itemsLabeledAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "processed_removal_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processRemovalAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "audit_locations_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "auditLocationsAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
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
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "process_returns_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "processReturnsAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
                }
            ]
        },
        {
            "Header": "Prime Picking",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "prime_picking_qty",
                    "width": 60,
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "prime_picking_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "primePickingAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
                }
            ]
        },
        {
            "Header": "Poly Bag & Packing",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "poly_bag_qty",
                    "width": 60,
                    // "aggregate": value => _.sum(value)
                },
                {
                    "Header": "Time",
                    "accessor": "poly_bag_time",
                    "width": 60,
                    // "aggregate": value => _.round(_.sum(value), 2)
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : ''}</span>
                },
                {
                    "Header": "AVG",
                    "width": 60,
                    "accessor": "polyBagAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
                }
            ]
        }
    ];

    return (
        <Fragment>
            <div className="ui segment">
                <p><strong>Productivity</strong></p>
                <label>Facility: </label>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }} name="location" value={location} onChange={e => onChange(e)}>
                    <option value="all">All</option>
                    <option value="NC">NC</option>
                    <option value="UT">UT</option>
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>Staff: </label>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }} name="emp" value={emp} onChange={e => onChange(e)}>
                    <option value="all">All</option>
                    {options}
                </select>
                <ReactTableFixedColumns
                    // pivotBy={["taskDate", "employee_name"]}
                    data={prodByDate}
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
    getProductivity2: PropTypes.func.isRequired,
    staff: PropTypes.object.isRequired,
    prodByDate: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { getStaff, getProductivity2 })(EmployeeRecords);