import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedNFT from "./components/FeaturedNFT";
import TrendingSection from "./components/TrendingSection";
import PopularArtists from "./components/PopularArtists";
import JoinCommunity from "./components/JoinCommunity";
import Footer from "./components/footer/Footer";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <FeaturedNFT />
                <TrendingSection />
                <PopularArtists />
                <JoinCommunity />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


