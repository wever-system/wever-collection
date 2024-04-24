import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20vw 80vw;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    "header content"
    "sidebar content";
  width: 100vw;
  height: 100vh;
`;

export const GridHeader = styled.div`
  grid-area: header;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;

export const GridSidebar = styled.div`
  grid-area: sidebar;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 10px;
`;

export const GridContent = styled.div`
  grid-area: content;
  background-color: #f1f1f1;
  padding: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;
