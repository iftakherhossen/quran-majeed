import React from 'react';
import DuaCard from '../Components/WelcomeBoard/DuaCard';
import useData from '../hooks/useData';

const Dua = () => {
     const { duaList, translate, translationLang } = useData();
     let translatedHeading;

     if (translate === true && translationLang === "Bn") translatedHeading = "প্রয়োজনীয় সূরাসমূহ";
     else translatedHeading = "Important Surahs";

     return (
          <div className="h-full flex flex-col pt-10 pb-5 px-8 lg:px-12">
               <div className="text-center mb-5">
                    <h1 className={`${translationLang && 'banglaFont'} text-4xl lg:text-5xl font-bold text-base-100 my-5`}>{translatedHeading}</h1>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                    {
                         duaList.map(result => <DuaCard key={result.id} result={result} />)
                    }
               </div>
          </div>
     );
};

export default Dua;