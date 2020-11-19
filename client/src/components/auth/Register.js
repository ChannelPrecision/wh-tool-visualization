import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
        password: '',
        password2: '',
        warehouse_location: ''
    });

    const { firstname, lastname, email, password, password2, gender, warehouse_location } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ firstname, lastname, email, password, gender, warehouse_location })
        }
    }

    //Redirect if registered
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <div className="ui segment" style={
                {
                    height: '75vh', textAlign: 'center', width: '600px', float: 'middle', justifyContent: 'center',
                    display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px'
                }
            }>
                <h1 className="large text-primary">Sign Up</h1>
                <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
                <form className="form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" name="firstname" value={firstname} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
                    </div>
                    <div className="ui form">
                        <div className="inline fields">
                            <label>Gender</label>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" value="Male" onChange={e => onChange(e)} />
                                    <label>Male</label>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input type="radio" name="gender" value="Female" onChange={e => onChange(e)} />
                                    <label>Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password} onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="password2"
                            value={password2} onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Warehouse Location</label>
                        <select className="ui dropdown" name="warehouse_location" onChange={e => onChange(e)}>
                            <option value="">Select</option>
                            <option value="NC">NC</option>
                            <option value="UT">UT</option>
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                <p className="my-1">
                    Already have an account? <Link to="/login">Sign In</Link>
                </p>
            </div>
        </Fragment>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
