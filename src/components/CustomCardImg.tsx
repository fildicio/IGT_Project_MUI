import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveButton from "./ResponsiveButton";

function CustomCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        backgroundColor: "#F6E6CB",
        borderRadius: 2,
        height: "100%",
        width: isSmallScreen ? "90%" : "90%",
        margin: "auto", // Center the card horizontally
      }}
    >
      <Typography variant="h5" sx={{ padding: 2, textAlign: "center" }}>
        Lorem Ipsum
      </Typography>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/id/1/200/300"
        alt="Computer image"
        sx={{ marginX: "auto" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }} disableSpacing>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "#333",
            },
            "&:focus": {
              borderColor: "blue",
              outline: "2px solid blue",
            },
          }}
        >
          Lorem Ipsum
        </Button>
      </CardActions>
    </Card>
  );
}

export default function CustomCardGrid() {
  return (
    <Grid container spacing={3} justifyContent="center">
      {[...Array(4)].map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={3}>
          <CustomCard />
        </Grid>
      ))}
      <ResponsiveButton />
    </Grid>
  );
}
