import { useState, useEffect } from "react";
import { useGetSearchResultsQuery } from "../services/youtubeApi";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import { CardContent, TextField, Typography } from "@mui/material";

import VideoList from "../components/search-page/VideoList";
import VideoListSkeleton from "../components/search-page/VideoListSkeleton";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [executeSearch, setExecuteSearch] = useState(false);

  const { data, error, isFetching, isError } = useGetSearchResultsQuery(
    searchString,
    {
      skip: !executeSearch,
    }
  );

  useEffect(() => {
    setExecuteSearch(false);
  }, [data]);

  console.log(data, executeSearch, error);

  return (
    <Container justifyContent={"center"}>
      {isError && (
        <Alert severity="error">{`${error.data.error.code}: ${error.data.error.message}`}</Alert>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setExecuteSearch(true);
        }}
      >
        <Stack spacing={3} direction={"row"} justifyContent={"center"}>
          <Stack
            spacing={1}
            direction="row"
            alignItems={"center"}
            as="a"
            href="./"
          >
            <img src="./src/assets/react.svg" />
            <Typography variant="h5">ReactTube</Typography>
          </Stack>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ flexGrow: 1 }}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <Button variant="contained" type={"submit"}>
            Search
          </Button>
        </Stack>
      </form>
      {(isFetching || isError) && <VideoListSkeleton itemsLength={21} />}
      {data && !isError && !isFetching ? (
        <VideoList videoList={data.items} />
      ) : (
        <Card sx={{ minWidth: 275, mt: 5 }}>
          <CardContent>
            <Typography>Search Something To Get Started...</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Search;
