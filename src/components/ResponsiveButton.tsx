import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4535C1",
    },
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "&:focus": {
    borderColor: "blue",
    outline: "2px solid blue",
  },
}));

const ResponsiveButton: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "15vh",
          paddingLeft: isSmallScreen ? "5%" : "0",
          textAlign: "center",
        }}
      >
        <StyledButton variant="contained">Lorem Ipsum</StyledButton>
      </div>
    </ThemeProvider>
  );
};

export default ResponsiveButton;
