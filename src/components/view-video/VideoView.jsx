import ReactPlayer from "react-player";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import {
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
  YOUTUBE_WATCH_VIDEO,
} from "../../constants";
import VideoInteraction from "./VideoViewComponents/VideoInteraction";
import VideoDescription from "./VideoViewComponents/VideoDescription";
const VideoView = ({ videoData }) => {
  const videoSnippet = videoData.snippet;
  console.log("Snippet", videoSnippet);
  return (
    <Box>
      <Stack direction="column" spacing={2} sx={{ width: PLAYER_WIDTH }}>
        <ReactPlayer
          url={YOUTUBE_WATCH_VIDEO + videoData.id}
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
        />
        <Typography variant="h4">{videoSnippet.title}</Typography>
        <VideoInteraction videoSnippet={videoSnippet} />
        <VideoDescription videoSnippet={videoSnippet} />
      </Stack>
    </Box>
  );
};

export default VideoView;
