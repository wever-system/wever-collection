import SearchBar from "../components/common/SearchBar";
import Profile from "../components/header/Profile";
import CollectionList from "../components/sidebar/CollectionList";
import {
  GridContainer,
  GridContent,
  GridHeader,
  GridSidebar,
  GridTitlebar,
} from "../utils/BoxStyles";

const NotFound = () => {
  return (
    <>
      <GridContainer>
        <GridTitlebar>
          <SearchBar />
        </GridTitlebar>
        <GridHeader>
          <Profile />
        </GridHeader>
        <GridSidebar>
          <CollectionList />
        </GridSidebar>
        <GridContent>Not Found XOX</GridContent>
      </GridContainer>
    </>
  );
};

export default NotFound;
