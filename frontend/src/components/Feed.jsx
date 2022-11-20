import { Box } from '@mui/material'
import React from 'react'
import Post from './Post.jsx'

function Feed() {
  return (
  <Box bgcolor="#3f51b5" flex={4} p={2}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </Box>
  )
}

export default Feed
