import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SlotCounter from "react-slot-counter";

export const CustomNavbar = () => {
  const [randomNumber, setRandomNumber] = useState<string>("00000");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");
      setRandomNumber(number);
    };

    generateRandomNumber();
    const intervalId = setInterval(generateRandomNumber, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar
        sx={{
          flexDirection: { xs: "row", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            flexGrow: 1,
            justifyContent: { xs: "flex-start", sm: "flex-start" },
          }}
        >
          <IconButton
            size="large"
            sx={{
              color: "black",
              outline: focused ? "2px solid blue" : "none", // Blue outline when focused
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <SlotCounter
              value={randomNumber}
              duration={2}
              dummyCharacterCount={5}
              autoAnimationStart={true}
              charClassName="slot-char"
              containerClassName="slot-container"
              direction="bottom-up"
            />
          </IconButton>
          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              marginLeft: 2,
              color: "black",
            }}
          >
            Lottery
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={{ xs: "flex-end", sm: "flex-end" }}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#0C1844",
              borderColor: "black",
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: "black",
              },
              "&:focus": {
                backgroundColor: "transparent",
                borderColor: "black",
                outline: "2px solid blue", // Blue outline when focused
              },
              "&:active": {
                backgroundColor: "transparent",
                borderColor: "black",
              },
            }}
          >
            LOREM IPSUM
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
              "&:focus": {
                backgroundColor: "black",
                outline: "2px solid blue", // Blue outline when focused
              },
              "&:active": {
                backgroundColor: "black",
              },
            }}
          >
            LOREM IPSUM
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
              },
              "&:focus": {
                backgroundColor: "black",
                outline: "2px solid blue", // Blue outline when focused
              },
              "&:active": {
                backgroundColor: "black",
              },
            }}
          >
            LOREM IPSUM
          </Button>
        </Stack>
        <IconButton
          size="large"
          sx={{ display: { xs: "flex", sm: "none" }, color: "black" }}
          onClick={handleMenuOpen}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            role: "menu",
            "aria-hidden": false,
          }}
        >
          <MenuItem onClick={handleMenuClose}>LOREM IPSUM</MenuItem>
          <MenuItem onClick={handleMenuClose}>LOREM IPSUM</MenuItem>
          <MenuItem onClick={handleMenuClose}>LOREM IPSUM</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
