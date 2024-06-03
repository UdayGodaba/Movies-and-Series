import { Button, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setData,
  setType,
  setTotalResults,
  setPage,
} from "../utils/searchSlice";
import { fetchData } from "../utils/api";

const SearchBar = () => {
  const { name, type } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleClick = async (page = 1) => {
    try {
      let updatedType;
      if (type === "Both") {
        updatedType = "";
      } else {
        updatedType = type;
      }
      const response = await fetchData(name, updatedType, page);
      dispatch(setData({ data: response?.data?.Search }));
      dispatch(setTotalResults({ totalResults: response?.data?.totalResults }));
      dispatch(setPage({ page: 1 }));
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
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            marginRight: "15px",
          }}
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
