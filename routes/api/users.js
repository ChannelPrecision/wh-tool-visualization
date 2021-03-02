const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');

const db = require('../../config/connectDb');
const ck = require('ckey');
const _ = require('lodash');

// const User = require('../../models/User');

// Register User
router.post('/', [
    check('firstname', 'First Name is required').not().isEmpty(),
    check('lastname', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('gender', 'Please select gender').not().isEmpty(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
    check('warehouse_location', 'Please select warehouse location').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // See if User exist

    let { firstname, lastname, email, password, gender, warehouse_location } = req.body;

    const sql = `select * from users where email='${email}'`;

    db.query(sql, async (err, results) => {
        try {
            if (results.length > 0) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }

            const salt = await bcrypt.genSalt(10);

            password = await bcrypt.hash(password, salt);

            // const insertQry = `insert into users (firstname, lastname, gender, email, password, warehouse_location) 
            // values ('${firstname}','${lastname.replace("'", "\'")}','${gender}','${email}','${password}','${warehouse_location}')`;

            const insertQry = `INSERT INTO efficiency_report.users (firstname, lastname, gender, email, password, warehouse_location) VALUES (?, ?, ?, ?, ?, ?)`;

            const insertData = [firstname, lastname, gender, email, password, warehouse_location];

            db.query(insertQry, insertData, (err, result) => {
                console.log('inserted new user');
            })
            const token = jwt.sign({
                user: _.pick(results[0], ['id', 'email'])
            }, ck.jwtSecret, {
                expiresIn: 36000
            });

            res.json({ token });
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    })

    // try {
    //     let user = await User.findOne({ email });

    //     if (user) {
    //         return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    //     }

    //     user = new User({
    //         name,
    //         email,
    //         password
    //     });

    //     //Encrypt password
    //     const salt = await bcrypt.genSalt(10);

    //     user.password = await bcrypt.hash(password, salt);

    //     await user.save();

    //     const payload = {
    //         user: {
    //             id: user.id
    //         }
    //     }

    //     jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
    //         if (err) throw err;
    //         res.json({ token })
    //     });

    // } catch (error) {
    //     console.log(error.message);
    //     res.status(500).send('Server error');
    // }
});

module.exports = router;