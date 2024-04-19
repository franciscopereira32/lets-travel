const User = require('../models/user');

//express validator
const { check, validationResult } = require('express-validator');
const { sanitize } = require('express-validator');
const next = require('single/lib/next');

exports.signUpGet = (req, res) => {
    res.render('sign_up', {title: 'User sign up' });
}

exports.signUpPost = [
    //Validate data
    check('first_name').isLength({ min: 1 }).withMessage('First name must be specified')
    .isAlphanumeric().withMessage('First name must be alphanumeric'),

    check('surname').isLength({ min: 1 }).withMessage('Surname name must be specified')
    .isAlphanumeric().withMessage('Surname name must be alphanumeric'),

    check('email').isEmail().withMessage('Invalid email address'),

    check('confirm_email')
    .custom(( value, { req } ) => value === req.body.email)
    .withMessage('Email addresses do not match'),

    check('password').isLength({ min: 6 })
    .withMessage('Invalid password, password much be a minimum of 6 caracteres'),

    check('confirm_password')
    .custom(( value, { req } ) => value === req.body.password)
    .withMessage('Passwords do not match'),

    //sanitize('*').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            //There are errors
            res.json(res.body)
            //res.render('sign_up', {title: 'Please fix the following errors:', errors: errors.array()});

        }else {
            //no errors

        }
    }
]