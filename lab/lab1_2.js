//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
		callback(null, "hello");
		var ec2 = new AWS.EC2();
		ec2.describeInstances({}, function(err, data){
		if(err){callback(JSON.stringify(err));}
		else{callback(null, JSON.stringify(data));}
		});
}

exports.lab = task