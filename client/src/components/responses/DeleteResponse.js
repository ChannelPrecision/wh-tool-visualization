import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../layout/Modal';

import { taskRecord, deleteTask } from '../../actions/responses';

const DeleteResponse = ({ taskRecord, deleteTask, match: { params: { id } }, history, data: { task, loading } }) => {
    useEffect(() => {
        taskRecord(id)
    }, [id, taskRecord]);

    const renderTitle = `Are you sure you want to delete this task?`;

    const renderActions = () => (
        <Fragment>
            <button onClick={() => deleteId()} className="ui button negative" type="button">Yes</button>
            <button onClick={() => history.push('/responses')} className="ui button secondary" type="button">No</button>
        </Fragment>
    );

    const deleteId = () => {
        deleteTask(id);
        history.push('/responses')
    };

    const renderContent = () => (
        task.length > 0 ?
            <Fragment>
                <div className="ui grid">
                    <div className="eight wide column">Staff: <span><strong>{task[0].employee_name}</strong></span></div>
                    <div className="eight wide column">Task Date: <span><strong>{task[0].taskDate}</strong></span></div>
                </div>
                <table className="ui unstackable table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Quantity</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Process Prime</td>
                            <td>{task[0].process_prime_qty}</td>
                            <td>{task[0].process_prime_time}</td>
                        </tr>
                        <tr>
                            <td>Process Rapid</td>
                            <td>{task[0].process_rapid_qty}</td>
                            <td>{task[0].process_rapid_time}</td>
                        </tr>
                        <tr>
                            <td>Add Inventory</td>
                            <td>{task[0].add_inventory_qty}</td>
                            <td>{task[0].add_inventory_time}</td>
                        </tr>
                        <tr>
                            <td>Bulk Cases Processed</td>
                            <td>{task[0].bulk_cases_processed_qty}</td>
                            <td>{task[0].bulk_cases_processed_time}</td>
                        </tr>
                        <tr>
                            <td>Bulk Cases Labeled</td>
                            <td>{task[0].bulk_cases_labeled_qty}</td>
                            <td>{task[0].bulk_cases_labeled_time}</td>
                        </tr>
                        <tr>
                            <td>Items Labeled</td>
                            <td>{task[0].items_labeled_qty}</td>
                            <td>{task[0].items_labeled_time}</td>
                        </tr>
                        <tr>
                            <td>Processed Removal</td>
                            <td>{task[0].processed_removal_qty}</td>
                            <td>{task[0].processed_removal_time}</td>
                        </tr>
                        <tr>
                            <td>Process Returns</td>
                            <td>{task[0].process_returns_qty}</td>
                            <td>{task[0].process_returns_time}</td>
                        </tr>
                        <tr>
                            <td>Audit Locations</td>
                            <td>{task[0].audit_locations_qty}</td>
                            <td>{task[0].audit_locations_time}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
            : []
    );

    return (
        <Modal
            title={renderTitle}
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.push('/responses')}
        />
    )
};

DeleteResponse.propTypes = {
    taskRecord: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.responses
})

export default connect(mapStateToProps, { taskRecord, deleteTask })(withRouter(DeleteResponse));