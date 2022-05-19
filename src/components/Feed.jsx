import Post from '../components/Post';
import React from 'react'
import { Box } from '@mui/system';

const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      <Post name="lobsang Norbu"/>
      <Post name="Tenzin" />
      <Post name="Tashi Tsering"/>
      <Post name="Gyatso"/>
      <Post name="Choeyang"/>
      <Post name="Lebron James"/>
    </Box>
  )
}

export default Feed