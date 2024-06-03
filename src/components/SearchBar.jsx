import { Button } from "@mui/material";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setName, setData } from "../utils/searchSlice";

const SearchBar = () => {
  const { name, type, page } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      const response = await axios.get(
        API_URL + `&s=${name}&type=${type}&page=${page}`
      );
      dispatch(setData({data: response?.data?.Search}));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <input
        autoComplete="off"
        placeholder="Search for Movies or TV shows...."
        onChange={(e) => {
          dispatch(setName({ name: e.target.value }));
        }}
      />

      <Button
        variant="contained"
        color="warning"
        style={{
          borderRadius: "15px",
          height: "55px",
        }}
        onClick={() => handleClick()}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
