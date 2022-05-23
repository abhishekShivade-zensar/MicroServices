'use strict';

const  controller =require('./controller');

module.exports = function(app) {
	app.route('/about').get(controller.about);
	app.route('/distance/:pincode1/:pincode2').get(controller.getDistance);
	app.route('/radius/:pincode1').get(controller.getRadius);
	app.route('/info/:pincode1').get(controller.getInfo);
	app.get('/', (req, res)=>{
        res.send("ZipCode API");
    });
};