import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChatApp } from "./apps";
import Home from "./home";

import { GlobalStyle, Navigation, NavItem, Main } from "./styles";
import AppStateProvider from "./state";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <AppStateProvider>
          <>
            <Navigation>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/chat">Chat</Link>
              </NavItem>
            </Navigation>
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<ChatApp />} />
              </Routes>
            </Main>
          </>
        </AppStateProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
