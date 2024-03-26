const express = require('express');
const router = express.Router();
const Variant = require('../models/Variant');


router.post('/', async (req, res) => {
  try {
    const variant = new Variant(req.body);
    await variant.save();
    res.status(201).json(variant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;