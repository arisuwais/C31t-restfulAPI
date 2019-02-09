var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var demoSchema = new Schema({

  id: {
    type: Number
  },
  letter: {
    type: String
  },
  frequency: {
    type: Number
  }
});

exports.Data = mongoose.model('data', demoSchema, 'data');