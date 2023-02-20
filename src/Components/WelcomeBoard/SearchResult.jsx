import React from 'react';
import useData from '../../hooks/useData';
import Loader from '../Common/Loader';
import SurahCard from './SurahCard';

const ErrorAlert = () => {
     const { translate, translationLang } = useData();
     let translatedError;

     if (translate === true && translationLang === "Bn") translatedError = "দুঃখিত! কোনো তথ্য খুঁজে পাওয়া যায়নি!";
     else if (translate === true && translationLang === "En") translatedError = "Sorry! No result found!"

     return (
          <div className="w-full">
               <div className="w-2/3 alert alert-error rounded-lg shadow-lg mx-auto">
                    <div>
                         <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         <span className={`text-xl ${translationLang === "Bn" && 'banglaFont'}`}>{translatedError}</span>
                    </div>
               </div>
          </div>
     )
}

const SearchResult = ({ searchedValue, loading, searchedResult, notMatch }) => {
     const { mostSearched, slicedValue, translate, translationLang } = useData();

     return (
          <div className="mt-5 pt-5 px-4 lg:px-6">
               <div className="mb-4 px-1">
                    {
                         searchedResult.length >= 0 && searchedValue ? <h3 className={`text-xl text-slate-600 font-bold text-center ${translationLang === 'Bn' && 'banglaFont'}`}>{translate === true && translationLang === 'Bn' ? 'মোট ফলাফল' : 'Search Result'}: <b>{searchedResult.length}</b></h3> : <h3 className={`text-xl text-slate-600 font-bold text-center ${translationLang === 'Bn' && 'banglaFont'}`}>{translate === true && translationLang === 'Bn' ? 'মোস্ট সার্চড সূরা' : 'Most Searched Surahs'}</h3>
                    }
               </div>
               <div className="mb-5">
                    {
                         loading ? <Loader /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
                              {
                                   searchedValue ? searchedResult.length > 0 && searchedResult.slice(0, slicedValue).map(result => <SurahCard
                                        key={result.surah_no_en}
                                        result={result}
                                   />) : mostSearched.slice(0, slicedValue).map(result => <SurahCard
                                        key={result.surah_no_en}
                                        result={result}
                                   />)
                              }
                         </div>
                    }
               </div>
               {
                    searchedValue && searchedResult.length === 0 && <ErrorAlert />
               }
          </div>
     );
};

export default SearchResult;