import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVidoes] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {

        console.log('searched', data.items) 
        // console.log('s',selectedCategory)
        // console.log('v',videos)
        setVidoes(data.items);
    })
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results For  <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos} show />
      </Box>
  );
};

export default SearchFeed;
