import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/result/${keyword}`);
    }
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          Enter a Keyword
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Keyword"
            variant="outlined"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            sx={{ marginBottom: 2, width: "300px" }}
          />
          <br />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Home;
