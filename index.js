// require your server and launch it here
const server = require("./api/server");

server.listen(5000, () => {
	console.log("running on port 5000");
});
