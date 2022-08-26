import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const textStyling = {
  mt: "4rem",
  ml: "6rem",
  fontWeight: "regular",
};

const cardContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  height: "500",
  mt: "4rem",
};

const cardStyling = {
  minWidth: 200,
  minHeight: 200,
  m: "2rem",
};

function About() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EDE6E3",
      }}
      maxWidth=""
    >
      <Box
        sx={{
          m: "5rem",
          justifyContent: "center",
          borderRadius: "8px",
          width: 1200,
          height: 800,
          backgroundColor: "#F9F7F7",
          flexShrink: 4,
        }}
      >
        <Typography sx={textStyling} variant="h4">
          About us
        </Typography>
        <Typography
          sx={{ ml: "6rem", mt: "2.5rem", fontWeight: "medium" }}
          variant="h6"
        >
          Creative team core with a strong connection in the industry
        </Typography>
        <Typography
          sx={{ mt: "0.5rem", ml: "6rem", mr: "6rem", flexShrink: "1" }}
        >
          We work simply and without prestige with full focus on delivering
          solutions that have an effect. We know that in today's world our
          clients need flexibile solutions. That is why our team always works
          agile according to the scrum method. Our team have broad knowledge and
          specialties in web development. Our main goal is to always deilver a
          product that is tailored to our clients needs and desire.
        </Typography>
        <Box sx={cardContainer}>
          <Card sx={cardStyling}>
            <CardContent>Bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
          <Card sx={cardStyling}>
            <CardContent>bild</CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
