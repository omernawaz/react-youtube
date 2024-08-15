import { useParams } from "react-router-dom";

import VideoListSkeleton from "../components/search-page/VideoListSkeleton";
import { useGetRelatedQuery, useGetVideoQuery } from "../services/youtubeApi";

import { Stack } from "@mui/material";

import { useState, useEffect } from "react";
import VideoView from "../components/view-video/VideoView";
import VideoViewSkeleton from "../components/view-video/VideoViewSkeleton";
import VideoList from "../components/search-page/VideoList";

const View = () => {
  const { videoId } = useParams();
  const [fetchSuggestions, setFetchSuggestions] = useState({
    shouldFetch: false,
    fetchArg: null,
  });

  const {
    data: videoData,
    isFetching: isVideoDataLoading,
    isError: isVideoError,
  } = useGetVideoQuery(videoId);

  const { data: suggestionsData, isFetching: isSuggestionsDataLoading } =
    useGetRelatedQuery(fetchSuggestions.fetchArg, {
      skip: !fetchSuggestions.shouldFetch,
    });

  useEffect(() => {
    if (!isVideoDataLoading && !isVideoError && videoData) {
      setFetchSuggestions({
        shouldFetch: true,
        fetchArg: videoData.items[0].snippet.categoryId,
      });
    }
  }, [isVideoDataLoading, isVideoError, videoData]);

  return (
    <div>
      <Stack sx={{ m: 5 }} direction="row">
        {!isVideoDataLoading && videoData && !isVideoError ? (
          <VideoView videoData={videoData.items[0]} />
        ) : (
          <VideoViewSkeleton />
        )}

        <Stack direction="column">
          {!isSuggestionsDataLoading && suggestionsData ? (
            <VideoList videoList={suggestionsData.items} />
          ) : (
            <VideoListSkeleton itemsLength={3} />
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default View;
