import SearchBar from "../components/common/SearchBar";
import {
  GridContainer,
  GridContent,
  GridHeader,
  GridSidebar,
  GridTitlebar,
} from "../utils/BoxStyles";

const Home = () => {
  return (
    <>
      <GridContainer>
        <GridTitlebar>
          <SearchBar />
        </GridTitlebar>
        <GridHeader>Header</GridHeader>
        <GridSidebar>Sidebar</GridSidebar>
        <GridContent>Content</GridContent>
      </GridContainer>
    </>
  );
};

export default Home;
