const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  attributes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attribute' }],
});

module.exports = mongoose.model('Variant', variantSchema);