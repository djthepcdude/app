import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Music from "./pages/Music";
import Videos from "./pages/Videos";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Shop from "./pages/Shop";
import Press from "./pages/Press";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
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
