//Import nescessary data
import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import bodyParser from "body-parser";
import * as path from "path";
import bouncy from "bouncy";

//Set up sockets and server
const ton3lServer = express();
const httpton3lServer = new http.Server(ton3lServer);
const io = SocketIO(httpton3lServer);

// Master Server port
const masterPort: string = process.env.PORT || "80";

const swillServer = express()
const httpSwillServer = new http.Server(swillServer)
const swillPort: string = process.env.PORT || "8002";

swillServer.use("/", express.static(path.join(__dirname, "/swill")));
httpSwillServer.listen(8002, () => {
  console.log("Swill Server is listening on port: " + swillPort)
})


const bouncyServer = bouncy((req: any, res: any, bounce: any) => {
  if (req.headers.host === 'ton3l.com') {
    bounce(8001)
  } else if (req.headers.host === 'twf.ton3l.com') {
    bounce(8005)
  } else if (req.headers.host === 'issamwilliamsonhot.com') {
    bounce(8002)
  } else {
    bounce(8002)
  }
})
bouncyServer.listen(masterPort)

// This enables routes expection JSON data to access it as req.body
ton3lServer.use(bodyParser.json());


// This maps the /build/public directory to the /public path
ton3lServer.use("/", express.static(path.join(__dirname, "/client")));

// Redirect root directory to the page with the default of species data
ton3lServer.get("/", function (req, res) {
  res.redirect("client/index.html");
});

ton3lServer.get("/gibby", function (req, res) {
  res.sendfile("build/client/res/gibby.jpg");
});

ton3lServer.get("/wildlife_id", (req, res) => {
  res.redirect("build/client/res/wildlife_id/index.html");
});


ton3lServer.get('*', function (req, res) {
  /*// respond with html page
 if (req.accepts('html')) {
   res.render('404', { url: req.url });
   return;
 }
 */


  // default to plain-text. send()
  res.status(404).send('UwU What\s this? S-senpai e-exposed my 404 *shy shrug*. I hope my senpai will still LOVE ME! *nuzzles*');
});



// Which port to use
const port: string = process.env.PORT || "8001";

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
httpton3lServer.listen(port, () => {
  console.log("ton3lServer running on port %d", port);
});

export default httpton3lServer


