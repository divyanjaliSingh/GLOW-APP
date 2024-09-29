import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Button,
    Paper,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Gallery = () => {
    const [habit, setHabit] = useState('');
    const [habits, setHabits] = useState(['Drink water', 'Exercise for 30 minutes', 'Read 10 pages of a book']);
    const [currentDay] = useState(new Date().getDate());

    const handleInputChange = (e) => {
        setHabit(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (habit) {
            setHabits([...habits, habit]);
            setHabit('');
        }
    };

    const handleDelete = (index) => {
        const updatedHabits = habits.filter((_, i) => i !== index);
        setHabits(updatedHabits);
    };

    // Calendar section - 30 days for September
    const totalDays = 30;

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                py: 8,
                px: 2,
                display: { xs: 'flex' },
            }}
        >
            {/* Habit Tracker Header */}
            <Box sx={{ width: '100%', textAlign: 'center', paddingBottom: 2 }}>
                <Typography variant="h4" gutterBottom>
                    GLOW
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    September 2024
                </Typography>
            </Box>

            {/* Calendar Section */}
            <Box sx={{ textAlign: 'center', marginBottom: '2rem', width: '100%' }}>
                <Stack direction="row" justifyContent="center" spacing={1} sx={{ flexWrap: 'wrap' }}>
                    {Array.from({ length: totalDays }, (_, i) => (
                        <Paper
                            key={i}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 0.5,
                                backgroundColor: currentDay === i + 1 ? '#000' : '#f5f5f5',
                                color: currentDay === i + 1 ? '#fff' : '#000',
                            }}
                        >
                            {i + 1}
                        </Paper>
                    ))}
                </Stack>
            </Box>

            {/* Add Habit Form */}
            <form onSubmit={handleSubmit} style={{ marginTop: '2rem', width: '100%' }}>
                <TextField
                    label="Create a new habit"
                    variant="outlined"
                    fullWidth
                    value={habit}
                    onChange={handleInputChange}
                    sx={{ marginBottom: '1rem' }}
                />
                <Button type="submit" variant="contained" fullWidth>
                    + New Habit
                </Button>
            </form>

            {/* Habit List */}
            <List sx={{ width: '100%', marginTop: '2rem' }}>
                {habits.map((habit, index) => (
                    <ListItem key={index} divider>
                        <ListItemText primary={habit} />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
};

export default Gallery;
