import { ipcRenderer } from "electron";
import styled from "styled-components";

const StyledBtn = styled.button`
  -webkit-app-region: no-drag;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background-color: #ff3b30;
  cursor: pointer;
`;

const CloseBtn = () => {
  const closeApp = () => {
    ipcRenderer.send("closeApp");
  };

  return <StyledBtn className="Close-btn" onClick={closeApp}></StyledBtn>;
};

export default CloseBtn;
