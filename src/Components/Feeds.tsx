import { Box } from "@mui/material";
import AddPost from "./AddPost";
import Posts from "./Posts";

const Feeds = () => {
    return (
        <Box flex={4}>
            <Posts />
            <AddPost/>
        </Box>
    );
};

export default Feeds;
