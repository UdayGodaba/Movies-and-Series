import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="absolute" sx={{backgroundColor: "black", opacity: "0.4"}}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Movies and Series
          </Typography>
          <Button color="inherit" style={{fontSize: "medium"}} onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" style={{fontSize: "medium"}} onClick={() => navigate("/favorites")}>Favorites</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
