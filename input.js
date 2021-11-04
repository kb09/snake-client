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
  
  if(key === 'l'){
    connection.write('Say: Food')
  }

  if(key === 'o'){
    connection.write('Say: I see you')
  }

  if(key === 'j'){
    connection.write('Say: Going to eat you')
  }

  if (key = '\u0003') { // terminate program using ctrl + c.
    process.exit();
  } 
  
}
function sendMessage(key) {
  if (key === 'b') {
    connection.write('Say: Gang');
  }
  if (key === 'n') {
    connection.write('Say: Whatdup');
  }
}


module.exports ={ setupInput }
