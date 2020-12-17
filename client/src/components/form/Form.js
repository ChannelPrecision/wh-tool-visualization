import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <div className="ui segment">
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Task Date</p>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Process Prime</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Process Rapid</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Add Inventory</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Bulk Cases Processed</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Bulk Cases Labeled</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Items Labeled</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Processed Removal</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Process Returns</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Audit Locations</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-wrapper">
                    <div className="top-box">
                        <p>Process Onsite</p>
                        <div className="ui grid">
                            <div className="eight wide column">
                                <p>Quantity</p>
                                <div className="qtyInput">
                                    <input type="text" placeholder="0" />
                                </div>
                            </div>
                            <div className="eight wide column">
                                <p>Duration</p>
                                <div className="qtyInput">
                                    <input type="text" value="00:00" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Form;
