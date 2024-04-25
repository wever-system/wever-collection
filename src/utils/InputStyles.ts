import styled from "styled-components";

export const Input = styled.input`
  -webkit-app-region: no-drag;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #bbb;
  width: 400px;
  align-self: center;
  &:focus {
    outline: none;
  }
  background-color: rgba(150, 150, 150, 0.1);
`;
