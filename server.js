const PORT = 8000;
const http = require("http");
const app = require("./app.js");

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`);
});
