/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { HomeContainer } from "./styles";

function Home() {
  return (
    <>
      <HomeContainer>This is the home page</HomeContainer>
    </>
  );
}

export default Home;
