import { useGetSearchResultsQuery } from "../services/youtubeApi";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

import VideoList from "../components/search-page/VideoList";
import VideoListSkeleton from "../components/search-page/VideoListSkeleton";
import { useParams } from "react-router-dom";

const Search = () => {
  const { searchString } = useParams();
  const { data, error, isFetching, isError } =
    useGetSearchResultsQuery(searchString);

  return (
    <Container justifyContent={"center"}>
      {isError && (
        <Alert severity="error">{`${error.data.error.code}: ${error.data.error.message}`}</Alert>
      )}

      {(isFetching || isError) && <VideoListSkeleton itemsLength={21} />}
      {data && !isError && !isFetching && <VideoList videoList={data.items} />}
    </Container>
  );
};

export default Search;
