const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
let client = connect();

client.on("connect", () => {
  console.log("Client connected");
});

client.on("data", (data) => {
  console.log(data);
});
