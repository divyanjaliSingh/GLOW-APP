import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  Box,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'Ujjain, India.'} 
        />
       
        <FooterLink 
        text={'info@glowapp.in'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Supports'} />
        <FooterLink text={'Help Center'} />
        <FooterLink text={'FAQ'} />
        <FooterLink text={'Kuki'} />
      
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'GLOW'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 GLOW Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer