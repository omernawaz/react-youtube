import Grid from "@mui/material/Grid";
import VideoListSkeletonCard from "./VideoListSkeletonCard";
import { arrayRange } from "../../utils";

const VideoListSkeleton = ({ itemsLength }) => {
  const elementKeys = arrayRange(1, itemsLength, 1);

  return (
    <Grid container justifyContent="center">
      {elementKeys.map((item) => (
        <VideoListSkeletonCard key={item} />
      ))}
    </Grid>
  );
};

export default VideoListSkeleton;
