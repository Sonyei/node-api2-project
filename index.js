// require your server and launch it here
const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`running on port ${port}`);
});
