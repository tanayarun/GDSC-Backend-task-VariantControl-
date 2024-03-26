const express = require('express');
const router = express.Router();
const Attribute = require('../models/Attribute');


router.post('/', async (req, res) => {
  try {
    const attribute = new Attribute(req.body);
    await attribute.save();
    res.status(201).json(attribute);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;