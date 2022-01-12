import { useState, useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import  {UserContext}  from "./context/UserContext";
import { OrderProvider } from "./context/OrderContext";

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
  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { userInfo, setUserInfo, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/login").then((response) => {
  //     console.log(response.data);
  //     if (response.data.isLoggedIn) setIsLoggedIn(true);
  //     else {
  //       setIsLoggedIn(false);
  //       navigate("/login");
  //     }
  //   })
  // }, []);

  return (

    <OrderProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* <Route path="/" element={<ProtectedRoute login={isLoggedIn} />}> */}
            <Route exact path="/" element={[<Header />, <Home />, <Footer />]} />
            <Route exact path="/admin" element={[<Header />, <Admin />, <Footer />]} />
            <Route exact path="/appointment" element={[<Header />, <Appointment />, <Footer />]} />
            <Route exact path="/about" element={[<Header />, <AboutUs />, <Footer />]} />
            <Route exact path="/contact" element={[<Header />, <ContactUs />, <Footer />]} />
            <Route exact path="/order" element={[<Header />, <Order />, <Footer />]} />
            <Route exact path="/order/menu" element={[<Header />, <OrderFood />, <Footer />]} />
            <Route exact path="/order/schedule" element={[<Header />, <SetSchedule />, <Footer />]} />
            <Route exact path="/order/shipping" element={[<Header />, <Shipping />, <Footer />]} />
            <Route exact path="/order/payment" element={[<Header />, <Payment />, <Footer />]} />
            <Route exact path="/order/review" element={[<Header />, <ReviewOrder />, <Footer />]} />
          {/* </Route> */}
          <Route exact path="/login" element={<Login />} />
        </Routes>

        {/* <Typography variant="h2">FoodnDate</Typography> */}
      </ThemeProvider>
    </OrderProvider>

  );
}

export default App;
