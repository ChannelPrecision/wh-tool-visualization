import React, { Fragment } from 'react';

import TaskRecords from './TaskRecords';
import TaskAverage from './TaskAverage';

const TaskRecord = ({ dates }) => {
    return (
        <Fragment>
            <div className="ui two column grid">
                <div className="column">
                    <div className="ui segment">
                        <TaskRecords dates={dates} />
                    </div>
                </div>
                <div className="column">
                    <div className="ui segment">
                        <TaskAverage dates={dates} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskRecord;
