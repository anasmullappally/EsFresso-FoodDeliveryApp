const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.get('/', (req, res) => {
    console.log('iam in landing page')
})

module.exports = router