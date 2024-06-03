import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import DisplayCards from "../components/DisplayCards";

const HomePage = () => {
  return (
    <Box
      style={{
        backgroundColor: "#1c4b91",
        height: "92vh",
        paddingTop: "8vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SearchBar />
      <DisplayCards />
    </Box>
  );
};

export default HomePage;
