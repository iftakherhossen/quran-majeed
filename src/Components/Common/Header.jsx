import React from 'react';
import useData from '../../hooks/useData';

const Header = ({ text }) => {
     const { translationLang } = useData();

     return (
          <header className="h-40 lg:h-44 flex justify-center items-end pb-6">
               <h1 className={`text-5xl font-bold ${translationLang === "Bn" && "banglaFont"} text-base-300`}>{text}</h1>
          </header>
     );
};

export default Header;