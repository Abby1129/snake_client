// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === "a") {
      connection.write("Move: left");
    }
    if (key === "s") {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write("Move: right");
    }
    if (key === "p") {
      connection.write("Pause: true");
    }
    if (key === "z") {
      connection.write("Say: go long!");
    }
    if (key === "x") {
      connection.write("Say: can't catch this!");
    }
    if (key === "q") {
      connection.write("Say: gg!");
    }
  };

  return stdin;
};

module.exports = setupInput;
