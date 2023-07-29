import React from "react";
import { Link } from "react-router-dom";
import { Box,Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoProfilePicture } from "../utils/constants";


const ChannelCard = ({ChannelDetail}) => {
  return (
    <Box sx={{
        // boxShadow:'none',borderRadius:'20px', display:'flex',justifyContent:'center', alignItems:'center', width:{xs:'396px', md:"320px"}, height:'326px', margin:'auto'
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        // marginTop,   
         }}>
        <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', color:'white'}}>
                <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url||demoProfilePicture} alt={ChannelDetail?.snippet?.title} sx={{borderRadius:'50%', height:'180px', width:'180px',mb:2,border:'1px solid #e3e3e3', }} />
                <Typography variant="h6">
                    {ChannelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}} />
                </Typography>

            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard