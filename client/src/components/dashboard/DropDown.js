import React, { Fragment } from 'react';
import 'semantic-ui-css/semantic.min.css';

const DropDown = ({ options }) => {
    return (
        <Fragment>
            <div>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }}>
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                </select>
            </div>
        </Fragment>
    )
};

export default DropDown;
