import { Stack, Typography, Button, Collapse } from "@mui/material";
import { getReadableDataString } from "../../../utils";
import { useState } from "react";
const VideoDescription = ({ videoSnippet }) => {
  const [showMore, setShowMore] = useState(false);

  const description = videoSnippet.description;
  const date = getReadableDataString(videoSnippet.publishedAt);
  let tags = [];
  if (videoSnippet?.tags) {
    tags = [...videoSnippet.tags];
    tags.splice(5, tags.length - 6);
  }

  return (
    <Stack direction="column">
      <Stack direction="row" gap={1} flexWrap={"wrap"}>
        <Typography>
          <b>321k views</b>
        </Typography>
        <Typography>
          <b>{date}</b>
        </Typography>
        {tags.map((item, index) => (
          <Typography key={index} color="primary">
            {"#" + item}
          </Typography>
        ))}
      </Stack>
      <Collapse in={showMore} collapsedSize={40}>
        <Typography>{description}</Typography>
      </Collapse>
      <Button variant="text" onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? "Show Less" : "Show More"}
      </Button>
    </Stack>
  );
};

export default VideoDescription;
