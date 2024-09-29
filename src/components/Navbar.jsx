import {
    AppBar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    styled,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItem';

// Customization
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

// Routes
const itemList = [
    {
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];

const Navbar = () => {
    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: '#A594F9', 
            }}
            elevation={0}
        >
            <StyledToolbar>
                <ListItemButton component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        variant="h5"
                        component="span"
                        sx={{
                            color: '#fff',
                            textShadow: '0 0 5px rgba(200, 150, 255, 0.8), 0 0 10px rgba(200, 150, 255, 0.6), 0 0 15px rgba(200, 150, 255, 0.4)',
                        }}
                    >
                        GLOW ✶
                    </Typography>
                </ListItemButton>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map((item) => {
                        const { text } = item;
                        return (
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                    sx={{
                                        color: '#fff',
                                        "&:hover": {
                                            backgroundColor: 'transparent',
                                            color: '#1e2a5a',
                                        }
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    );
};

export default Navbar;
