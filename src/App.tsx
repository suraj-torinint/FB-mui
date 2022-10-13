import { Box, Stack } from "@mui/material";
import Feeds from "./Components/Feeds";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <Box>
            <Navbar />
            <Stack direction={"row"} spacing={2} justifyContent="space-between" >
                <Sidebar />
                <Feeds />
                <Rightbar />
            </Stack>
        </Box>
    );
}

export default App;
