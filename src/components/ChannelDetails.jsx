import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "../utils/fetchFromApi";
function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  // remain to add subscriber

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order-date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log("channelDetail", channelDetail);
  return (
    <Box minHeight="95vh" sx={{width:'100vw'}} >
      <Box >
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(222,111,142,1) 16%, rgba(111,138,227,1) 48%, rgba(20,107,189,1) 70%, rgba(0,249,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard ChannelDetail={channelDetail} marginTop="-110px" disabled />
      </Box>

      <Box display="flex" p="2" sx={{width:'100vw'}} >
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetails;
