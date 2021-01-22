const express = require('express');
const router = express.Router();
const db = require('../../config/connectDb');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/staff/:startDate/:endDate', async (req, res) => {
    const sql = `select distinct employee_name from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' order by employee_name asc`;
    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/productivity/:startDate/:endDate/:emp', async (req, res) => {
    const allEmp = `select employee_name, DATE_FORMAT(task_date, "%Y-%m-%d") as taskDate, process_prime_qty, time_to_sec(process_prime_time) / (60 * 60) as process_prime_time, process_rapid_qty, time_to_sec(process_rapid_time) / (60 * 60) as process_rapid_time,
    add_inventory_qty, time_to_sec(add_inventory_time) / (60 * 60) as add_inventory_time, bulk_cases_processed_qty, time_to_sec(bulk_cases_processed_time) / (60 * 60) as bulk_cases_processed_time, bulk_cases_labeled_qty, time_to_sec(bulk_cases_labeled_time) / (60 * 60) as bulk_cases_labeled_time,
    items_labeled_qty, time_to_sec(items_labeled_time) / (60 * 60) as items_labeled_time, processed_removal_qty, time_to_sec(processed_removal_time) / (60 * 60) as processed_removal_time, process_returns_qty, time_to_sec(process_returns_time) / (60 * 60) as process_returns_time, audit_locations_qty,
    time_to_sec(audit_locations_time) / (60 * 60) as audit_locations_time, process_onsite_qty, time_to_sec(process_onsite_time) / (60 * 60) as process_onsite_time, 
    process_prime_qty/(time_to_sec(process_prime_time) / (60 * 60)) as processPrimeAvg, process_rapid_qty/(time_to_sec(process_rapid_time) / (60 * 60)) as processRapidAvg, add_inventory_qty/(time_to_sec(add_inventory_time) / (60 * 60)) as addInvAvg,
    bulk_cases_processed_qty/(time_to_sec(bulk_cases_processed_time) / (60 * 60)) as bulkCasesProcAvg, bulk_cases_labeled_qty/(time_to_sec(bulk_cases_labeled_time) / (60 * 60)) as bulkCasesLabeledAvg, items_labeled_qty/(time_to_sec(items_labeled_time) / (60 * 60)) as itemsLabeledAvg,
    processed_removal_qty/(time_to_sec(processed_removal_time) / (60 * 60)) as procRemovalAvg, process_returns_qty/(time_to_sec(process_returns_time) / (60 * 60)) as procReturnsAvg, audit_locations_qty/(time_to_sec(audit_locations_time) / (60 * 60)) as auditLocationAvg,
    process_onsite_qty/(time_to_sec(process_onsite_time) / (60 * 60)) as processOnsiteAvg
    from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}'`;

    const oneEmp = `select employee_name, DATE_FORMAT(task_date, "%Y-%m-%d") as taskDate, process_prime_qty, time_to_sec(process_prime_time) / (60 * 60) as process_prime_time, process_rapid_qty, time_to_sec(process_rapid_time) / (60 * 60) as process_rapid_time,
    add_inventory_qty, time_to_sec(add_inventory_time) / (60 * 60) as add_inventory_time, bulk_cases_processed_qty, time_to_sec(bulk_cases_processed_time) / (60 * 60) as bulk_cases_processed_time, bulk_cases_labeled_qty, time_to_sec(bulk_cases_labeled_time) / (60 * 60) as bulk_cases_labeled_time,
    items_labeled_qty, time_to_sec(items_labeled_time) / (60 * 60) as items_labeled_time, processed_removal_qty, time_to_sec(processed_removal_time) / (60 * 60) as processed_removal_time, process_returns_qty, time_to_sec(process_returns_time) / (60 * 60) as process_returns_time, audit_locations_qty,
    time_to_sec(audit_locations_time) / (60 * 60) as audit_locations_time, process_onsite_qty, time_to_sec(process_onsite_time) / (60 * 60) as process_onsite_time, 
    process_prime_qty/(time_to_sec(process_prime_time) / (60 * 60)) as processPrimeAvg, process_rapid_qty/(time_to_sec(process_rapid_time) / (60 * 60)) as processRapidAvg, add_inventory_qty/(time_to_sec(add_inventory_time) / (60 * 60)) as addInvAvg,
    bulk_cases_processed_qty/(time_to_sec(bulk_cases_processed_time) / (60 * 60)) as bulkCasesProcAvg, bulk_cases_labeled_qty/(time_to_sec(bulk_cases_labeled_time) / (60 * 60)) as bulkCasesLabeledAvg, items_labeled_qty/(time_to_sec(items_labeled_time) / (60 * 60)) as itemsLabeledAvg,
    processed_removal_qty/(time_to_sec(processed_removal_time) / (60 * 60)) as procRemovalAvg, process_returns_qty/(time_to_sec(process_returns_time) / (60 * 60)) as procReturnsAvg, audit_locations_qty/(time_to_sec(audit_locations_time) / (60 * 60)) as auditLocationAvg,
    process_onsite_qty/(time_to_sec(process_onsite_time) / (60 * 60)) as processOnsiteAvg
    from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' and employee_name = '${req.params.emp}'`;

    const sql = req.params.emp === 'all' ? allEmp : oneEmp;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/emp_records/:startDate/:endDate/:wh', async (req, res) => {
    const allWh = `select employee_name,sum(process_prime_qty) as process_prime_qty, sum(process_rapid_qty) as process_rapid_qty, sum(add_inventory_qty) as add_inventory_qty, sum(bulk_cases_processed_qty) as bulk_cases_processed_qty, sum(bulk_cases_labeled_qty) as bulk_cases_labeled_qty, sum(items_labeled_qty) as items_labeled_qty, sum(processed_removal_qty) as processed_removal_qty, sum(process_returns_qty) as process_returns_qty, sum(audit_locations_qty) as audit_locations_qty, sum(process_onsite_qty) as process_onsite_qty
    from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' group by employee_name`;

    const oneWh = `select employee_name,sum(process_prime_qty) as process_prime_qty, sum(process_rapid_qty) as process_rapid_qty, sum(add_inventory_qty) as add_inventory_qty, sum(bulk_cases_processed_qty) as bulk_cases_processed_qty, sum(bulk_cases_labeled_qty) as bulk_cases_labeled_qty, sum(items_labeled_qty) as items_labeled_qty, sum(processed_removal_qty) as processed_removal_qty, sum(process_returns_qty) as process_returns_qty, sum(audit_locations_qty) as audit_locations_qty, sum(process_onsite_qty) as process_onsite_qty
    from efficiency_report.responses where warehouse_location = '${req.params.wh}' and task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' group by employee_name`;

    const sql = req.params.wh === 'all' ? allWh : oneWh;

    // console.log(req.params.endDate + '~' + req.params.startDate + '~' + req.params.wh)

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

