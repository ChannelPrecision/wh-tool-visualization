import React, { Fragment, useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import TimeField from 'react-simple-timefield';
import moment from 'moment';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTask } from '../../actions/responses';

import 'semantic-ui-css/semantic.min.css';


const Form2 = ({ addTask, auth: { user, loading }, history }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [formData, setFormData] = useState({
        taskDate: '',
        process_prime_qty: 0,
        process_prime_time: '00:00',
        process_rapid_qty: 0,
        process_rapid_time: '00:00',
        add_inventory_qty: 0,
        add_inventory_time: '00:00',
        case_processed_qty: 0,
        case_processed_time: '00:00',
        case_labeled_qty: 0,
        case_labeled_time: '00:00',
        items_labeled_qty: 0,
        items_labeled_time: '00:00',
        processed_removal_qty: 0,
        processed_removal_time: '00:00',
        process_returns_qty: 0,
        process_returns_time: '00:00',
        audit_locations_qty: 0,
        audit_locations_time: '00:00',
        prime_picking_qty: 0,
        prime_picking_time: '00:00',
        poly_bag_qty: 0,
        poly_bag_time: '00:00',
        employee_name: null,
        warehouse_location: null,
        submitted_date: moment().format("YYYY-MM-DD")
    })

    const handleClick = (index) => {
        // console.log(index)
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addTask(formData, history);
    }

    // console.log(formData);
    // console.log(firstname + ' ' + lastname + '-' + warehouse_location);
    // console.log(user)

    if (!loading) {
        const { firstname, lastname, warehouse_location } = user[0];
        formData.employee_name = `${lastname}, ${firstname}`;
        formData.warehouse_location = warehouse_location
    }


    return (
        <Fragment>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="task-wrapper">
                    <div className="date-wrap" style={{ width: '200px' }}>
                        <p className="date-title">Task Date</p>
                        <input type="date" name="taskDate" id="task-date" className="task-date" max={moment().format("YYYY-MM-DD")} value={formData.taskDate} onChange={e => onChange(e)} />
                    </div>
                </div>
                <div className="task-wrapper">
                    <Accordion fluid styled>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={() => handleClick(0)}
                        >
                            <Icon name='dropdown' />
                            Process Prime
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="process_prime_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="process_prime_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={() => handleClick(1)}
                        >
                            <Icon name='dropdown' />
                            Process Rapid
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="process_rapid_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="process_rapid_time" value={formData.process_rapid_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={() => handleClick(2)}
                        >
                            <Icon name='dropdown' />
                            Add Inventory
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="add_inventory_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="add_inventory_time" value={formData.add_inventory_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 3}
                            index={3}
                            onClick={() => handleClick(3)}
                        >
                            <Icon name='dropdown' />
                            Bulk Cases Processed
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="bulk_cases_processed_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="bulk_cases_processed_time" value={formData.bulk_cases_processed_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 4}
                            index={4}
                            onClick={() => handleClick(4)}
                        >
                            <Icon name='dropdown' />
                            Bulk Cases Labeled
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="bulk_cases_labeled_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="bulk_cases_labeled_time" value={formData.bulk_cases_labeled_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 5}
                            index={5}
                            onClick={() => handleClick(5)}
                        >
                            <Icon name='dropdown' />
                            Items Labeled
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="items_labeled_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="items_labeled_time" value={formData.items_labeled_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 6}
                            index={6}
                            onClick={() => handleClick(6)}
                        >
                            <Icon name='dropdown' />
                            Processed Removal
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 6}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="processed_removal_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="processed_removal_time" value={formData.processed_removal_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 7}
                            index={7}
                            onClick={() => handleClick(7)}
                        >
                            <Icon name='dropdown' />
                            Process Returns
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 7}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="process_returns_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="process_returns_time" value={formData.process_returns_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 8}
                            index={8}
                            onClick={() => handleClick(8)}
                        >
                            <Icon name='dropdown' />
                            Audit Locations
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 8}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="audit_locations_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="audit_locations_time" value={formData.audit_locations_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 9}
                            index={9}
                            onClick={() => handleClick(9)}
                        >
                            <Icon name='dropdown' />
                            Prime Picking
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 9}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="prime_picking_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="prime_picking_time" value={formData.prime_picking_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                        <Accordion.Title
                            active={activeIndex === 10}
                            index={10}
                            onClick={() => handleClick(10)}
                        >
                            <Icon name='dropdown' />
                            Poly Bag & Packing
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 10}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="poly_bag_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="poly_bag_time" value={formData.poly_bag_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                </div>
                <div className="text-center" style={{ paddingTop: '20px', marginBottom: '50px' }}>
                    <input style={{ width: '200px', height: '40px', textAlign: 'center' }} type="submit" className="ui primary button" />
                </div>
            </form>
        </Fragment>
    )
};

Form2.propTypes = {
    addTask: PropTypes.object.isRequired,
    auth: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addTask })(withRouter(Form2));
