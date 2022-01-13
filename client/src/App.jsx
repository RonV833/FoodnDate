import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { OrderProvider } from "./context/OrderContext";

//for daily.co
import Meeting from "./pages/Meeting";

import { ThemeProvider, Typography } from "@mui/material";
import theme from "./Theme";
import './App.css';

import { Header, Footer } from "./components";
import { Login, Home, Admin, Appointment, Order, AboutUs, ContactUs } from "./pages";
import { ProtectedRoute, OrderFood, SetSchedule, Shipping, Payment, ReviewOrder } from "./routes";

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <OrderProvider>

      <ThemeProvider theme={theme}>
        
        <Routes>
          {/* <ProtectedRoute login={isLoggedIn}> */}
          <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
          <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />

          
          <Route exact path="/video/:id" element={<Meeting/>} />

          <Route exact path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
          <Route exact path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
          <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
          <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
          <Route exact path="/order/schedule" element={[<Header />, <SetSchedule />, <Footer />]} />
          <Route exact path="/order/shipping" element={[<Header />, <Shipping />, <Footer />]} />
          <Route exact path="/order/payment" element={[<Header />, <Payment />, <Footer />]} />
          <Route exact path="/order/review" element={[<Header />, <ReviewOrder />, <Footer />]} />
          {/* </ProtectedRoute> */}
          <Route exact path="/login" element={<Login setLogin={setIsLoggedIn} />} />
        </Routes>

          {/* <Typography variant="h2">FoodnDate</Typography> */}
        </ThemeProvider>

      </OrderProvider>
  );
}

export default App;
