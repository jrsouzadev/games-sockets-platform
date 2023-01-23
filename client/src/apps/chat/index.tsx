/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { generateId } from "../../utils";
import {
  ChatAppContainer,
  MessagesBox,
  InputBox,
  SubmitButton,
  InputForm,
} from "./styles";
import { useAppContext } from "../../state";
import { MessageComponent } from "./components";

class MessageObject implements Message {
  readonly timestamp: Date;
  readonly messageId: string;
  constructor(
    readonly from: { name: string; id: string },
    readonly message: string
  ) {
    this.timestamp = new Date();
    this.messageId = generateId(10);
  }
}

function ChatApp() {
  const { setOpenApplication, socket, user, sendClientData } = useAppContext();

  const [messagesList, setMessagesList] = useState<Message[]>([]);

  const [text, setText] = useState<string>("");

  useEffect(() => {
    setOpenApplication("chat");
    if (socket) {
      socket.on("server_data", (data) => {
        const newMessage = data.payload! as Message;
        setMessagesList((state) => [...state, newMessage]);
      });
    }
    return () => setOpenApplication("");
  }, []);

  useEffect(() => {
    console.log(messagesList);
  }, [messagesList]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    sendClientData({
      application: "chat",
      user,
      payload: new MessageObject(user, text),
    });
    setText("");
  }

  return (
    <ChatAppContainer>
      <MessagesBox>
        <div>
          {messagesList.map((item) => (
            <MessageComponent data={item} />
          ))}
        </div>
      </MessagesBox>
      <InputForm onSubmit={(e) => handleSubmit(e)}>
        <InputBox type="text" value={text} onChange={(e) => handleChange(e)} />
        <SubmitButton type="submit">Enter</SubmitButton>
      </InputForm>
    </ChatAppContainer>
  );
}

export default ChatApp;
