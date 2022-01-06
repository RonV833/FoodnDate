import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

import { Header, Footer } from "./components";
import { Login, Home, Admin, Appointment, Order } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Appointment from "./pages/Appointment";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* <Route exact path="/" element={<ProtectedRoute login={isLoggedIn} />}> */}
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
          <Route path="/order" element={[<Header />, <Order />, <Footer />]} />
          {/* </Route> */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
