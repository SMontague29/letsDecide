// function: shoud take in search pararameters object and return results
'use strict'
 
const yelp = require('yelp-fusion');
const searchResults = '';

const geoLocate = {
	"GET": "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCFGkj7gFUO2YrEr84OlIUziIQe9hptDnI"
};

const apiCall = function(searchQuery, callBack){
	console.log(searchQuery);
	
	const clientId ="Bc_bnoDsBRpqiMnDgV5ZHg";
	const clientSecret = "DyinsiGY2ZbAA2Y3GeGQfZP4nKh41hwtPvUUB0Y7c9IpMrrcJWs6bTNhQtWrfkGZ";
	const searchTerms = {
 // 	// term:'Four Barrel Coffee',
/*  	location: 'denver, co'searchTerm,*/
  	limit: 10,
  	latitude: geoLocate.lat,
  	longitude: geoLocate.lng
 // 	price: "1,2"
	 };


	yelp.accessToken(clientId, clientSecret).then(response => {

		const client = yelp.client(response.jsonBody.access_token);

		client.search(searchTerms).then(response => {
			// for loop that console.logs the first 10 responces
			// find another way of doing this ---- send back the whole responce instead
			// it'll be better for giving back results
			// for (var i=0; i < response.jsonBody.businesses.length; i++) {
				const searchResults = console.log(response.jsonBody.businesses);
		    	// const firstResult = response.jsonBody.businesses[0];
/*		    	callBack(response.jsonBody.businesses);*/
		    	// const prettyJson = JSON.stringify(firstResult, null, 5);
		    	// console.log(prettyJson);
		    	// searchResults.push({prettyJson})
		     });

		client.reviews(searchResults.id).then(response=> {

			console.log(response.jsonBody.reviews[0].text);
		}).catch(e => {
  		console.log(e);
	});	
		    // console.log("all results: " + searchResults[1]);
	  	
	}).catch(e => {
  		console.log(e);
	});
};
apiCall();
 
module.exports.apiCall = apiCall;




