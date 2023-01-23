import styled from "styled-components";

export const ChatAppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const MessagesBox = styled.div`
  height: 50rem;

  & > div {
    max-height: 50rem;
    overflow-y: scroll;
  }
`;

export const StyledMessage = styled.div`
  padding: 0.3rem;
`;

export const InputBox = styled.input``;

export const InputForm = styled.form``;

export const SubmitButton = styled.button``;
