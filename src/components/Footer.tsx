import { Box, Typography, Link, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#333",
  color: "#fff",
  padding: theme.spacing(4, 2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  margin: theme.spacing(0.5, 0),
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  "&:focus": {
    outline: "2px solid blue", // Blue outline when focused
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <FooterLink href="https://www.linkedin.com/in/diciocchis/">
              About Us{" "}
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/diciocchis/">
              Contact Us{" "}
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/diciocchis/">
              Privacy Policy{" "}
            </FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <FooterLink href="https://github.com/fildicio">Github </FooterLink>
            <FooterLink href="https://github.com/fildicio">
              Mobile Development{" "}
            </FooterLink>
            <FooterLink href="https://github.com/fildicio">
              Marketing{" "}
            </FooterLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <FooterLink href="https://www.linkedin.com/in/diciocchis/">
              Facebook{" "}
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/diciocchis/">
              Linkedin{" "}
            </FooterLink>
            <FooterLink href="https://www.instagram.com/filippodeciocchis?igsh=dTZuOHIwZ2IzbWpq&utm_source=qr">
              Instagram{" "}
            </FooterLink>
          </Grid>
        </Grid>
        <Box textAlign="center" marginTop={2}>
          <Typography variant="body2">
            &copy; 2024 Filippo di Ciocchis LTD. All rights reserved
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
