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
app.use("/", express.static(path.join(__dirname, "/client")));

// Redirect root directory to the page with the default of species data
app.get("/", function (req, res) {
  res.redirect("client/index.html");
});

app.get("/gibby", function (req, res) {
  res.sendfile("build/client/res/gibby.jpg");
});


app.get('*', function(req, res){
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


