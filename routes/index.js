
// var fs = require('fs');
// var path = require('path')
// var DB_FILE = path.join(__dirname, '../database/data.json')
// console.log(DB_FILE);
var express = require('express');
var router = express.Router();
const model = require("../models/user");
const Data = model.Data;

router.get('/api', function (req, res) {
  Data.find({}, function (err, data) {
    console.log(data);
    if (err) throw err;
    res.json({
      success: true,
      message: 'data have been added',
      data: data
    })
  })
})

router.post('/add', function (req, res) {
  var data = new Data({
    letter: req.body.letter,
    frequency: req.body.frequency
  });
  data.save().then(data => {
    console.log(data);
    res.json({
      success: true,
      message: 'data have been added',
      data: {
        letter: data.letter,
        frequency: data.frequency
      }
    })
  })
})

router.put('/edit/:_id', function (req, res) {
  Data.findById(req.params._id, function (err, data) {
    console.log(data);
    if (err) throw err;
    data.letter = req.body.letter;
    data.frequency = req.body.frequency;
    data.save().then(data => {
      res.json({
        success: true,
        message: "data have been updated",
        data: data
      })
    })
  })
})

router.get('/api/:_id', function (req, res) {
  Data.findById(req.params._id, function (err, data) {
    console.log(data);
    if (err) throw err;
    res.json({
      success: true,
      message: "data have been found",
      data: data
    })
  })
})

router.delete('/delete/:_id', function (req, res) {
  Data.findByIdAndRemove(req.params._id, function (err, data) {
    if (err) throw err;
    console.log(data);
    res.json({
      success: true,
      message: 'data have been deleted',
      data: {
        _id: data._id,
        letter: data.letter,
        frequency: data.frequency
      }
    })
  })
})



module.exports = router;
// app.use('/api', router);
// app.listen(port);
// console.log(' port ' + port);