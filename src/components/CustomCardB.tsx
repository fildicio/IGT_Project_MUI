import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme, useMediaQuery } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    &bull;
  </Box>
);

const CustomCardB: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={isSmallScreen ? 1 : 2}
      justifyContent="center"
      style={{ marginTop: "1%", marginBottom: "1%" }}
    >
      <Grid
        item
        xs={12}
        md={5}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            minWidth: "90%",
            maxWidth: "45%",
            marginTop: isSmallScreen ? "15px" : "5%",
            marginBottom: isSmallScreen ? "20px" : "5%",
            bgcolor: "#F6E6CB",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
            <Typography variant="h5" component="div">
              Lorem{bull}Ipsum{bull}Dolor{bull}Sit
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Placeholder Text
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              {'"Lorem ipsum dolor sit amet"'}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "black",
                },
                "&:focus": {
                  bgcolor: "black",
                  outline: "2px solid blue",
                },
                "&:active": {
                  bgcolor: "black",
                },
              }}
            >
              LOREM IPSUM
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            minWidth: "90%",
            maxWidth: "40%",
            marginTop: isSmallScreen ? "0px" : "5%",
            marginBottom: isSmallScreen ? "20px" : "5%",
            bgcolor: "#F6E6CB",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Lorem Ipsum
            </Typography>
            <Typography variant="h5" component="div">
              Lorem{bull}Ipsum{bull}Dolor{bull}Sit
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Placeholder Text
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              {'"Lorem ipsum dolor sit amet"'}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                color: "white",
                "&:hover": {
                  bgcolor: "black",
                },
                "&:focus": {
                  bgcolor: "black",
                  outline: "2px solid blue",
                },
                "&:active": {
                  bgcolor: "black",
                },
              }}
            >
              LOREM IPSUM
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CustomCardB;
