//import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/footer";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Header2/>
        <Header3 />
        <Box bgcolor={theme.palette.bg.main}><Hero />
        <Main/>
          <Footer/>
</Box>      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}



export default App;
