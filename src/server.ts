//Import nescessary data
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import bodyParser from "body-parser";
import * as path from "path";


//Set up sockets and server
const app = express();
const httpApp = new http.Server(app);
const io = SocketIO(httpApp);


// This enables routes expection JSON data to access it as req.body
app.use(bodyParser.json());


// This maps the /build/public directory to the /public path
app.use("/client", express.static(path.join(__dirname, "client")));

// Redirect root directory to the page with the default of species data
app.get("/", function (req, res) {
  res.redirect("client/index.html");
});

// Which port to use
const port: string = process.env.PORT || "3000";

/*
 * Start Socket Connections between server and client
 */

io.sockets.on('connection', (socket) => {
  console.log("A user connected");

  //When a user disconnects log a disconnect 
  socket.on('disconnect', (evt) => {
    console.log("Disconnected");
  });
});

/*
 * Start the server
 */
httpApp.listen(port, () => {
  console.log("App running on port %d", port);
});

export default httpApp


