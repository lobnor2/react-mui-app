import { Hiking } from '@mui/icons-material';
import { AppBar, Toolbar, styled, Typography } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
}) 
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h5' sx={{display:{xs:"none", sm:"block"}}}>
          Tib DEV

        </Typography>
        <Hiking sx={{display:{xs:"block", sm:"none" , color:"black"}}} fontSize="large" />
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar