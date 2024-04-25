import { useNavigate } from "react-router-dom";

interface CollectionType {
  id: number;
  name: string;
  navigateTo?: string;
}

const Collection = ({ collection }: { collection: CollectionType }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${collection.navigateTo}`);
  };

  return (
    <div>
      <li onClick={handleNavigate}>{collection.name}</li>
    </div>
  );
};

export default Collection;
