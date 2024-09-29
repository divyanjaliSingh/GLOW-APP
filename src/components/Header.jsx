import { Box, Button, styled, Typography } from "@mui/material";
import React from 'react';
import { Link } from 'react-router-dom';
// img
import headerImg from '../assets/pexels-binyamin-mellish-186078.png';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(0),
        paddingTop: theme.spacing(10),
        backgroundColor: '#A594F9',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(25),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        width: '150px', // Set a fixed width
        px: 2,
        py: 1,
        fontSize: '1rem',
        textTransform: 'capitalize',
        borderRadius: '8px', // Sharp edges
        color: '#fff',
        backgroundColor: '#6C63FF',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        "&:hover": {
            backgroundColor: '#5a54e2',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
        },
    }));

    const ExploreButton = styled(Button)(({ theme }) => ({
        width: '150px', // Set a fixed width to match
        px: 2,
        py: 1,
        fontSize: '1rem',
        textTransform: 'capitalize',
        borderRadius: '8px', // Sharp edges
        color: '#F5EFFF',
        backgroundColor: 'transparent',
        border: '2px solid #F5EFFF',
        transition: 'all 0.3s ease',
        marginLeft: theme.spacing(2), // Space between buttons
        "&:hover": {
            backgroundColor: '#6C63FF',
            color: '#fff',
        },
    }));

    return (
        <CustomBox component='header'>
            {/* Box text */}
            <BoxText component='section'>
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 1000,
                        color: '#F5EFFF',
                    }}
                >
                    Craft the life you’ve always envisioned!
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#F5EFFF',
                    }}
                >
                    "Transform your habits today for a brighter tomorrow!"
                </Typography>

                <Box>
                    <StyledButton
                        component={Link}
                        to='/login'
                    >
                        Get Started
                    </StyledButton>
                    <ExploreButton
                        component={Link}
                        to='/about'
                    >
                        Explore
                    </ExploreButton>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}>
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "100%",
                        marginBottom: -15,
                    }}
                />
            </Box>
        </CustomBox>
    );
};

export default Header;



