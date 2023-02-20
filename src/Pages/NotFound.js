import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

const NotFound = () => {
     const { translate, translationLang} = useData();

     return (
          <div className="h-[100vh] flex flex-col justify-center items-center text-center">
               <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="Not Found" className="w-1/2" />
               <Link to="/">
                    <button className={`btn px-10 text-lg font-semibold bg-base-100 hover:bg-white text-white hover:text-base-100 rounded-full tracking-wide ${translate === true && translationLang === "Bn" && "banglaFont"}`}>{translate === true && translationLang === "Bn" ? "হোমে ফিরে আসুন" : "Head to Home"}</button>
               </Link>
          </div>
     );
};

export default NotFound;