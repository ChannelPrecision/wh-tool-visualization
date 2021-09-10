import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from './PrivateRoute';
import Form from '../form/Form';
// import Form2 from '../form/Form2';
import Responses from '../responses/Responses';
import DeleteResponse from '../responses/DeleteResponse';
import EditResponse from '../responses/Edit2';
import ViewProductivityByDate from '../dashboard/ViewProductivityByDate';

const Routes = () => {
    return (
        <section className="container">
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/form" component={Form} />
                {/* <Route exact path="/form2" component={Form2} /> */}
                <PrivateRoute exact path="/responses" component={Responses} />
                <PrivateRoute exact path="/response/delete/:id" component={DeleteResponse} />
                <PrivateRoute exact path="/response/edit/:id" component={EditResponse} />
                <PrivateRoute exact path="/view/date/:ddDate/:emp/:location" component={ViewProductivityByDate} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes;
