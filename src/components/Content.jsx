import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';

const ReminderApp = () => {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState([]);

  const handleAddHabit = () => {
    if (habit.trim()) {
      const currentDate = new Date().toISOString(); // Automatically get the current date and time
      setHabits((prevHabits) => [
        ...prevHabits,
        { text: habit, date: currentDate, completed: false },
      ]);
      resetInputs();
    }
  };

  const resetInputs = () => {
    setHabit('');
  };

  const handleToggleHabit = (index) => {
    setHabits((prevHabits) =>
      prevHabits.map((h, i) => (i === index ? { ...h, completed: !h.completed } : h))
    );
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: '#F5F5F7',
        borderRadius: '12px',
        boxShadow: 3,
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <Typography variant="h4" align="center" sx={{ fontWeight: 600, color: '#333', mb: 3 }}>
        Habit Reminders
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="New Habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          sx={{ borderRadius: '8px' }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={handleAddHabit}
        sx={{
          width: '100%',
          mb: 2,
          backgroundColor: '#007AFF',
          '&:hover': { backgroundColor: '#005BB5' },
        }}
      >
        Add Reminder
      </Button>
      <List sx={{ bgcolor: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
        {habits.map((habit, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => handleToggleHabit(index)}>
              <ListItemIcon>
                <Checkbox
                  checked={habit.completed}
                  sx={{ color: '#007AFF', '&.Mui-checked': { color: '#007AFF' } }}
                />
              </ListItemIcon>
              <ListItemText
                primary={habit.text}
                secondary={`Reminder: ${new Date(habit.date).toLocaleString()}`}
                sx={{
                  textDecoration: habit.completed ? 'line-through' : 'none',
                  color: habit.completed ? '#A9A9A9' : '#333',
                }}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ReminderApp;
