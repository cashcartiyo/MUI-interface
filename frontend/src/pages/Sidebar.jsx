import { Box, List, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import SettingsIcon from '@mui/icons-material/Settings'
import GroupsIcon from '@mui/icons-material/Groups'
import ChatIcon from '@mui/icons-material/Chat'
import ModeNightIcon from '@mui/icons-material/ModeNight'



function Sidebar({mode, setMode}) {
  return (
    <Box 
    flex={1} 
    p={2} 
    sx={{ display: { xs: 'none', sm: "block" } 
    }}
    >
      <Box position='fixed'>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#chat'>
            <ListItemIcon>
              <ChatIcon/>
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#groups'>
            <ListItemIcon>
              <GroupsIcon/>
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#settings'>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <ModeNightIcon/>
            </ListItemIcon>
            <Switch  color="warning"  onChange={e => setMode(mode === 'light' ? 'dark' : 'light')} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar
