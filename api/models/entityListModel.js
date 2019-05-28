'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EntitySchema = new Schema({
  name: {
    type: String,
    required: 'please enter the name of entity'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  category: {
    type: [{
      type: String,
      enum: ['item', 'npc', 'player', 'interaction']
    }],
    default: ['player']
  }
});

module.exports = mongoose.model('Entities', EntitySchema);
