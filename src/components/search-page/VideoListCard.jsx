import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const VideoListCard = ({ video, videoId }) => {
  const thumbnail = video.thumbnails.medium;

  return (
    <Box sx={{ width: thumbnail.width, marginRight: 0.5, my: 5 }}>
      <Link to={"/view/" + videoId}>
        <img
          style={{ width: thumbnail.width, height: thumbnail.height }}
          alt={video.title}
          src={thumbnail.url}
        />
      </Link>

      <Box sx={{ pr: 2 }}>
        <Link to={"/view/" + videoId}>
          <Typography gutterBottom variant="body2" color="text.primary">
            {video.title}
          </Typography>
        </Link>
        <Typography display="block" variant="caption" color="text.secondary">
          {video.channelTitle}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {`300K Views • ${video.publishedAt}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoListCard;
