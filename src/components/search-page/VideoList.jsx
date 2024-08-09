import Grid from "@mui/material/Grid";
import VideoListCard from "./VideoListCard";

const VideoList = ({ videoList }) => {
  return (
    <Grid container justifyContent="center">
      {videoList.map((item, index) => (
        <VideoListCard
          key={index}
          video={item.snippet}
          videoId={item.id.videoId}
        />
      ))}
    </Grid>
  );
};

export default VideoList;
