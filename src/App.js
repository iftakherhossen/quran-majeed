import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ScrollToTop from "./Components/Common/ScrollToTop";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dua from "./Pages/Dua";
import DuaContent from "./Pages/DuaContent";
import Home from './Pages/Home';
import MenuContent from "./Pages/MenuContent";
import NotFound from "./Pages/NotFound";
import SurahContent from "./Pages/SurahContent";
import WelcomeBoard from "./Pages/WelcomeBoard";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleScrollToTopBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, []);



  return (
    
      <AuthProvider>
        <div className="absolute bottom-10 right-10 z-20">
          <img src="https://i.ibb.co/KF9FS6j/arrow.png" alt="arrow" onClick={handleScrollToTopBtn} id="backToTop" className={`${isVisible ? 'opacity-100' : 'opacity-0'} cursor-pointer transition`} />
        </div>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />}>
                <Route index element={<WelcomeBoard />} />
                <Route path="surah/:number" element={<SurahContent />} />
                <Route path="dua" element={<Dua />} />
                <Route path="dua/:id" element={<DuaContent />} />
                <Route path="asmaul-husna" element={<MenuContent />} />
                <Route path="kalima" element={<MenuContent />} />
                <Route path="salah-timetable" element={<MenuContent />} />
                <Route path="special-islami-days" element={<MenuContent />} />
                <Route path="quran-majeed-tv" element={<MenuContent />} />
                <Route path="others" element={<MenuContent />} />
                <Route path="about-us" element={<MenuContent />} />
                <Route path="contact" element={<MenuContent />} />
              </Route>          
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    
  );
}

export default App;