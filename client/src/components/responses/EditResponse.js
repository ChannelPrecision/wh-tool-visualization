import React, { useEffect, useState, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../layout/Modal';
import TimeField from 'react-simple-timefield';

import { taskRecord } from '../../actions/responses';

const EditResponse = ({ taskRecord, match: { params: { id } }, history, data: { task, loading } }) => {
    const [formData, setFormData] = useState({
        process_prime_qty: 0,
        process_prime_time: '00:00'
    });

    useEffect(() => {
        taskRecord(id);
        console.log('1st UE' + task.length)
    }, [2]);

    useEffect(() => {
        let mounted = true;

        async function loadData() {
            await taskRecord(id);
            if (mounted) {
                // setFormData({
                //     process_prime_qty: task[0].process_prime_qty,
                //     process_prime_time: task[0].process_prime_time
                // })
                // setFormData(task)
                console.log('2nd UE' + task.length);
            }
        };
        loadData();

        return () => {
            mounted = false;
        };
    }, [id]);

    const renderTitle = 'Edit Response';

    const renderActions = () => (<button className="ui button primary" type="button">Submit</button>);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const renderContent = () => (
        task.length > 0 ?
            <Fragment>
                <div className="ui grid">
                    <div className="four wide column">Staff: <span><strong>{task[0].employee_name}</strong></span></div>
                    <div className="four wide column">Task Date: <span><strong>{task[0].taskDate}</strong></span></div>
                </div>
                <div className="ui three column grid" id="editFields">
                    <div className="four wide column">Process Prime</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.process_prime_qty} name="process_prime_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_prime_time" value={formData.process_prime_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Process Rapid</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={task[0].process_prime_qty} name="process_rapid_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_rapid_time" value={task[0].process_rapid_time} onChange={e => onChange(e)} /></div>
                </div>
            </Fragment>
            :
            []
    )

    return (
        <Modal
            title={renderTitle}
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.push('/responses')}
        />
    )
}

EditResponse.propTypes = {
    taskRecord: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    data: state.responses
})

export default connect(mapStateToProps, { taskRecord })(withRouter(EditResponse));
