// import the request module into this file
var request = require('request');

// set the different options both in local and living environment.
var apiChoosing = {
	server: "http://localhost:3000"
};

if (process.env.NODE_ENV === 'production') {
	apiChoosing.server = "https://smr-pjt-loct-dr.herokuapp.com";
} 

/* Get 'Location List' page. */
// render function of get the location list
var renderLocationList = function(req, res, responseBody){
	res.render('locations_list', {
		title: 'Find places to work near you!',
		pageHeader: {
			title: 'Find places to work near you!'
		},
		locations: responseBody
	});
};
// Get: Location List
module.exports.locationList = function(req, res){
	var requestOptions, path;
	path = '/api/locations';
	requestOptions = {
		url: apiChoosing.server + path,
		method: "GET",
		json: {},
		qs: {
			lng: -1.390814,
			lat: 50.938497,
			maxDistance: 300
		}
	};
	request(requestOptions, function(err, response, body){
		renderLocationList(req, res, body);
	});
};

/* Get 'location infomation' page. */
module.exports.locationInfo = function(req, res){
	res.render('location_info', {
		title: 'Sainsbury Local',
		pageHeader: {
			title: 'Sainsbury Local'
		},
		sidebar: {
			context: 'provide accessible wifi and space to help you sit down with laptop and get work done.',
			callToAction: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
		},
		location: {
			name: 'Sainsbury\'s Local',
			address: '301 Burgess Road, Southampton, SO16 3BA',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			coords: {lat: 50.938497, lng: -1.390814},
			openingTimes: [{
				days: 'Monday - Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			},{
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Jack Lee',
				rating: 5,
				timestamp: '16 May 2017',
				reviewText: 'Quite, and the coffee is yummy!!!'
				},{
				author: 'Willie Rathke',
				rating: 3,
				timestamp: '27 May 2017',
				reviewText: 'Suitable for studying, haha!!!'
			}]
		}
	})
};

/* Get 'Add Review' page. */
module.exports.addReview = function(req, res){
	res.render('location_review_form', {
		title: 'Review Sainsbury',
		pageHeader: {title: 'Review Sainsbury'}
	})
};