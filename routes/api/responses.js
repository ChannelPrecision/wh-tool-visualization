const express = require('express');
const router = express.Router();
const db = require('../../config/connectDb');

router.post('/staff/:startDate/:endDate', async (req, res) => {
    const sql = `select distinct employee_name from efficiency_report.responses where task_date < '${req.params.endDate}' and task_date > '${req.params.startDate}' order by employee_name asc`;
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
    const allWh = `select employee_name,process_prime_qty, process_rapid_qty, add_inventory_qty, bulk_cases_processed_qty, bulk_cases_labeled_qty, items_labeled_qty, processed_removal_qty, process_returns_qty, audit_locations_qty, process_onsite_qty
    from efficiency_report.responses where task_date < '${req.params.endDate}' and task_date > '${req.params.startDate}' group by employee_name`;

    const oneWh = `select employee_name,process_prime_qty, process_rapid_qty, add_inventory_qty, bulk_cases_processed_qty, bulk_cases_labeled_qty, items_labeled_qty, processed_removal_qty, process_returns_qty, audit_locations_qty, process_onsite_qty
    from efficiency_report.responses where warehouse_location = '${req.params.wh}' and task_date < '${req.params.endDate}' and task_date > '${req.params.startDate}' group by employee_name`;

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

module.exports = router;