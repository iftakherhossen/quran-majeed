import React from 'react';

const Surah = ({ surahInArabic, translatedContent, translationLang, dua }) => {
     return (
          <div className={`${dua === true ? 'min-h-[85vh]' : 'h-full'} p-3 mt-[5.3rem] lg:mt-20 md:p-5 lg:p-7 overflow-y-auto`}>
               <ul>
                    {
                         surahInArabic.map(({ id, verseIdAr, ayah }) => <li key={id} className="flex justify-end items-start whitespace-pre-line hover:rounded-md hover:shadow-sm hover:bg-slate-100 px-5 py-6 border-b last:border-b-0">
                              <div className="w-full h-full flex flex-col justify-between pt-1">
                                   <div className="w-full text-4xl text-slate-700 arabic-font font-semibold mb-4 text-right">     
                                        {ayah} <span className="text-lg font-black">۝</span>
                                   </div>
                                   {
                                        translatedContent.map(content => verseIdAr === content.verseIdAr && <div key={content.id} className={`w-full text-xl text-slate-500 font-medium ${translationLang === 'Bn' && 'banglaFont'}`} id={content.id}>{content.ayah}</div>)
                                   }
                              </div>
                              <div className="ml-4 flex justify-end">
                                   <div className="w-11 mask mask-decagon text-lg text-slate-500 font-bold bg-slate-200 py-2 text-center rounded-full select-none">{verseIdAr}</div>
                              </div>
                         </li>)
                    }
               </ul>
          </div>
     );
};

export default Surah;