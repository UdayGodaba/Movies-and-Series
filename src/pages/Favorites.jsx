/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import DisplayCards from "../components/DisplayCards";
import { MenuItem, Select } from "@mui/material";
import { genres, ratings } from "../utils/constants";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { data } = useSelector((state) => state.favorite);
  const [genre, setGenre] = useState("Any");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [favData, setFavData] = useState(data);

  useEffect(() => {
    let updatedData;
    updatedData = data
      .filter((elem) => elem?.imdbRating >= rating)
      .filter((elem) => {
        if (genre === "Any") {
          return elem;
        } else {
          return elem?.Genre.toLowerCase().includes(genre.toLowerCase());
        }
      })
      .filter((elem) => {
        if (title === "") {
          return elem;
        } else {
          return elem?.Title.toLowerCase().includes(title.toLowerCase());
        }
      });
    setFavData(updatedData);
  }, [title, rating, genre]);

  return (
    <div className="fav">
      <div className="fav-sc1">
        <input
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
        />

        <Select
          value={genre}
          sx={{
            backgroundColor: "orange",
            borderRadius: "15px",
            margin: "5px",
            height: "45px",
            width: "130px",
          }}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((elem, idx) => (
            <MenuItem value={elem} key={idx}>
              {elem}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={rating}
          sx={{
            backgroundColor: "orange",
            borderRadius: "15px",
            margin: "5px",
            height: "45px",
            width: "70px",
          }}
          onChange={(e) => setRating(e.target.value)}
        >
          {ratings.map((elem, idx) => (
            <MenuItem value={elem} key={idx}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className="fav-sc2">
        <DisplayCards cards={favData} />
      </div>
    </div>
  );
};

export default Favorites;
