import React, { Fragment, useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
// import { format } from 'date-fns';

import ProductivityTable from './ProductivityTable';
import TaskRecord from './TaskRecord';
import EmployeeRecords from './EmployeeRecords';
import EmployeeAverage from './EmployeeAverage';
import TaskAveragePerEmployee from './TaskAvgPerEmployee';

import 'semantic-ui-css/semantic.min.css';

const Dashboard = () => {
    const d = new Date();
    const [date, setDate] = useState([d.setDate(d.getDate() - 15), new Date()]);

    return (
        <Fragment>
            <div className="ui segment">
                <div className="text-center">
                    <DateRangePicker
                        onChange={setDate}
                        value={date}
                        maxDate={new Date()}
                    />
                </div>
            </div>
            <ProductivityTable dates={date} />
            <TaskRecord dates={date} />
            <EmployeeRecords dates={date} />
            <EmployeeAverage dates={date} />
            <TaskAveragePerEmployee dates={date} />
        </Fragment>
    )
}

export default Dashboard;
