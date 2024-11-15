import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";

const Result = () => {
  const { keyword } = useParams();

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Keyword Entered:
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {keyword}
        </Typography>
      </Box>
    </Container>
  );
};

export default Result;
