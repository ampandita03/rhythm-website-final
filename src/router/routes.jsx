import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import Rulebook from "../screens/rulebook";
import Events from "../screens/events.jsx";
import Gallery from "../screens/gallery.jsx";
import Brochure from "../screens/brochure.jsx";
import Login from "../auth/login.jsx";
import Signup from "../auth/signup.jsx";
import ContactUs from "../screens/ContactUs.jsx";
import ScheduleMain from "../screens/ScheduleMain.jsx";
import ScheduleData from '../schedule.json'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rulebook" element={<Rulebook />} />
                <Route path="/events" element={<Events />} />
                <Route path="/schedule" element={<ScheduleMain scheduleData={ScheduleData} />} />
                <Route path="/brochure" element={<Brochure />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<ContactUs />} />


            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
