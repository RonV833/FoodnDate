import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";

import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <ThemeProvider theme={theme}>
        <Typography variant="h1">FoodnDate</Typography>
      </ThemeProvider>
    </Router>
  );
}

export default App;
