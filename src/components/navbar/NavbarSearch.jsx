import { Fab, TextField, Stack, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavbarSearch = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchString === "") {
      navigate("/");
    } else {
      navigate("/search/" + searchString);
    }
  };
  return (
    <Box
      component="form"
      sx={{ width: "50%", height: "20%" }}
      onSubmit={handleSubmit}
    >
      <Stack direction="row" gap={2}>
        <TextField
          id="outlined-size-small"
          label="Search"
          size="small"
          variant="outlined"
          sx={{ flexGrow: 1 }}
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Fab color="primary" aria-label="add" size="small" type="submit">
          <SearchIcon />
        </Fab>
      </Stack>
    </Box>
  );
};

export default NavbarSearch;
