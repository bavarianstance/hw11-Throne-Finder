
// load data
let thronesData = require("../data/thrones");

// exporting app routes
module.exports = (app) => {
// API get request handling
	app.get("/api/thronesData", (request, response) => {
		response.json(thronesData);
	});
// API post request handling
app.post("/api/thronesData", (request, response) => {

// def init topmatch attributes
let topMatch = {
	name: "",
	pic: "",
	matchDiff: 888
};
// assign user entered data to global variables
let playerData = request.body;
let playerPoints = playerData.points;
let playerName = playerData.name;
let playerPic = playerData.pic;
//assign totalDifference variable and set init value
let totalDiff = 0;

// iterate thru data array
for (let i = 0; i < thronesData.length; i++){
	console.log(thronesData[i].name);
	totalDiff = 0;
// nested for loop for calculating totalDiff based on user inputs
	for (let j = 0; j < 15; j++) {
		totalDiff += Math.abs(parseInt(playerPoints[j] - parseInt(thronesData[i].points[j]))
			);
		// app logic
		if (totalDiff <= topMatch.matchDiff) {
			topMatch.name = thronesData[i].name;
			topMatch.pic = thronesData[i].pic;
			topMatch.matchDiff = totalDiff;
		}
	}
}
// push user inputted data object to data array
thronesData.push(playerData);
// stores response data as json object into topmatch variable
response.json(topMatch);

	});
}