import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const NewsletterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#B6C7AA",
  padding: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  flex: 1,
  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, 2),
  },
}));

const InputsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
  },
}));

const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  marginTop: theme.spacing(2),
  width: "auto",
  alignSelf: "center",
  [theme.breakpoints.up("md")]: {
    alignSelf: "flex-start",
    width: "150px",
  },
  "&:hover": {
    backgroundColor: "#333",
  },
  "&:focus": {
    outline: "2px solid blue", // Blue outline when focused
  },
}));

const Newsletter: React.FC = () => {
  return (
    <NewsletterContainer>
      <Typography
        variant="h6"
        component="p"
        sx={{ marginBottom: { xs: 2, md: 0 } }}
      >
        Subscribe to our newsletter
      </Typography>
      <InputsContainer>
        <NewsletterInput variant="outlined" label="Name" fullWidth />
        <NewsletterInput variant="outlined" label="Email Address" fullWidth />
        <BlackButton variant="contained">LOREM IPSUM</BlackButton>
      </InputsContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;

export {};
