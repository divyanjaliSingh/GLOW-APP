import {
    Button,
    Stack,
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Paragraph from './Paragraph'
import Title from './Title'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Access GLOW from anywhere'

                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Effortlessly sync your habits. Track your progress anytime, anywhere'

            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#A594F9',
                "&:hover": {
                    backgroundColor: '#F5EFFF',
                }
            }}
            >
                get in touch
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;