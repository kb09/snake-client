//√√
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect',function(){
    console.log('Successfully connected to game server'); // when connected to server
    conn.write('Name: 007') // name of snake
  });

// interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log('server message:', data);
  })
  return conn;
}; // end function 

module.exports = { connect }