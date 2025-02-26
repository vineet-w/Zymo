import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ErrorPage from "./components/ErrorPage";
import HomeScreen from "./screens/HomeScreen";
import BookingPage from "./screens/BookingPage";
import BookingCard from "./screens/BookingCard";
import Listing from "./screens/Listing";
import { ToastContainer } from "react-toastify";
import Details from "./screens/Details";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Career from "./pages/Career";
import ScrollToTop from "./components/ScrollToTop";
import BlogsMainPage from "./pages/BlogsMainPage";
import BlogDetailPage from "./pages/BlogDetailsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsofService from "./pages/TermsofService";
import CancellationPolicy from "./pages/CancellationPolicy";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop /> {/* Ensures scrolling to top on route change */}
                <Routes>
                    {/* HomePage */}
                    <Route path="/" element={<HomeScreen />} />

                    {/* Page2 */}
                    <Route
                        path="/self-drive-car-rentals/:city"
                        element={<Listing />}
                    />

                    {/* Page3 */}
                    {/* Temporarily disabled */}
                    <Route path="/booking-card" element={<BookingCard />} />

                    {/* Page4 */}
                    <Route path="/details/:city" element={<Details />} />

                    {/* Page5 */}
                    <Route path="/booking/:city" element={<BookingPage />} />

                    {/* NavBar Pages */}
                    {/* About Us */}
                    <Route path="/about-us" element={<AboutUs />} />
                    {/* Contact Us */}
                    <Route path="/contact-us" element={<ContactUs />} />
                    {/* Carrer */}
                    <Route path="/career" element={<Career />} />
                    {/* Blogs  */}
                    <Route path="/blogs" element={<BlogsMainPage />} />
                    <Route path="/blogs/:id" element={<BlogDetailPage />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route
                        path="/termsofservice"
                        element={<TermsofService />}
                    />
                    <Route
                        path="/cancellationpolicy"
                        element={<CancellationPolicy />}
                    />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <ToastContainer />
            </BrowserRouter>
        </>
    );
};

export default App;
