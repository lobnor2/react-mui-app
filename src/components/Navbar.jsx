import { Hiking, Notifications } from '@mui/icons-material';
import { AppBar, Toolbar, styled, Typography, Box, InputBase , Badge, Avatar, Menu, MenuItem} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import React, {useState} from 'react';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
}) ;
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"1px 10px ",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
  // [theme.breakpoints.up("sm")]: {
  //   width:"50%"
  // }
}));
const Icons = styled(Box)(({ theme }) => ({
  display:"none" ,
  alignItems:"center",
  gap:"20px", 
  [theme.breakpoints.up("sm")]: {
    display:"flex"
  }
  // backgroundColor: "white",
  
}));

const UserBox = styled(Box)(({ theme }) => ({
  display:"flex",
  alignItems: "center",
  gap:"5px",
  [theme.breakpoints.up("sm")]: {
    display:"none"
  }
}));
const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant='h5' sx={{display:{xs:"none", sm:"block"}}}>
          TibDEV

        </Typography>
        <Hiking sx={{display:{xs:"block", sm:"none" }}} fontSize="large" />
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
          onClick={(e) => setOpen(true)}/>

        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
        <Avatar sx={{width:30, height:30}} alt="Remy Sharp" src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        <Typography variant="span">Lobsang</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar