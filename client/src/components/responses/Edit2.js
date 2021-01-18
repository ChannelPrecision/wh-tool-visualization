import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRecord } from '../../actions/responses';
import { setAlert } from '../../actions/alert';

import Modal from '../layout/Modal';
import TimeField from 'react-simple-timefield';

const Edit2 = ({ location: { params: { original } }, history, updateRecord }) => {
    const [formData, setFormData] = useState({
        process_prime_qty: original.process_prime_qty,
        process_prime_time: original.process_prime_time,
        process_rapid_qty: original.process_rapid_qty,
        process_rapid_time: original.process_rapid_time,
        add_inventory_qty: original.add_inventory_qty,
        add_inventory_time: original.add_inventory_time,
        bulk_cases_processed_qty: original.bulk_cases_processed_qty,
        bulk_cases_processed_time: original.bulk_cases_processed_time,
        bulk_cases_labeled_qty: original.bulk_cases_labeled_qty,
        bulk_cases_labeled_time: original.bulk_cases_labeled_time,
        items_labeled_qty: original.items_labeled_qty,
        items_labeled_time: original.items_labeled_time,
        processed_removal_qty: original.processed_removal_qty,
        processed_removal_time: original.processed_removal_time,
        process_returns_qty: original.process_returns_qty,
        process_returns_time: original.process_returns_time,
        audit_locations_qty: original.audit_locations_qty,
        audit_locations_time: original.audit_locations_time,
        process_onsite_qty: original.process_onsite_qty,
        process_onsite_time: original.process_onsite_time
    });

    const renderTitle = 'Edit Response';

    const renderActions = () => (
        <Fragment>
            <button onClick={() => cancel()} className="ui button" type="button">Close</button>
            <button onClick={e => onSubmit(e)} className="ui button primary" type="button">Submit</button>
        </Fragment>

    );

    const cancel = () => {
        history.push('/responses')
    };

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    // console.log(history);

    // console.log(original.id);

    const onSubmit = e => {
        e.preventDefault();
        updateRecord(original.id, formData);
        setAlert('Task Updated', 'success');
        setTimeout(() => {
            history.push('/dashboard')
        }, 1500)

    }

    const renderContent = () => (
        <Fragment>
            <div className="ui grid">
                <div className="four wide column">Staff: <span><strong>{original.employee_name}</strong></span></div>
                <div className="four wide column">Task Date: <span><strong>{original.taskDate}</strong></span></div>
            </div>
            <form onSubmit={e => onSubmit(e)}>
                <div className="ui three column grid" id="editFields">
                    <div className="four wide column">Process Prime</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.process_prime_qty} name="process_prime_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_prime_time" value={formData.process_prime_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Process Rapid</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.process_rapid_qty} name="process_rapid_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_rapid_time" value={formData.process_rapid_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Add Inventory</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.add_inventory_qty} name="add_inventory_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="add_inventory_time" value={formData.add_inventory_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Bulk Cases Processed</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.bulk_cases_processed_qty} name="bulk_cases_processed_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="bulk_cases_processed_time" value={formData.bulk_cases_processed_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Bulk Cases Labeled</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.bulk_cases_labeled_qty} name="bulk_cases_labeled_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="bulk_cases_labeled_time" value={formData.bulk_cases_labeled_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Items Labeled</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.items_labeled_qty} name="items_labeled_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="items_labeled_time" value={formData.items_labeled_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Processed Removal</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.processed_removal_qty} name="processed_removal_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="processed_removal_time" value={formData.processed_removal_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Process Returns</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.process_returns_qty} name="process_returns_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_returns_time" value={formData.process_returns_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Audit Locations</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.audit_locations_qty} name="audit_locations_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="audit_locations_time" value={formData.audit_locations_time} onChange={e => onChange(e)} /></div>
                    <div className="four wide column">Process OnSite</div>
                    <div className="four wide column">Quantity: <input style={{ width: '100px' }} type="text" value={formData.process_onsite_qty} name="process_onsite_qty" onChange={e => onChange(e)} /></div>
                    <div className="eight wide column">Time: <TimeField style={{ width: '100px' }} name="process_onsite_time" value={formData.process_onsite_time} onChange={e => onChange(e)} /></div>
                </div>

            </form>
        </Fragment>
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

Edit2.propTypes = {
    updateRecord: PropTypes.object.isRequired
}

export default connect(null, { updateRecord })(withRouter(Edit2));
