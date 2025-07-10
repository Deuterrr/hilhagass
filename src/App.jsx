import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageLoaderWrapper from "./components/PageLoaderWrapper.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";

function AppRoutes() {
    const location = useLocation();
    return (
        <PageLoaderWrapper location={location}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </PageLoaderWrapper>
    );
}

export default function App() {
    return (
        <div style={{ backgroundColor: "var(--white)" }}>
            <Router basename={import.meta.env.VITE_BASE_URL || '/'}>
                <ScrollToTop />
                <CustomCursor />
                <AppRoutes />
            </Router>
        </div>
    );
}