import { ipcRenderer } from "electron";
import styled from "styled-components";

const StyledBtn = styled.button`
  -webkit-app-region: no-drag;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffcc00;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`;

const MinBtn = () => {
  const minimizeApp = () => {
    ipcRenderer.send("minimizeApp");
  };

  return <StyledBtn className="min-btn" onClick={minimizeApp}></StyledBtn>;
};

export default MinBtn;
