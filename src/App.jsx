import "./App.css";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Grid from "@mui/material/Grid";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/details/*",
      element: <Details />,
    },
  ]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <RouterProvider router={appRouter} />
      </Grid>
    </Grid>
  );
}

export default App;
