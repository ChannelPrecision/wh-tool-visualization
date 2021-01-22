import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeNames } from '../../actions/responses';
import EmployeeResponses from './EmployeeResponses';

import { Grid, Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Responses = ({ employeeNames, resp: { employees, loading } }) => {
    const [item, setItem] = useState(null);


    useEffect(() => {
        employeeNames();
    }, [loading, employeeNames]);

    // const empOut = employees.length > 0 ?
    //     <Fragment>
    //         <Menu.Item
    //             name={employees.employee_name}
    //             active={item === employees.employee_name}
    //             onClick={() => setItem(employees.employee_name)}
    //         />
    //     </Fragment>

    //     : [];

    const empOut = employees.length === 0 ? [] : employees.map((el, index) => {
        // let empName = `${el.warehouse_location} - ${el.employee_name}`;
        return (
            <Fragment key={index}>
                <Menu.Item
                    name={el.employee_name}
                    active={item === el.employee_name}
                    onClick={() => setItem(el.employee_name)}
                />
            </Fragment>
        )
    });

    return (
        <Grid>
            <Grid.Column width={3}>
                <Menu fluid vertical tabular>
                    {empOut}
                    {/* <Menu.Item
                        name='bio'
                        active={item === 'bio'}
                        onClick={() => setItem('bio')}
                    />
                    <Menu.Item
                        name='pics'
                        active={item === 'pics'}
                        onClick={() => setItem('pics')}
                    />
                    <Menu.Item
                        name='companies'
                        active={item === 'companies'}
                        onClick={() => setItem('companies')}
                    />
                    <Menu.Item
                        name='links'
                        active={item === 'links'}
                        onClick={() => setItem('links')}
                    /> */}
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={13}>
                <Segment>
                    <EmployeeResponses name={item} />
                </Segment>
            </Grid.Column>
        </Grid>
    )
}

Responses.propTypes = {
    employeeNames: PropTypes.func.isRequired,
    resp: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    resp: state.responses
})

export default connect(mapStateToProps, { employeeNames })(Responses);
