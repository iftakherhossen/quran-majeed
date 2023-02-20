import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';

const DuaCard = ({ result }) => {
     const { translate, translationLang } = useData();

     return (
          <Link to={`/dua/${result.id}`}>
               <div className="bg-slate-700 h-full px-6 py-4 rounded-lg text-white relative select-none cursor-pointer hover:shadow-lg">
                    <h2 className={`absolute -z-5 bottom-2 right-3 text-4xl text-slate-500 font-bold ${'banglaFont'}`}>
                         {translate === true && translationLang === "Bn" ? result.surah_no_bn : result.surah_no_en}
                    </h2>
                    <h2 className={`text-xl lg:text-2xl font-medium ${'banglaFont'}`}>
                         {translate === true && translationLang === "Bn" ? result.name_bn : result.name_en}
                    </h2>
               </div>
          </Link>
     );
};

export default DuaCard;