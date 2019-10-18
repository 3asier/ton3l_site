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
const bouncy_1 = __importDefault(require("bouncy"));
//Set up sockets and server
const ton3lServer = express_1.default();
const httpton3lServer = new http_1.default.Server(ton3lServer);
const io = socket_io_1.default(httpton3lServer);
// Master Server port
const masterPort = process.env.PORT || "80";
const swillServer = express_1.default();
const httpSwillServer = new http_1.default.Server(swillServer);
const swillPort = process.env.PORT || "8002";
swillServer.use("/", express_1.default.static(path.join(__dirname, "/swill")));
httpSwillServer.listen(8002, () => {
    console.log("Swill Server is listening on port: " + swillPort);
});
const bouncyServer = bouncy_1.default((req, res, bounce) => {
    if (req.headers.host === 'ton3l.com') {
        bounce(8001);
    }
    else if (req.headers.host === 'twf.ton3l.com') {
        bounce(8005);
    }
    else if (req.headers.host === 'issamwilliamsonhot.com') {
        bounce(8002);
    }
    else {
        bounce(8002);
    }
});
bouncyServer.listen(masterPort);
// This enables routes expection JSON data to access it as req.body
ton3lServer.use(body_parser_1.default.json());
// This maps the /build/public directory to the /public path
ton3lServer.use("/", express_1.default.static(path.join(__dirname, "/client")));
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
const port = process.env.PORT || "8001";
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
exports.default = httpton3lServer;
