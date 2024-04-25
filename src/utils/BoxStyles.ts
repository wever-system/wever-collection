import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 15vw 85vw;
  grid-template-rows: 4vh 10vh 86vh;
  grid-template-areas:
    "titlebar titlebar"
    "header content"
    "sidebar content";
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const GridTitlebar = styled.div`
  -webkit-app-region: drag;
  grid-area: titlebar;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridHeader = styled.div`
  grid-area: header;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;

export const GridSidebar = styled.div`
  grid-area: sidebar;
  box-sizing: border-box;
  padding-left: 10px;
`;

export const GridContent = styled.div`
  grid-area: content;
  padding: 10px;
  box-sizing: border-box;
`;
