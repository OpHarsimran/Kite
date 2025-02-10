const {model} = require('mongoose');

const {PositionsSchema} = require('../Schemas/PostionsSchema.js')

const PositionsModel = new model('position',PositionsSchema);

module.exports = {PositionsModel};