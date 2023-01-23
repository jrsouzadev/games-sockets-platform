import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../../state";

interface StyledMessageProps {
  isOwnMessage: boolean;
}

export const StyledMessage = styled.div<StyledMessageProps>`
  padding: 0.3rem;
  align-self: flex-end;
  ${(props) => {
    if (props.isOwnMessage) {
      return ``;
    } else {
      return ``;
    }
  }}
`;

function MessageComponent(props: { data: Message }) {
  const { user } = useAppContext();

  return (
    <StyledMessage isOwnMessage={user.id === props.data.from.id}>
      <div>{props.data.from.name}</div>
      <div>{props.data.timestamp.toLocaleString()}</div>
      <div>{props.data.message}</div>
    </StyledMessage>
  );
}

export default MessageComponent;
