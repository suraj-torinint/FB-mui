import { Add, Home, Notes, People, Person, Storefront } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const Sidebar = () => {
    return (
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" }, paddingLeft: "20px" }}>
            <Box position={"fixed"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/">
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Notes />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary="Market Place" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained">
                            <ListItemIcon>
                                <Add sx={{ color: "white" }} fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary="Add Post" />
                        </Button>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
