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

const DailyScrumble = () => {
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
        <GridContent>DailyScrumble</GridContent>
      </GridContainer>
    </>
  );
};

export default DailyScrumble;
