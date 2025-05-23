

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./pages/user/Landing";
import RootLayouts from "./layouts/RootLayouts";

import Tours from "./pages/user/Tours";
import SingleTour from "./pages/user/SingleTour";

import Review from "./pages/user/Review";
import Profile from "./pages/user/Profile";
import Bookings from "./pages/user/Bookings";
import TourOperatorDashboardLayouts from "./layouts/TourOperatorDashboardLayouts";
import Overview from "./pages/tourOperator/Overview";
import CreateTour from "./pages/tourOperator/CreateTour";
import VendorAds from "./pages/tourOperator/VendorAds";
import OperatorProfile from "./pages/tourOperator/OperatorProfile";
import Message from "./pages/tourOperator/Message";
import UpdateTour from "./pages/tourOperator/UpdateTour";
import ManageBookings from "./pages/tourOperator/ManageBookings";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Dextinations from "./pages/user/Dextinations";
import Contact from "./pages/user/Contact";
import About from "./pages/user/About";
import OperatorSignup from "./pages/auth/OperatorSignup";
import OperatourLogin from "./pages/auth/OperatourLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route element={<RootLayouts />}>
          <Route path="/" element={<Landing />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/destinations" element={<Dextinations/>}/>
          <Route path="/tours/:id" element={<SingleTour />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/review" element={<Review />} />
          <Route path="/profile" element={<Profile />} />
          
        </Route>
        <Route path = "/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/operatour-signup" element={<OperatorSignup/>} />
        <Route path="/operatour-login" element={<OperatourLogin/>} />
        

        
        
        <Route path="/dashboard" element={<TourOperatorDashboardLayouts />}>
          <Route index={true} element={<Overview />} />
          <Route path="create-tour" element={<CreateTour/>} />
          <Route path="tours" element={<VendorAds />} />
          <Route path="bookings" element ={<ManageBookings/>}/>
          <Route path="update/:id" element ={<UpdateTour/>}/>
          <Route path="Operator-profile" element={<OperatorProfile />} />
          <Route path="message" element={<Message />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
