import React, { useState } from 'react';
import data from '../../assets/surah_list.json';
import SearchBarWrapper from './SearchBarWrapper';
import SearchResult from './SearchResult';

const SearchBoard = () => {
     const [searchedValue, setSearchedValue] = useState("");
     const [searchedResult, setSearchedResult] = useState([]);
     const [notMatch, setNotMatch] = useState(false);
     const [loading, setLoading] = useState(false);

     const requestSearch = (searchedValue) => {
          setSearchedValue(searchedValue);
          setLoading(true);

          const filteredItems = data.filter((item) => {
               return item.name_en.toLowerCase().includes(searchedValue.toLowerCase()) || item.name_bn.includes(searchedValue) || item.name_ar.includes(searchedValue);
          });
          const unfilteredItems = !data.filter((item) => {
               return item.name_en.toLowerCase().includes(searchedValue.toLowerCase()) || item.name_bn.includes(searchedValue) || item.name_ar.includes(searchedValue);
          });

          setLoading(false);
          setSearchedResult(filteredItems);
          setNotMatch(unfilteredItems);
     };

     const cancelSearch = () => {
          setSearchedValue('');
          requestSearch(searchedValue);
     };

     return (
          <div className="h-full flex flex-col pt-10 pb-8 border-b-[3px]">
               <SearchBarWrapper
                    searchedValue={searchedValue}
                    requestSearch={requestSearch}
                    cancelSearch={cancelSearch}
               />
               <SearchResult
                    searchedValue={searchedValue}
                    loading={loading}
                    searchedResult={searchedResult}
                    notMatch={notMatch}
               />
          </div>
     );
};

export default SearchBoard;