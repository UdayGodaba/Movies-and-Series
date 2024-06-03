import SearchBar from "../components/SearchBar";
import DisplayCards from "../components/DisplayCards";
import { useSelector } from "react-redux";

const HomePage = () => {
  const cards = useSelector((state) => state.search.data);
  return (
    <div className="home">
      <div className="home-sc1">
        <SearchBar />
      </div>
      <div className="home-sc2">{cards && <DisplayCards cards={cards} />}</div>
    </div>
  );
};

export default HomePage;
