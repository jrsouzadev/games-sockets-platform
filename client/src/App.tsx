import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io();

function App() {
  const [connection, setConnection] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Socket connected. Id: ${socket.id}`);
      socket.emit("I am alive!");
      setConnection(true);
    });
  });

  return (
    <div
      style={{
        backgroundColor: "pink",
        width: "100rem",
        height: "100rem",
        padding: "200px",
      }}
    >
      <header>
        <p style={{ fontSize: "30px" }}>
          <strong>Welcome. Hello world!</strong> by João Ricardo
        </p>
        <p style={{ fontSize: "30px" }}>
          <strong>Socket connected: </strong> {connection ? "ON" : "OFF"}
        </p>
      </header>
    </div>
  );
}

export default App;
