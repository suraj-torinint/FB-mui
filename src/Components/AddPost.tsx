import { Add } from "@mui/icons-material";
import { Tooltip, Fab, Modal, styled, Typography, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const AddPost = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{ display: { xs: "block", sm: "none" }, paddingLeft: "20px", left: { xs: "calc(50% - 45px)" } }} position="fixed" bottom={30}>
            <Tooltip title="Add a Post" onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>

            <StyledModal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box width={800} height={280} bgcolor={"white"} p={3} borderRadius={5} textAlign="center">
                    <Typography variant="h6" color={"gray"}>
                        Create Post
                    </Typography>
                    <TextField sx={{ width: "100%", color:"black" }} id="standard-multiline-static" label="What's on your Mind" multiline rows={4} variant="standard" />
                </Box>
            </StyledModal>
        </Box>
    );
};

export default AddPost;
