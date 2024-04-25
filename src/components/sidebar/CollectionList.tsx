import styled from "styled-components";
import Collection from "./Collection";

const CollectionBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const CollectionList = () => {
  return (
    <>
      <h2>Your Collection List</h2>
      <CollectionBox>
        <Collection
          collection={{
            id: 1,
            name: "Daily Scrumble",
            navigateTo: "dailyscrumble",
          }}
        />
        <Collection
          collection={{ id: 2, name: "BookMark", navigateTo: "bookmark" }}
        />
        <Collection
          collection={{ id: 3, name: "Place", navigateTo: "place" }}
        />
      </CollectionBox>
    </>
  );
};

export default CollectionList;
