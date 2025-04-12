const express = require('express');
const aiController = require('../controllers/ai.controller');

const router = express.Router()

router.post("/get-response", aiController.getReview)

module.exports = router;

