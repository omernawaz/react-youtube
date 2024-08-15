import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

const NavbarLogo = () => {
  return (
    <Box>
      <Stack direction="row" gap={1}>
        <Link to="/">
          <img src="../../src/assets/react.svg" />
        </Link>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          ROUTUBE
        </Typography>
      </Stack>
    </Box>
  );
};

export default NavbarLogo;
