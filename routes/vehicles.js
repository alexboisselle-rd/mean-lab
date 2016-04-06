var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Vehicle = require('../models/VehicleModel.js');

/* GET /vehicles listing. */
router.get('/', function(req, res, next) {
  Vehicle.find(function(err, vehicles){
  	if(err) return next(err);
  	res.json(vehicles);
  });
});

/* GET /vehicles/:id */
router.get('/:id', function(req, res, next){
	Vehicle.findById(req.params.id, function(err, post){
		console.log(post);
		if(err) return next(err);
		res.json(post);
	});
});

/* POST /vehicles */
router.post('/', function(req, res, next){
	Vehicle.create(req.body, function(err, post){
		console.log(req.body);
		if(err) return next(err);
		res.json(post);
	});
});

/* PUT /vehicles/:id */
router.put('/:id', function(req, res, next){
	Vehicle.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	})
});

/* DELETE /vehicles/:id */ 
router.delete('/:id', function(req, res, next){
	Vehicle.findByIdAndRemove(req.params.id, req.body, function(err, post){
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;