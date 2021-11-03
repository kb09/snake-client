const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.on('connect',function(){
    console.log('Successfully connected to game server'); // when connected to server
    conn.write('Name: 007') // name of snake
    conn.write('Move: Up')
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

} // end function 

module.exports={ connect }