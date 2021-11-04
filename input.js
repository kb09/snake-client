// setup interface to handle user input from stdin
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => handleUserInput(key));
  return stdin;


};

const handleUserInput = function(key) {
  if (key === 'w'){
    connection.write('Move: up')
  } 
  if ( key ==='a'){
    connection.write('Move: left');
    
  } 
  if ( key ==='s'){
    connection.write('Move: down');
    
  } 
  if ( key ==='d'){
    connection.write('Move: right');}

  if (key = '\u0003') { // terminate program using ctrl + c.
    process.exit();
  } 
}



module.exports ={ setupInput }
