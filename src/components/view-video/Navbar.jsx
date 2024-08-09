import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src="../../src/assets/react.svg" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            ReactTube
          </Typography>
          
          <Button
            variant="contained"
            color="inherit"
            sx={{ color: "#fff", borderRadius: 4 }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
