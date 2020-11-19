import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAutenticated }) => {
    if (isAutenticated) {
        return <Redirect to="/dashboard" />
    }
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Efficiency Report</h1>
                    <p className="lead">Welcome</p>
                </div>
            </div>
        </section>
    )
};

Landing.propTypes = {
    isAutenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAutenticated: state.auth.isAutenticated
});

export default connect(mapStateToProps)(Landing);
