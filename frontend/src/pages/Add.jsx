import { Avatar, Box, Button, ButtonGroup, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { Stack } from '@mui/system'
import ImageIcon from '@mui/icons-material/Image'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DateRangeIcon from '@mui/icons-material/DateRange'


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px'
})

function Add() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: { xs: 'calc(50% - 25px)', md: 30 },
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                    p={3} borderRadius={5}
                >
                    <Typography variant='h6' color='gray' textAlign='center'>
                        Create listing
                    </Typography>
                    <UserBox>
                        <Avatar
                            src='https://scontent-vie1-1.xx.fbcdn.net/v/t31.18172-8/1147590_718281471515909_3805507_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=e007fa&_nc_ohc=awwdpognY-8AX9camfP&_nc_ht=scontent-vie1-1.xx&oh=00_AfA_-n8-z9478LKxHGWenDQRfFk3YC6i6uTjxH6x1P5xjA&oe=639E474D'
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant='span'>Gergő</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="What u want to sell?"
                        variant="standard"
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <ImageIcon color='secondary' />
                        <PersonAddIcon />
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Sell Item</Button>
                        <Button><DateRangeIcon /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add