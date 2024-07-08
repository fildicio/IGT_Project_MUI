import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";

function CustomText() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (isSmallScreen) {
    return null;
  }

  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "left",
        paddingLeft: "10%",
        paddingBottom: "3%",
      }}
    >
      Lorem Ipsum Lorem Ipsum
    </Typography>
  );
}

export default CustomText;
