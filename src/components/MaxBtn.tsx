import { ipcRenderer } from "electron";
import styled from "styled-components";

const StyledBtn = styled.button`
  -webkit-app-region: no-drag;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #34c759;
  border: none;
  cursor: pointer;
  margin-left: 8px;
`;

const MaxBtn = () => {
  const maximizeApp = () => {
    ipcRenderer.send("maximizeApp");
  };

  return <StyledBtn className="max-btn" onClick={maximizeApp}></StyledBtn>;
};

export default MaxBtn;
