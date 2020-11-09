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
                    <h1 className="x-large">Project A</h1>
                    <p className="lead">Customize and create your own project. Enjoy!</p>
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
