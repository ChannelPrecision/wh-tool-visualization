import React, { Fragment, useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import TimeField from 'react-simple-timefield';
import moment from 'moment';

import 'semantic-ui-css/semantic.min.css';


const Form2 = () => {
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
        process_onsite_qty: 0,
        process_onsite_time: '00:00'
    })

    const handleClick = (index) => {
        // console.log(index)
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex);
    }

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
    }

    console.log(formData);


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
                                        <TimeField style={{ width: '120px' }} name="process_rapid_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <TimeField style={{ width: '120px' }} name="add_inventory_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <input type="text" placeholder="0" name="case_processed_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="case_processed_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <input type="text" placeholder="0" name="case_labeled_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="case_labeled_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <TimeField style={{ width: '120px' }} name="items_labeled_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <TimeField style={{ width: '120px' }} name="processed_removal_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <TimeField style={{ width: '120px' }} name="process_returns_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
                                        <TimeField style={{ width: '120px' }} name="audit_locations_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
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
          Process Onsite
        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 9}>
                            <div className="ui grid" id="gridContent">
                                <div className="four wide column">
                                    <p>Quantity</p>
                                    <div className="qtyInput">
                                        <input type="text" placeholder="0" name="process_onsite_qty" onChange={e => onChange(e)} />
                                    </div>
                                </div>
                                <div className="four wide column">
                                    <p>Duration (hh:mm)</p>
                                    <div className="qtyInput">
                                        <TimeField style={{ width: '120px' }} name="process_onsite_time" value={formData.process_prime_time} onChange={e => onChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                </div>
                <div className="text-center" style={{ paddingTop: '20px', marginBottom: '50px' }}>
                    <input type="submit" className="ui primary button" />
                </div>
            </form>
        </Fragment>
    )
};

export default Form2;
