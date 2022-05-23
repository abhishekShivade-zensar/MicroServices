'use strict';

var properties = require('../package.json');
var distance = require('../services1/distance');
var radius = require('../services1/radius');
var info = require('../services1/info');

var controllers = {
	about: function(req, res) {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},
	getDistance: function(req,res){
		distance.find(req,res, function(err, dist) {
			if(err) res.send(err);
			res.json(dist);
		});
	},
	getRadius: function(req,res){
		radius.find(req,res, function(err, zp) {
			if(err) res.send(err);
			res.json(zp);
		});
	},
	getInfo: function(req,res){
		info.find(req,res, function(err, loc) {
			if(err) res.send(err);
			res.json(loc);
		});
	},
};

module.exports = controllers;