import styled from '@emotion/styled'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'

const StyledToolBar = styled(Toolbar)({
  display:'felx',
  justifyContent: 'space-between',
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '10px',
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',

}))

const  Navbar = () => {
  return (
    <AppBar position = 'sticky'>
      <StyledToolBar>
        <Typography variant='h6'>
          Chat App
          </Typography>
          <Search><InputBase placeholder='search...'/></Search>
          <Icons>icons</Icons>
      </StyledToolBar>
    </AppBar>
  )
}

export default Navbar

