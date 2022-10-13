import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return (
        <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position={"fixed"} width={350}>
                <Typography variant="h6" paddingY={2} fontWeight={100}>
                    Online Friends
                </Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                    <Avatar alt="someOne" src=""></Avatar>
                </AvatarGroup>
                <Typography variant="h6" paddingY={2} fontWeight={100}>
                    Latest Photos
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://www.bing.com/th?id=OHR.RioArazas_EN-IN1562638083_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&qlt=50" alt="someImage" />
                    </ImageListItem>
                </ImageList>
            </Box>
        </Box>
    );
};

export default Rightbar;
