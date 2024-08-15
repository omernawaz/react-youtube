import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import NavbarLogo from "../components/navbar/NavbarLogo";
import NavbarSearch from "../components/navbar/NavbarSearch";
import { Outlet } from "react-router";

export default function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <NavbarLogo />
            <Box sx={{ flexGrow: 1 }} />
            <NavbarSearch />
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit">Sign In</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
