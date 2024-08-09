import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container justifyContent={"center"}>
      <Card sx={{ minWidth: 275, mt: 5, borderRadius: 3, p: 3 }}>
        <CardContent>
          <Typography variant="h6">
            Try searching something to get started!
          </Typography>
          <Typography variant="body1">
            Help us build a feed of videos you will love.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
