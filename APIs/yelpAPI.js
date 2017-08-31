// function: shoud take in search pararameters object and return results
'use strict'
 
const yelp = require('yelp-fusion');

const apiCall = function(searchQuery){
	const searchResults = [];
	const clientId ="Bc_bnoDsBRpqiMnDgV5ZHg";
	const clientSecret = "DyinsiGY2ZbAA2Y3GeGQfZP4nKh41hwtPvUUB0Y7c9IpMrrcJWs6bTNhQtWrfkGZ";

	const searchRequest = {
/*	latitude = locationObject.lat,
	longitude = locationObject.lng,*/
 	location: "denver, co" + /*locationSearch*/ + "",
 	limit: 10,
 	categories: "" + /*categorySelection*/ + "",
 	term: "" + /*findField*/ + ""

 	};

	yelp.accessToken(clientId, clientSecret).then(response => {

		const client = yelp.client(response.jsonBody.access_token);

		client.search(searchRequest).then(response => {

				console.log(response.jsonBody.businesses);
	  	});	  	
	}).catch(e => {
  		console.log(e);
	});
};
apiCall();
 
module.exports.apiCall = apiCall;




