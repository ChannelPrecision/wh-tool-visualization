const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
// const config = require('config');
const { check, validationResult } = require('express-validator');
const db = require('../../config/connectDb');
const ck = require('ckey');
const _ = require('lodash');

// const User = require('../../models/User');

// router.get('/', auth, async (req, res) => {
//     try {
//         const user = await User.findById(req.user.id).select('-password');
//         res.json(user);
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send('Server Error');
//     }
// });

// //Authenticate user and get token
// router.post('/', [
//     check('email', 'Please include a valid email').isEmail(),
//     check('password', 'Password is required').exists()
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     // See if User exist

//     const { email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
//         }

//         const payload = {
//             user: {
//                 id: user.id
//             }
//         }

//         jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
//             if (err) throw err;
//             res.json({ token })
//         });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send('Server error');
//     }
// });

router.get('/', auth, async (req, res) => {
    try {
        const sql = `select * from users where id='${req.user.id}'`;
        db.query(sql, (err, results) => {
            if (err) return res.status(500).json(err);
            res.json(results);
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//Authenticate user and get token
router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // See if User exist

    const { email, password } = req.body;

    const sql = `select * from users where email='${email}'`;
    // let user = await User.findOne({ email });

    // if (!user) {
    //     return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    // }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //     return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    // }

    // const payload = {
    //     user: {
    //         id: user.id
    //     }
    // }

    // jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
    //     if (err) throw err;
    //     res.json({ token })
    // });

    db.query(sql, async (err, results) => {
        // if (err) return res.status(500).json(err);
        // res.status(200).json(results);
        try {
            if (results.length === 0) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const isMatch = await bcrypt.compare(password, results[0].password);

            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
            }

            const token = jwt.sign({
                user: _.pick(results[0], ['id', 'email'])
            }, ck.jwtSecret, {
                expiresIn: 36000
            });
            // console.log(token);
            res.json({ token });
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }

    })
});

module.exports = router;