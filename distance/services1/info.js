var request = require('request');
const apiKey = 'DemoOnly000og8qzk7mPUvdj5riTttq3Dj1QAPsyZtIa83XYm80RxJxW0mTCploL';
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var info = {
    find: function (req,res,next){
        request(zipCodeURL + apiKey + '/info.json/' + req.params.pincode1 + '/' + '/mile', function(error, response, body) {
            if(!error && response.statusCode == 200){
                response = JSON.parse(body);
                res.send(response);
                console.log("Done....!");
            } else {
                console.log(response.statusCode + response.body);
                res.send({info: -1});
            }
        });
    }
};

module.exports = info;