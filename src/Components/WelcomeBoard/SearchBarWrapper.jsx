import React from 'react';
import SearchBar from "material-ui-search-bar";
import useData from '../../hooks/useData';
// import { FiSearch } from 'react-icons/fi';

const SearchBarWrapper = ({ searchedValue, requestSearch, cancelSearch }) => {
     const { translate, translationLang } = useData();
     let translatedHeading;

     if (translate === true && translationLang === "Bn") translatedHeading = "আল-কোরআন মাজীদ";
     else translatedHeading = "Al-Quran Majeed";

     return (
          <div className="h-full p-4 lg:p-8">
               <div className="flex flex-col justify-center items-center">
                    <h1 className={`${translationLang === "Bn" && "banglaFont"} text-5xl font-bold text-base-100 my-5`}>{translatedHeading}</h1>
                    <form className="w-full lg:w-2/3 flex justify-center items-center mt-3">
                         {/* <input
                              type="search"
                              placeholder="Search by Surah..."
                              className="input w-full focus:outline-none bg-base-300 text-white text-lg shadow rounded-l-full px-6"
                              onChange={e => requestSearch(e.target.value)}
                         />
                         <button type="submit" className="btn bg-base-300 text-white rounded-l-none rounded-r-full shadow text-xl"><FiSearch /></button> */}
                         <SearchBar
                              value={searchedValue}
                              onChange={(searchedValue) => requestSearch(searchedValue)}
                              onCancelSearch={() => cancelSearch()}
                              placeholder={translate === true && translationLang === "Bn" ? "সার্চ সূরা" : "Search Surahs..."}
                              className="w-full text-white bg-slate-800"
                              style={{ borderRadius: 25, boxShadow: 'none', border: '2px solid rgb(30 41 59)' }}
                         />
                    </form>
               </div>
          </div>
     );
};

export default SearchBarWrapper;