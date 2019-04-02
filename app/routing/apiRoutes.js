let thronesData = require("../data/thrones");

module.exports = (app) => {

	app.get("/api/thronesData", (request, response) => {
		res.json(thronesData);
	});



app.post("/api/thronesData", (request, response) => {

let topMatch = {
	name: "",
	pic: "",
	matchDiff: 1000
};

let playerData = request.body;
let playerPoints = playerData.points;
let playerName = playerData.name;
let playerPic = playerData.pic;

let totalDiff = 0;

for (let i = 0; i < thronesData.length; i++){
	console.log(thronesData[i].name);
	totalDiff = 0;


	for (let j = 0; j < 15; j++) {
		totalDiff += Math.abs(parseInt(playerPoints[j] - parseInt(thronesData[i].points[j]))
			);

		if (totalDiff <= topMatch.matchDiff) {
			topMatch.name = thronesData[i].name;
			topMatch.pic = thronesData[i].pic;
			topMatch.matchDiff = totalDiff;
		}
	}
}

thronesData.push(playerData);
res.json(topMatch);

	});
}