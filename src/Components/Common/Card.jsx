import React from 'react';
import useData from '../../hooks/useData';

const NameCard = ({ result }) => {
     const { translate, translationLang } = useData();

     return (
          <div className="card rounded-lg bg-slate-700 text-white relative">
               <div className="absolute bottom-3 right-5">
                    <h2 className="text-6xl text-slate-500 font-bold select-none">{result.number}</h2>
               </div>
               <div className={`card-body text-center ${translationLang === "Bn" && "banglaFont"}`}>
                    <h2 className="card-title text-4xl justify-center mb-2">{result.name_ar}</h2>
                    <p className="text-lg">
                         {translate === true && translationLang === "Bn" ? `উচ্চারনঃ ${result.name_bn}` : `Pronunciation: ${result.name_en}`}
                    </p>
                    <p className="text-lg">
                         {translate === true && translationLang === "Bn" ? `অর্থঃ ${result.meaning_bn}` : `Meaning: ${result.meaning_en}`}
                    </p>
               </div>
          </div>
     );
};

const KalimaCard = ({ result }) => {
     const { translate, translationLang } = useData();

     return (
          <div className="card rounded-lg bg-slate-700 text-white relative">
               <div className="absolute top-3 right-5">
                    <h2 className="text-5xl text-slate-500 font-bold select-none">{result.number}</h2>
               </div>
               <div className={`card-body ${translationLang === "Bn" && "banglaFont"}`}>
                    <h2 className="card-title text-3xl mb-4 justify-center items-center">
                         {translate === true && translationLang === "Bn" ? result.name_bn : result.name_en}
                    </h2>
                    <p className="text-4xl text-right my-4">
                         {result.text_ar}
                    </p>
                    <p className="text-xl mt-1">
                         {translate === true && translationLang === "Bn" ? `উচ্চারনঃ ${result.text_bn}` : `Pronunciation: ${result.text_en}`}
                    </p>
                    <p className="text-xl">
                         {translate === true && translationLang === "Bn" ? `অর্থঃ ${result.meaning_bn}` : `Meaning: ${result.meaning_en}`}
                    </p>
               </div>
          </div>
     );
}

const OthersDuaCard = ({ result, index }) => {
     return (
          <div className="card py-2 px-3 rounded-xl relative shadow-sm bg-slate-100">
               <div className="absolute right-5 bottom-3 text-4xl font-semibold">{index+1}</div>
               <div className="card-body p-2">
                    {result.title && <div className="text-lg font-semibold text-base-100 banglaFont border-b mb-1">{result.title}</div>}
                    {result.text && <div className="text-xl font-bold text-base-100 banglaFont">{result.text}</div>}
                    {result.note && <div className="text-sm font-medium text-base-100 banglaFont border-t pt-1.5">{result.note}</div>}
               </div>
          </div>
     )
}

const Card = ({ result, asmaulHusna, kalima, index }) => {
     return (
          asmaulHusna === true ? <NameCard 
               result={result} 
          /> : kalima === true ? <KalimaCard 
               result={result} 
          /> : <OthersDuaCard 
               result={result} 
               index={index}
          />
     )
};

export default Card;