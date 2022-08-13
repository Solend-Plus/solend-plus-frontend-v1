import { Box, Typography } from "@mui/material";

interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{ minHeight: "5rem", background: "black", mt: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5rem",
        }}
      >
        <Typography textAlign="center" color="white" sx={{ display: "block" }}>
          I&rsquo;m going to be a footer!
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
