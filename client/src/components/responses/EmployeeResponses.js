import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employee } from '../../actions/responses';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import headers from '../../utils/response.json';

const EmployeeResponses = ({ name, employee, resp: { emp, loading } }) => {
    useEffect(() => {
        employee(name);
    }, [name]);

    console.log(name)

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