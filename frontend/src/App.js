import "@/App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AnnouncementBanner } from "./components/AnnouncementBanner";

// Pages
import Home from "./pages/Home";
import MusicPage from "./pages/Music";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Shop from "./pages/Shop";
import Press from "./pages/Press";
import Contact from "./pages/Contact";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      <BrowserRouter>
        {/* Announcement Banner */}
        {showBanner && (
          <AnnouncementBanner
            title="NEW MUSIC COMING SOON"
            subtitle="Fresh heat from the Central District"
            releaseDate="2025-04-01T00:00:00"
            spotifyPreSaveLink="https://open.spotify.com/artist/0TboE335UT8BpAg6aSpoAm"
            onClose={() => setShowBanner(false)}
          />
        )}
        
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/press" element={<Press />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#121212',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
    </div>
  );
}

export default App;
