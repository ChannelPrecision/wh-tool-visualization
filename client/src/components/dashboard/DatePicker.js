import React, { useState } from 'react';

import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const DatePicker = () => {
    const d = new Date();
    const [date, setDate] = useState([d.setDate(d.getDate() - 7), new Date()]);

    // const onChange = e => {
    //     setDate(e);
    // }

    console.log(date[1]);

    return (
        <div className="text-center">
            <DateRangePicker
                onChange={setDate}
                value={date}
                maxDate={new Date()}
            />
        </div>
    );
}

export default DatePicker;
