import {
  GridContainer,
  GridContent,
  GridHeader,
  GridSidebar,
  GridTitlebar,
} from "../utils/BoxStyles";
import MaxBtn from "../components/MaxBtn";
import MinBtn from "../components/MinBtn";
import CloseBtn from "../components/CloseBtn";

const Home = () => {
  return (
    <>
      <GridContainer>
        <GridTitlebar>
          <CloseBtn />
          <MinBtn />
          <MaxBtn />
        </GridTitlebar>
        <GridHeader>Header</GridHeader>
        <GridSidebar>Sidebar</GridSidebar>
        <GridContent>Content</GridContent>
      </GridContainer>
    </>
  );
};

export default Home;
