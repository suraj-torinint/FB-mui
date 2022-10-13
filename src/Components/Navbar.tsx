import { Adb, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Facebook
                </Typography>
                <Adb sx={{ display: { sm: "none", xs: "block" } }} />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color={"error"}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color={"error"}>
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src={""} />
                </Icons>
                <UserBox>
                    <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src={""} />
                </UserBox>
            </StyledToolbar>
            <Menu onClose={() => setOpen(false)} id="demo-positioned-menu" open={open} aria-labelledby="demo-positioned-menu" anchorOrigin={{ vertical: "top", horizontal: "right" }} transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Setting</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
