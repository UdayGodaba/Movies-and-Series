import SearchBar from "../components/SearchBar";
import DisplayCards from "../components/DisplayCards";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { setData, setPage } from "../utils/searchSlice";
import { fetchData } from "../utils/api";

const HomePage = () => {
  const {
    data: cards,
    totalResults,
    name,
    type,
    page,
  } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleChange = async (page) => {
    try {
      let updatedType;
      if (type === "Both") {
        updatedType = "";
      } else {
        updatedType = type;
      }
      const response = await fetchData(name, updatedType, page);
      dispatch(setData({ data: response?.data?.Search }));
      dispatch(setPage({ page: page }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <div className="home-sc1">
        <SearchBar />
      </div>
      <div className="home-sc2">{cards && <DisplayCards cards={cards} />}</div>
      <div className="home-sc3">
        {cards && (
          <Pagination
            count={Math.round(Number(totalResults / 10))}
            color="primary"
            page={page}
            onChange={(e, p) => handleChange(p)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
