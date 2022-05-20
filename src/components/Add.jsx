import { Tooltip , Fab, Modal, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import React, { useState } from 'react'
import { bgcolor, Box } from '@mui/system'
import styled from '@emotion/styled'
const StyledModal = styled(Modal)({
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
});
const UserBox = styled(Box)({
    display:'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    gap:"10px",
    marginBottom:"10px"
});

const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip onClick={e => setOpen(true)}
        title="Add Post" 
        sx={{
            position:"fixed", 
            bottom: 20 , 
            left:{xs:"calc(50% -25px)", md:30},
            }}
        > 
            <Fab color="primary" aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
  open={open}
  onClose={e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={300} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
    <Typography variant="h6" color="gray" textAlign="center">
        Create Post
    </Typography>
    <UserBox>
        <Avatar 
        src=""
        sx={{width:30, height:30}}
        
        />

    <Typography fontWeight={500} variant="span">
        lobsang
    </Typography>
    </UserBox>
    <TextField
          sx={{width:"100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          
        />
        <Stack direction="row" gap={2} mt={2} mb={3}>
            <EmojiEmotions color="primary"/>
            <Image color="secondary"/>
            <VideoCameraBack color="success"/>
            <PersonAdd color="error"/>
        </Stack>
        <ButtonGroup 
        fullWidth
        // marginBottom="10px"
        variant="contained" aria-label="outlie primary button group">
            <Button>Post

            </Button>
            <Button 
            sx={{width:"100px"}}><DateRange/>

            </Button>
            

        </ButtonGroup>
  </Box>
</StyledModal>
    
    </>
  )
}

export default Add