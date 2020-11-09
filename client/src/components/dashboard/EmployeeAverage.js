import React, { Fragment } from 'react';

import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

const EmployeeAverage = () => {

    const data = [];

    const columns = [
        {
            Header: "Staff",
            accessor: "staff"
        },
        {
            Header: "Process Prime",
            id: "processPrime"
        },
        {
            Header: "Process Rapid",
            id: "processRapid"
        },
        {
            Header: "Add Inventory",
            id: "addInventory"
        },
        {
            Header: "Cases Processed",
            id: "casesProcessed"
        },
        {
            Header: "Cases Labeled",
            id: "casesLabeled"
        },
        {
            Header: "Item Labeled",
            id: "itemLabeled"
        },
        {
            Header: "Process Removal",
            id: "processRemoval"
        },
        {
            Header: "Audit Locations",
            id: "auditLocations"
        },
        {
            Header: "Process Returns",
            id: "processReturns"
        },
        {
            Header: "Process OnSite",
            id: "processOnsite"
        }
    ];

    return (
        <Fragment>
            <div className="ui segment">
                <p>Employee Average</p>
                <select className="ui dropdown selection" style={{ marginBottom: '5px', width: '300px' }}>
                    <option value="all">All</option>
                    <option value="nc">NC</option>
                    <option value="ut">UT</option>
                </select>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 25, 50, 100, 150]}
                    className="-striped -highlight"
                />
            </div>
        </Fragment>
    )
};

export default EmployeeAverage;