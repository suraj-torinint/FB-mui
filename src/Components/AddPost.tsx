import { Add } from "@mui/icons-material";
import { Tooltip, Fab } from "@mui/material";
import { Box } from "@mui/system";

const AddPost = () => {
    return (
        <Box sx={{ display: { xs: "block", sm: "none" }, paddingLeft: "20px", left: { xs: "calc(50% - 45px)" } }} position="fixed" bottom={30}>
            <Tooltip title="Add a Post">
                <Fab color="primary" aria-label="add">
                    <Add />
                </Fab>
            </Tooltip>
        </Box>
    );
};

export default AddPost;
