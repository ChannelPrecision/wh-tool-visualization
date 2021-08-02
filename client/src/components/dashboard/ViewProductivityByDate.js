import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../layout/Modal';

import { getProductivity3 } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import withFixedColumns from 'react-table-hoc-fixed-columns';
import 'react-table-hoc-fixed-columns/lib/styles.css';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const ViewProductivityByDate = ({ history, match: { params: { ddDate, emp } }, getProductivity3, resp: { prodOneDate, loading } }) => {
    useEffect(() => {
        getProductivity3(ddDate, emp);
    }, [loading, ddDate, emp]);

    const columns = [
        {
            "Header": "",
            "fixed": "left",
            "columns": [
                {
                    "Header": "Staff",
                    "accessor": "employee_name",
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
                    "accessor": "addInvAvg",
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
                    "accessor": "bulkCasesProcAvg",
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
                    "accessor": "procRemovalAvg",
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
                    "accessor": "auditLocationAvg",
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
                    "accessor": "procReturnsAvg",
                    // "aggregate": value => _.round(_.mean(value), 2),
                    "Cell": props => <span>{props.value !== undefined && props.value !== null ? props.value.toFixed(2) : '-'}</span>
                }
            ]
        }
    ];

    const renderTitle = `Date: ${ddDate}`;

    const renderContent = () => (
        <ReactTableFixedColumns
            data={prodOneDate}
            columns={columns}
            defaultPageSize={10}
            pageSizeOptions={[10, 25, 50, 100, 150]}
            className="-striped -highlight"
        />
    )

    return (
        <Modal
            title={renderTitle}
            content={renderContent()}
            // actions={renderActions()}
            onDismiss={() => history.push('/dashboard')}
        />
    )
};

ViewProductivityByDate.propTypes = {
    getProductivity3: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
});

export default connect(mapStateToProps, { getProductivity3 })(withRouter(ViewProductivityByDate));
