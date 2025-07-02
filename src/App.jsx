import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageLoaderWrapper from "./components/PageLoaderWrapper.jsx";
import AnimatedWords from "./components/AnimatedWords.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";

export default function App() {
  return (
    <div className="" style={{ backgroundColor: "var(--white)" }}>
      <Router basename="/hilhagas">
        <ScrollToTop />
        <CustomCursor />
          <PageLoaderWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />} />
            </Routes>
          </PageLoaderWrapper>
      </Router>
    </div>
  );
}