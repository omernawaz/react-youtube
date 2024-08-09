import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Fab from "@mui/material/Fab";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

const VideoInteraction = ({ videoSnippet }) => {
  const avatarUrl = videoSnippet.thumbnails.default.url;
  const channelTitle = videoSnippet.channelTitle;
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Avatar alt="Remy Sharp" src={avatarUrl} />
      <Stack direction="column">
        <Typography>{channelTitle}</Typography>
        <Typography variant="small" color="text.secondary">
          513k Subscribers
        </Typography>
      </Stack>
      <Fab variant="extended" sx={{ ml: 3 }}>
        Subscribe
      </Fab>
      <ButtonGroup
        disableElevation
        variant="outlined"
        aria-label="Disabled button group"
        sx={{}}
      >
        <Button sx={{ color: "#fff", borderRadius: 4 }}>
          <ThumbUpAltIcon />
        </Button>
        <Button sx={{ color: "#fff", borderRadius: 4 }}>
          <ThumbDownAltIcon />
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default VideoInteraction;