router.post('/emp_average/:startDate/:endDate/:wh', async (req, res) => {
    const allWh = `select employee_name, avg(process_prime_qty / (time_to_sec(process_prime_time) / (60 * 60))) as processPrimeAvg, avg(process_rapid_qty / (time_to_sec(process_rapid_time) / (60 * 60))) as processRapidAvg, avg(add_inventory_qty / (time_to_sec(add_inventory_time) / (60 * 60))) as addInventoryAvg,
    avg(bulk_cases_processed_qty / (time_to_sec(bulk_cases_processed_time) / (60 * 60))) as caseProcessedAvg, avg(bulk_cases_labeled_qty / (time_to_sec(bulk_cases_labeled_time) / (60 * 60))) as casesLabeledAvg, avg(items_labeled_qty / (time_to_sec(items_labeled_time) / (60 * 60))) as itemsLabeledAvg,
    avg(processed_removal_qty / (time_to_sec(processed_removal_time) / (60 * 60))) as processRemovalAvg, avg(process_returns_qty / (time_to_sec(process_returns_time) / (60 * 60))) as processReturnsAvg, avg(audit_locations_qty / (time_to_sec(audit_locations_time) / (60 * 60))) as auditLocationsAvg,
    avg(process_onsite_qty / (time_to_sec(process_onsite_time) / (60 * 60))) as processOnsiteAvg
    from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' group by employee_name`;

    const oneWh = `select employee_name, avg(process_prime_qty / (time_to_sec(process_prime_time) / (60 * 60))) as processPrimeAvg, avg(process_rapid_qty / (time_to_sec(process_rapid_time) / (60 * 60))) as processRapidAvg, avg(add_inventory_qty / (time_to_sec(add_inventory_time) / (60 * 60))) as addInventoryAvg,
    avg(bulk_cases_processed_qty / (time_to_sec(bulk_cases_processed_time) / (60 * 60))) as caseProcessedAvg, avg(bulk_cases_labeled_qty / (time_to_sec(bulk_cases_labeled_time) / (60 * 60))) as casesLabeledAvg, avg(items_labeled_qty / (time_to_sec(items_labeled_time) / (60 * 60))) as itemsLabeledAvg,
    avg(processed_removal_qty / (time_to_sec(processed_removal_time) / (60 * 60))) as processRemovalAvg, avg(process_returns_qty / (time_to_sec(process_returns_time) / (60 * 60))) as processReturnsAvg, avg(audit_locations_qty / (time_to_sec(audit_locations_time) / (60 * 60))) as auditLocationsAvg,
    avg(process_onsite_qty / (time_to_sec(process_onsite_time) / (60 * 60))) as processOnsiteAvg
    from efficiency_report.responses where warehouse_location='${req.params.wh}' and task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}' group by employee_name`;

    const sql = req.params.wh === 'all' ? allWh : oneWh;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/task_records/:startDate/:endDate', async (req, res) => {
    const sql = `select employee_name, sum(process_prime_qty) as processPrime, sum(process_rapid_qty) as processRapid, sum(add_inventory_qty) as addInventory, sum(bulk_cases_processed_qty) as caseProcessed,
    sum(bulk_cases_labeled_qty) as caseLabeled, sum(items_labeled_qty) as itemsLabeled, sum(processed_removal_qty) as processRemoval, sum(process_returns_qty) as processReturns,
    sum(audit_locations_qty) as auditLocations, sum(process_onsite_qty) as processOnsite from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date > '${req.params.startDate}' group by employee_name`;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/task_average/:startDate/:endDate', async (req, res) => {
    const sql = `select sum(process_prime_qty) / (sum(time_to_sec(process_prime_time) / (60 * 60))) as Process_Prime,
    sum(process_rapid_qty) / (sum(time_to_sec(process_rapid_time) / (60 * 60))) as Process_Rapid,
    sum(add_inventory_qty) / (sum(time_to_sec(add_inventory_time) / (60 * 60))) as Add_Inventory,
    sum(bulk_cases_processed_qty) / (sum(time_to_sec(bulk_cases_processed_time) / (60 * 60))) as Cases_Processed,
    sum(bulk_cases_labeled_qty) / (sum(time_to_sec(bulk_cases_labeled_time) / (60 * 60))) as Cases_Labeled,
    sum(items_labeled_qty) / (sum(time_to_sec(items_labeled_time) / (60 * 60))) as Items_Labeled,
    sum(processed_removal_qty) / (sum(time_to_sec(processed_removal_time) / (60 * 60))) as Process_Removal,
    sum(process_returns_qty) / (sum(time_to_sec(process_returns_time) / (60 * 60))) as Process_Returns,
    sum(audit_locations_qty) / (sum(time_to_sec(audit_locations_time) / (60 * 60))) as Audit_Locations,
    sum(process_onsite_qty) / (sum(time_to_sec(process_onsite_time) / (60 * 60))) as Process_OnSite
    from efficiency_report.responses where task_date <= '${req.params.endDate}' and task_date >= '${req.params.startDate}'`;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get task by id
router.get('/task_record/:id', async (req, res) => {
    const sql = `select *,DATE_FORMAT(task_date, "%Y-%m-%d") as taskDate from efficiency_report.responses where id = ${req.params.id}`;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//delete task by id
router.delete('/delete_task/:id', async (req, res) => {
    const sql = `delete from efficiency_report.responses where id = ${req.params.id}`;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({ msg: 'Task Deleted' });
        })
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

//get all employee name
router.get('/employees', async (req, res) => {
    const sql = `select employee_name, warehouse_location from efficiency_report.responses where employee_name <> ',' group by employee_name`;
    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/employee/:name', async (req, res) => {
    const sql = `select *,DATE_FORMAT(task_date, "%Y-%m-%d") as taskDate, DATE_FORMAT(submitted_date, "%Y-%m-%d") as submittedDate from efficiency_report.responses where employee_name = '${req.params.name}' order by id desc`;

    try {
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//update response
router.post('/update/:id', async (req, res) => {
    const sql = `UPDATE efficiency_report.responses
    SET process_prime_qty = ?, process_prime_time = ?,
    process_rapid_qty = ?, process_rapid_time = ?, add_inventory_qty = ?, add_inventory_time = ?, bulk_cases_processed_qty = ?,
    bulk_cases_processed_time = ?, bulk_cases_labeled_qty = ?, bulk_cases_labeled_time = ?, items_labeled_qty = ?,
    items_labeled_time = ?, processed_removal_qty = ?, processed_removal_time = ?, process_returns_qty = ?, process_returns_time = ?,
    audit_locations_qty = ?, audit_locations_time = ?, process_onsite_qty = ?, process_onsite_time = ?
    WHERE id = ?`;

    const { process_prime_qty, process_prime_time, process_rapid_qty, process_rapid_time, add_inventory_qty, add_inventory_time,
        bulk_cases_processed_qty, bulk_cases_processed_time, bulk_cases_labeled_qty, bulk_cases_labeled_time,
        items_labeled_qty, items_labeled_time, processed_removal_qty, processed_removal_time,
        process_returns_qty, process_returns_time, audit_locations_qty, audit_locations_time,
        process_onsite_qty, process_onsite_time
    } = req.body;

    const data = [process_prime_qty, process_prime_time, process_rapid_qty, process_rapid_time, add_inventory_qty, add_inventory_time,
        bulk_cases_processed_qty, bulk_cases_processed_time, bulk_cases_labeled_qty, bulk_cases_labeled_time,
        items_labeled_qty, items_labeled_time, processed_removal_qty, processed_removal_time,
        process_returns_qty, process_returns_time, audit_locations_qty, audit_locations_time,
        process_onsite_qty, process_onsite_time, req.params.id];

    console.log(data);

    try {
        db.query(sql, data, (err, results) => {
            if (err) return res.status(500).json(err);
            console.log(results);
            res.status(200).json(results);
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/', async (req, res) => {
    let errs = [];

    const { process_prime_qty, process_prime_time, process_rapid_qty, process_rapid_time, add_inventory_qty, add_inventory_time,
        case_processed_qty, case_processed_time, case_labeled_qty, case_labeled_time,
        items_labeled_qty, items_labeled_time, processed_removal_qty, processed_removal_time,
        process_returns_qty, process_returns_time, audit_locations_qty, audit_locations_time,
        process_onsite_qty, process_onsite_time, taskDate, employee_name, warehouse_location, submitted_date
    } = req.body;

    if (process_prime_qty > 0 && process_prime_time === '00:00') {
        errs.push('Process Prime Time should not be equal to 00:00');
    }
    if (process_rapid_qty > 0 && process_rapid_time === '00:00') {
        errs.push('Process Rapid Time should not be equal to 00:00');
    }
    if (add_inventory_qty > 0 && add_inventory_time === '00:00') {
        errs.push('Add Inventory Time should not be equal to 00:00');
    }
    if (case_processed_qty > 0 && case_processed_time === '00:00') {
        errs.push('Bulk Cases Processed Time should not be equal to 00:00');
    }
    if (case_labeled_qty > 0 && case_labeled_time === '00:00') {
        errs.push('Bulk Cases Labeled Time should not be equal to 00:00');
    }
    if (items_labeled_qty > 0 && items_labeled_time === '00:00') {
        errs.push('Items Labeled Time should not be equal to 00:00');
    }
    if (processed_removal_qty > 0 && processed_removal_time === '00:00') {
        errs.push('Processed Removal Time should not be equal to 00:00');
    }
    if (process_returns_qty > 0 && process_returns_time === '00:00') {
        errs.push('Process Returns Time should not be equal to 00:00');
    }
    if (audit_locations_qty > 0 && audit_locations_time === '00:00') {
        errs.push('Audit Locations Time should not be equal to 00:00');
    }
    if (process_onsite_qty > 0 && process_onsite_time === '00:00') {
        errs.push('Process Onsite Time should not be equal to 00:00');
    }
    if (taskDate === null || taskDate === '') {
        errs.push('Please select a date');
    }

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }

    if (errs.length > 0) {
        return res.status(400).json({ errors: errs });
    }

    // console.log(JSON.stringify(req.body));
    try {
        const sql = `INSERT INTO efficiency_report.responses (
            employee_name, warehouse_location, submitted_date, task_date, process_prime_qty, process_prime_time,
            process_rapid_qty, process_rapid_time, add_inventory_qty, add_inventory_time, bulk_cases_processed_qty,
            bulk_cases_processed_time, bulk_cases_labeled_qty, bulk_cases_labeled_time, items_labeled_qty,
            items_labeled_time, processed_removal_qty, processed_removal_time, process_returns_qty, process_returns_time,
            audit_locations_qty, audit_locations_time, process_onsite_qty, process_onsite_time)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        const data = [employee_name, warehouse_location, submitted_date, taskDate, process_prime_qty,
            process_prime_time, process_rapid_qty, process_rapid_time, add_inventory_qty, add_inventory_time,
            case_processed_qty, case_processed_time, case_labeled_qty, case_labeled_time,
            items_labeled_qty, items_labeled_time, processed_removal_qty, processed_removal_time,
            process_returns_qty, process_returns_time, audit_locations_qty, audit_locations_time,
            process_onsite_qty, process_onsite_time];

        db.query(sql, data, (err, results) => {
            if (err) return res.status(500).json(err);
        })

        res.status(200).json();

        // console.log(JSON.stringify(req.body))
        // console.log(data);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;