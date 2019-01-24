var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://Ushna:12345@localhost:5432/Company';
var db = pgp(connectionString);

// // add query functions

module.exports = {
  getAllPuppies: getAllPuppies
  // getSinglePuppy: getSinglePuppy,//where is getSinglePuppy this defined ?
  // createPuppy: createPuppy,
  // updatePuppy: updatePuppy,
  // removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {
    db.any('select * from employe')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL puppies'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  
  };
