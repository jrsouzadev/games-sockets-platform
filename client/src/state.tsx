import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateId, generateRandomName } from "./utils";

export interface AppState {
  user: { name: string; id: string };
  socket: Socket | null;
  openApplication: string | undefined;
}

export interface AppStateObject extends AppState {
  setUserName: (newName: string) => void;
  setOpenApplication: (newOpenApp: string) => void;
  sendClientData: (payload: any) => void;
}

const AppContext = createContext<AppStateObject | null>(null);

export function useAppContext() {
  const context = useContext(AppContext)!;
  return context;
}

export default function AppStateProvider(props: PropsWithChildren) {
  const [appState, setAppState] = useState<AppState>({
    user: { id: generateId(), name: generateRandomName() },
    socket: null,
    openApplication: undefined,
  });

  useEffect(() => {
    const socket = io();

    socket.on("connect", () => {
      console.log(`Socket connected: id ${socket.id}`);
      socket.on("disconnect", () => {
        console.log(`Socket disconnected: id ${socket.id}`);
      });
    });

    setAppState((state) => ({
      ...state,
      socket: socket,
    }));
  }, []);

  useEffect(() => {
    console.log(appState);
  }, [appState]);

  function setUserName(newName: string) {
    setAppState((state) => {
      const newState = { ...state };
      newState.user.name = newName;
      return newState;
    });
  }

  function setOpenApplication(newOpenApp: string) {
    setAppState((state) => ({ ...state, openApplication: newOpenApp }));
  }

  function sendClientData(payload: any) {
    if (appState.socket && appState.socket.connected) {
      appState.socket.emit("client_data", payload);
    }
  }

  const stateObject = {
    ...appState,
    setUserName,
    setOpenApplication,
    sendClientData,
  };

  return (
    <>
      <AppContext.Provider value={stateObject}>
        {props.children}
      </AppContext.Provider>
    </>
  );
}
