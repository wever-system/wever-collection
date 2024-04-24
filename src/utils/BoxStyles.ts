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
`;

export const GridTitlebar = styled.div`
  -webkit-app-region: drag;
  grid-area: titlebar;
  background: rgb(255, 248, 231);
  background: radial-gradient(
    circle,
    rgba(255, 248, 231, 1) 0%,
    rgba(255, 234, 129, 1) 48%,
    rgba(148, 187, 233, 1) 100%
  );
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const GridHeader = styled.div`
  grid-area: header;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;

export const GridSidebar = styled.div`
  grid-area: sidebar;
  background-color: #f1f1f1;
  box-sizing: border-box;
  padding: 10px;
`;

export const GridContent = styled.div`
  grid-area: content;
  background-color: #ddd;
  padding: 10px;
  box-sizing: border-box;
`;
