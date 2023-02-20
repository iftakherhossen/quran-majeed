import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import DuaCard from './DuaCard';

const DuaBoard = () => {
     const { duaList, slicedValue, translate, translationLang } = useData();
     let translatedHeading;
     let translatedLink;

     if (translate === true && translationLang === "Bn") { translatedHeading = "প্রয়োজনীয় সূরাসমূহ"; translatedLink = "সব দেখুন" };
     if (translate === true && translationLang === "En") { translatedHeading = "Important Surahs"; translatedLink = "See All" };

     return (
          <div className="h-full flex flex-col py-8 px-4 lg:px-6 border-b-[3px]">
               <div className="flex justify-between items-center">
                    <h2 className={`${translationLang && 'banglaFont'} text-3xl font-bold text-base-100 my-5`}>{translatedHeading}</h2>
                    <Link to="/dua" className={`text-lg bg-text-100 font-semibold hover:underline ${translationLang && 'banglaFont'}`}>{translatedLink}</Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 my-3">
                    {
                         duaList.slice(0, slicedValue).map(result => <DuaCard key={result.id} result={result} />)
                    }
               </div>
          </div>
     );
};

export default DuaBoard;