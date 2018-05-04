var ws = require("nodejs-websocket")

//receive text return uppercase
var server = ws.createServer(function (conn) {
    console.log("A new connection")
    conn.on("text",function(str){
        console.log("received "+str)
        conn.sendText(str.toUpperCase())
    })
    conn.on("close",function(code,reason){
        console.log("Connection closed")
    })
}).listen(8001)