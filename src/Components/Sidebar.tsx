import { Add, Home, Notes, People, Person, Storefront } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { StyledModal } from "./AddPost";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

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
                        <Button onClick={() => setOpen(true)} variant="contained">
                            <ListItemIcon>
                                <Add sx={{ color: "white" }} fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary="Add Post" />
                        </Button>
                        <StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                            <Box width={800} height={280} bgcolor={"white"} p={3} borderRadius={5} textAlign="center">
                                <Typography variant="h6" color={"gray"}>
                                    Create Post
                                </Typography>
                                <TextField sx={{ width: "100%", color: "black" }} id="standard-multiline-static" label="What's on your Mind" multiline rows={4} variant="standard" />
                            </Box>
                        </StyledModal>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
