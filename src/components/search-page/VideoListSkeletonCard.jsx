import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const VideoListSkeletonCard = () => {
  return (
    <Box sx={{ width: 320, marginRight: 0.5, my: 5 }}>
      <Skeleton variant="rectangular" width={320} height={180} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
};

export default VideoListSkeletonCard;
