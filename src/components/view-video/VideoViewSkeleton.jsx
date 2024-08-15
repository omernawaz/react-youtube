import { Box, Stack, Skeleton } from "@mui/material";
import { PLAYER_WIDTH, PLAYER_HEIGHT } from "../../constants";
const VideoViewSkeleton = () => {
  return (
    <Box>
      <Stack direction="column" spacing={2} sx={{ width: PLAYER_WIDTH }}>
        <Skeleton
          variant="rectangular"
          width={PLAYER_WIDTH}
          height={PLAYER_HEIGHT}
        />
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Stack direction="row" gap={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={150} />
        </Stack>

        <Skeleton
          variant="text"
          sx={{ fontSize: "5rem" }}
          width={PLAYER_WIDTH}
        />
      </Stack>
    </Box>
  );
};

export default VideoViewSkeleton;
