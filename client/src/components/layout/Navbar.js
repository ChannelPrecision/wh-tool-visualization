import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li><Link to="/dashboard"><i className="chart pie icon"></i>{' '}
                <span className="hide-sm">Dashboard</span></Link></li>
            <li><Link to="/responses"><i className="database icon"></i>{' '}
                <span className="hide-sm">Responses</span></Link></li>
            <li><Link to="#" onClick={logout}><i className="fas fa-sign-out-alt"></i>{' '}
                <span className="hide-sm">Logout</span>
            </Link></li>
        </ul>
    );
    const guestLinks = (
        <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
    return (
        <nav className="navbar bg-dark">
            <h1>
                <Link to="/">Efficiency Report</Link>
            </h1>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);