import { Fab, TextField, Stack, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const NavbarSearch = () => {
  const [searchString, setSearchString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.replace("./search/" + searchString);
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
