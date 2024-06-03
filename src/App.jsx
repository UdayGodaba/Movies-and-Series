import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid container>
      <BrowserRouter>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Grid>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
