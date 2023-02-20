import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';

const SurahCard = ({ result }) => {
     const { translate, translationLang } = useData();

     return (
          <Link to={`surah/${result.surah_no_en}`}>
               <div className="bg-slate-700 px-6 py-4 rounded-lg text-white relative select-none cursor-pointer hover:shadow-lg -z-10">
                    <h2 className={`absolute -z-5 right-5 text-5xl text-slate-600 font-bold ${translationLang === 'Bn' &&'banglaFont'} py-auto`}>
                         {translate === true && translationLang === "Bn" ? result.surah_no_bn : result.surah_no_en}
                    </h2>
                    <h2 className={`text-xl lg:text-2xl font-medium ${'banglaFont'}`}>
                         {translate === true && translationLang === "Bn" ? result.name_bn : result.name_en}
                    </h2>
                    <p className="text-sm lg:text-md">
                         {translate === true && translationLang === "Bn" ? `আয়াত সংখ্যা : ${result.ayah_no_bn}` : `Ayah No: ${result.ayah_no_en}`}
                    </p>
               </div>
          </Link>
     );
};

export default SurahCard;