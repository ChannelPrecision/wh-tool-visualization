import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const TaskRecords = () => {

    const data = [
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ];

    return (
        <div>
            <p>Task Records</p>
            <div className="text-center">
                <select className="ui dropdown selection" style={{ width: '250px' }}>
                    <option value="processPrime">Process Prime</option>
                    <option value="processRapid">Process Rapid</option>
                    <option value="addInventory">Add Inventory</option>
                    <option value="caseProcessed">Cases Processed</option>
                    <option value="caseLabeled">Cases Labeled</option>
                    <option value="itemsLabeled">Items Labeled</option>
                    <option value="processRemoval">Process Removal</option>
                    <option value="processReturns">Process Returns</option>
                    <option value="auditLocations">Audit Locations</option>
                    <option value="processOnsite">Process Onsite</option>
                </select>
            </div>
            <PieChart
                data={data}
                radius={18}
                center={[50, 25]}
                viewBoxSize={[100, 44.5]}
            />
        </div>
    )
};

export default TaskRecords;
