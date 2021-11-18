const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(`Server: ${data}`);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AF");
  });

  return conn;
};

module.exports = connect;
