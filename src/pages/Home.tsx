import { GridContainer, GridContent, GridHeader, GridSidebar } from "../utils/BoxStyles";

const Home = () => {
  return (
    <>
      <GridContainer>
        <GridHeader>Header</GridHeader>
        <GridSidebar>Sidebar</GridSidebar>
        <GridContent>Content</GridContent>
      </GridContainer>
    </>
  );
};

export default Home;
