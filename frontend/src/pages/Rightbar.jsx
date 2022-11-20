import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box

      flex={2} p={2}
      sx={{ display: { xs: 'none', sm: "block" } }}
    >
      <Box position='fixed' width={400} >
        <Typography variant='h6' fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://img.joomcdn.net/a0fed09c33671423aa40396a8691019c9f24fd23_original.jpeg" />
          <Avatar alt="Travis Howard" src="https://assets.vogue.com/photos/5956958a439e182884670294/master/pass/02-lv-supreme.jpg" />
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVXI8g1OU2SJV1wqmWCgYZNc3_SoBHjUGsw&usqp=CAU" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant='h6' mt={2} mb={2} >
          Latest products
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} >
          <ImageListItem>
            <img
              src='https://assets.supremenewyork.com/214558/zo/t0aJoHZlZs1.jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybNYInan75To6tz2QV55jKKO9o61g7E0_XF5Qr5HHRyj4lyNm5C52CFFQquOWD_Z3wZg&usqp=CAU'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgMwOoCTc5T8_YajpcMXypYPyYIqxAvrt4ww&usqp=CAU'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' mt={2} mb={2} >
          Latest messages
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImLYgop0-Nk-aecw1sJ_JUXe0vJ3X4mPBlw&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — Yo man i need you to pick up the phone right now"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://img.joomcdn.net/a216cc7f39c39e85b9e47978a1c17df24f4943f8_original.jpeg" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  Jennifer
                  </Typography>
                  {" — Wish I see you soon…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://hips.hearstapps.com/esquireuk.cdnds.net/17/10/4000x2666/gallery-1488823028-gosha-lead.jpg?resize=480:*" />
            </ListItemAvatar>
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Hey is the Supreme x TheNorthFace jacket still avalible?…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
