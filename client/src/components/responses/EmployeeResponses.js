import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { employee } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
// import headers from '../../utils/response.json';

const EmployeeResponses = ({ name, employee, resp: { emp, loading } }) => {
    useEffect(() => {
        employee(name);
    }, [name]);

    // const handleInputChange = (cellInfo, event) => {
    //     let data = [...this.state.data];
    //     data[cellInfo.index][cellInfo.column.id] = event.target.value;

    //     this.setState({ data });
    //   };

    const headers = [
        {
            "Header": "Actions",
            "columns": [
                {
                    "Header": "Edit",
                    "accessor": "id",
                    "width": 50,
                    "Cell": props => <Link to={{ pathname: `response/edit/${props.value}`, params: props }}><i className='ui edit icon blue'></i></Link>
                },
                {
                    "Header": "Del",
                    "accessor": "id",
                    "width": 50,
                    "Cell": props => <Link to={`/response/delete/${props.value}`}><i className='ui close icon red'></i></Link>
                    // "Cell": props => <a href='/delete-response/'><i className='ui close icon red'></i></a>
                }
            ]
        },
        {
            "Header": "Date",
            "columns": [
                {
                    "Header": "Submitted",
                    "accessor": "submittedDate",
                    "width": 100
                },
                {
                    "Header": "Task",
                    "accessor": "taskDate",
                    "width": 100
                }
            ]
        },
        {
            "Header": "Process Prime",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_prime_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "process_prime_time"
                }
            ]
        },
        {
            "Header": "Process Rapid",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_rapid_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "process_rapid_time"
                }
            ]
        },
        {
            "Header": "Add Inventory",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "add_inventory_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "add_inventory_time"
                }
            ]
        },
        {
            "Header": "Case Processed",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "bulk_cases_processed_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_processed_time"
                }
            ]
        },
        {
            "Header": "Case Labeled",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "bulk_cases_labeled_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "bulk_cases_labeled_time"
                }
            ]
        },
        {
            "Header": "Items Labeled",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "items_labeled_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "items_labeled_time"
                }
            ]
        },
        {
            "Header": "Process Removal",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "processed_removal_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "processed_removal_time"
                }
            ]
        },
        {
            "Header": "Audit Locations",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "audit_locations_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "audit_locations_time"
                }
            ]
        },
        {
            "Header": "Process Returns",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "process_returns_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "process_returns_time"
                }
            ]
        },
        {
            "Header": "Prime Picking",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "prime_picking_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "prime_picking_time"
                }
            ]
        },
        {
            "Header": "Poly Bag & Packing",
            "columns": [
                {
                    "Header": "Qty",
                    "accessor": "poly_bag_qty",
                    "width": 55
                },
                {
                    "Header": "Time",
                    "accessor": "poly_bag_time"
                }
            ]
        }
    ]

    return (
        <Fragment>
            {
                name === null ? <div>Please select a user</div>
                    :
                    <ReactTable
                        data={emp}
                        columns={headers}
                        defaultPageSize={15}
                        pageSizeOptions={[15, 50, 100, 150, 200]}
                        className="-striped -highlight"
                    />
            }
        </Fragment>
    )
};

EmployeeResponses.propTypes = {
    employee: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { employee })(EmployeeResponses);