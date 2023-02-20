import React from 'react';
import { useLocation } from 'react-router-dom';
import CardWrapper from '../Components/Common/CardWrapper';
import Footer from '../Components/Common/Footer';
import Header from '../Components/Common/Header';
import AboutUs from '../Components/MenuContent/AboutUs';
import AzanTimetable from '../Components/MenuContent/AzanTimetable';
import Contact from '../Components/MenuContent/Contact';
import OthersWrapper from '../Components/MenuContent/OthersWrapper';
import QuranMajeedTV from '../Components/MenuContent/QuranMajeedTV';
import SpecialIslamiDays from '../Components/MenuContent/SpecialIslamiDays';
import useData from '../hooks/useData';

const MenuContent = () => {
     const location = useLocation();
     const pathname = location.pathname;

     const { asmaulHusnaData, kalimaData, translate, translationLang } = useData();

     return (
          <div>
               {
                    pathname === "/asmaul-husna" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "আসমাউল হুসনা" : "Asmaul Husna"} />
                         <CardWrapper data={asmaulHusnaData} asmaulHusna={true} />
                    </div>
               }
               {
                    pathname === "/kalima" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "কালেমা সমূহ" : "Kalima"} />
                         <CardWrapper data={kalimaData} kalima={true} />
                    </div>
               }
               {
                    pathname === "/salah-timetable" && <AzanTimetable />
               }
               {
                    pathname === "/special-islami-days" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "বিশেষ ইসলামি দিন সমূহ" : "Special Islami Days"} />
                         <SpecialIslamiDays />
                    </div>
               }
               {
                    pathname === "/quran-majeed-tv" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "কোরআন মাজীদ টিভি" : "Quran Majeed TV"} />
                         <QuranMajeedTV />
                    </div>
               }
               {
                    pathname === "/others" && <OthersWrapper />
               }
               {
                    pathname === "/about-us" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "আমাদের সম্পর্কে" : "About Us"} />
                         <AboutUs />
                    </div>
               }
               {
                    pathname === "/contact" && <div>
                         <Header text={translate === true && translationLang === "Bn" ? "যোগাযোগ" : "Contact"} />
                         <Contact />
                    </div>
               }
          </div>
     );
};

export default MenuContent;