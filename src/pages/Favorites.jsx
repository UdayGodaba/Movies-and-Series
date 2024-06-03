import { useSelector } from "react-redux";
import DisplayCards from "../components/DisplayCards";

const Favorites = () => {
  const { data } = useSelector((state) => state.favorite);
  console.log(data);
  return (
    <div className="fav">
      <div className="fav-sc1"></div>
      <div className="fav-sc2">
        <DisplayCards cards={data} />
      </div>
    </div>
  );
};

export default Favorites;
