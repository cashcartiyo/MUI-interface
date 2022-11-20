import Sidebar from "./pages/Sidebar.jsx"
import Feed from "./components/Feed.jsx"
import Rightbar from "./pages/Rightbar.jsx"
import { Box, createTheme, Stack, ThemeProvider, } from "@mui/material"
import Navbar from "./components/Navbar.jsx"
import Add from './pages/Add.jsx'
import { useState } from "react"


function App() {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;
