import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material';
import React from 'react';
import Title from './Title';
// img
import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    });

    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    });

    return (
        <>
            {/* Section 1 with light background */}
            <Box sx={{ backgroundColor: '#f9f9f9', py: 10 }}>  {/* light grey background */}
                <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
                    sx={{
                        px: 2,
                    }}
                >
                    {/* Centered "How Habits Work" Section */}
                    <CustomGridItem item xs={12} sm={12} md={12} 
                        component='section'
                        sx={{
                            mb: 6,
                            textAlign: 'center', 
                        }}
                    >
                        <Box component='article' sx={{ px: 4, maxWidth: '800px', mx: 'auto' }}>
                            <Title text={'How Habits Works?'} textAlign={'center'} />
                            <CustomTypography>
                                Habits are formed through a consistent loop of triggers, actions, and rewards.
                                By understanding this process, we can consciously build better habits or break old ones.
                                The process begins with a cue, which leads to a craving, followed by a response, and ends with a reward.
                                This loop reinforces behavior over time, making it a habit.
                            </CustomTypography>
                        </Box>
                    </CustomGridItem>
                </Grid>
            </Box>

            {/* Section 2 with white background */}
            <Box sx={{ backgroundColor: '#ffffff', py: 10 }}>  {/* white background */}
                <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}>
                    {/* "The Habit Loop" Section */}
                    <CustomGridItem item xs={12} sm={8} md={6} component='section'>
                        <Box component='article' sx={{ px: 4 }}>
                            <Title text={'The Habit Loop'} textAlign={'start'} />
                            <CustomTypography>
                                Each phase of the habit loop is important for building new habits, but today I’d like to discuss the first factor: habit cues (or triggers).
                                There are five primary ways that a new habit can be triggered. If you understand each of them, then you can select the right one for the particular habit that you are working on.
                            </CustomTypography> 
                        </Box>
                    </CustomGridItem>

                    <Grid item xs={12} sm={4} md={6}>
                        <img src={imgDetail} alt="Habit Image 1" style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>

            {/* Section 3 with light grey background */}
            <Box sx={{ backgroundColor: '#f9f9f9', py: 10 }}>  {/* light grey background */}
                <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}>
                    <Grid item xs={12} sm={4} md={6}
                        sx={{ order: { xs: 4, sm: 4, md: 3 } }}
                    >
                        <img src={imgDetail2} alt="Habit Image 2" style={{ width: "100%" }} />
                    </Grid>

                    <CustomGridItem item xs={12} sm={8} md={6}
                        sx={{ order: { xs: 3, sm: 3, md: 4 } }}
                    >
                        <Box component='article' sx={{ px: 4 }}>
                            <Title text={'The Plateau of Latent Potential'} textAlign={'start'} />
                            <CustomTypography>
                                The Plateau of Latent Potential describes the initial phase where efforts don’t show immediate results, but consistent work eventually leads to significant breakthroughs.
                            </CustomTypography>
                        </Box>
                    </CustomGridItem>
                </Grid>
            </Box>
        </>
    );
};

export default GetStarted;

