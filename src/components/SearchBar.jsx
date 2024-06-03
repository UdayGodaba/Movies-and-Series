import { Button, MenuItem, Select } from "@mui/material";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setName, setData, setType } from "../utils/searchSlice";

const SearchBar = () => {
  const { name, type, page } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      let type2 = type;
      if (type === "Both") {
        type2 = "";
      } else {
        type2 = type;
      }
      const response = await axios.get(
        API_URL + `&s=${name}&type=${type2}&page=${page}`
      );
      dispatch(setData({ data: response?.data?.Search }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search">
      <div className="search-sc1">
        <input
          autoComplete="off"
          placeholder="Search for Movies or TV shows...."
          onChange={(e) => {
            dispatch(setName({ name: e.target.value }));
          }}
        />
      </div>

      <div className="search-sc2">
        <Select
          value={type}
          onChange={(e) => {
            dispatch(setType({ type: e.target.value }));
          }}
          sx={{ backgroundColor: "white", borderRadius: "15px", marginRight: "15px" }}
        >
          <MenuItem value={"Both"}>Both</MenuItem>
          <MenuItem value={"movie"}>Movie</MenuItem>
          <MenuItem value={"series"}>Series</MenuItem>
        </Select>
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
    </div>
  );
};

export default SearchBar;
