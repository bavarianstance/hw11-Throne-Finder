// init path pkg to obtain correct file path for html routing
const path = require("path");
// export app routing
module.exports = (app) => {
	// html route handling for survey
	app.get("/survey", (req,res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	// html route handling for home page
	  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};