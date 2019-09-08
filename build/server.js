"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Import nescessary data
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const body_parser_1 = __importDefault(require("body-parser"));
const path = __importStar(require("path"));
//Set up sockets and server
const app = express_1.default();
const httpApp = new http_1.default.Server(app);
const io = socket_io_1.default(httpApp);
// This enables routes expection JSON data to access it as req.body
app.use(body_parser_1.default.json());
// This maps the /build/public directory to the /public path
app.use("/", express_1.default.static(path.join(__dirname, "/client")));
// Redirect root directory to the page with the default of species data
/*app.get("/", function (req, res) {
    res.redirect("client/index.html");
});*/
app.get('*', function (req, res) {
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
const port = process.env.PORT || "3000";
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
exports.default = httpApp;
