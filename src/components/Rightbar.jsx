import { Avatar, AvatarGroup, Box , Typography, ImageList, ImageListItem} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      <Box position="fixed" width={300}>
      <Typography variant="h6" fontWeight={100}>Online friends</Typography>
      <AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant="h6" fontWeight={100}>Latest Photos</Typography>
<ImageList cols={3} gap={5}>
    <ImageListItem>
      <img 
      src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
      alt=""
      />
    </ImageListItem>
</ImageList>
      </Box>
      </Box>
  )
}

export default Rightbar