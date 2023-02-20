import React from 'react';

const Footer = () => {
     const date = new Date();
     const year = date.getFullYear();

     return (
          <footer className="footer footer-center py-5 bg-base-100 text-base-content">
               <div>
                    <p className="text-lg select-none">Copyright © {year} - All right reserved by Al-Quran Majeed.</p>
               </div>
          </footer>
     );
};

export default Footer;