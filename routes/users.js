
// var fs = require('fs');
// var path = require('path')
// var DB_FILE = path.join(__dirname, '../database/data.json')
// console.log(DB_FILE);
var express = require('express');
var router = express.Router();
const Data = require("../models/user");

// router.get('/api', function (req, res) {
//   fs.readFile(DB_FILE, 'UTF8', function (err, data) {
//     console.log(data);
//     data = JSON.parse(data);
//     console.log(data);

//     if (err) {
//       console, error(err)
//       process.exit(1)
//     }
//     res.json({
//       success: true,
//       message: "data has been added",
//       data: {
//         letter: data[0].letter,
//         frequency: data[0].frequency
//       }
//     });

//   })
// })



module.exports = router;
// app.use('/api', router);
// app.listen(port);
// console.log(' port ' + port);