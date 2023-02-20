import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = ({ surahInfo, duaInfo, duaSurahInfo, translationLang }) => {
     // window.onscroll = function () {
     //      let windowScroll = document.documentElement.scrollTop;
     //      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
     //      let scrollAmount = (windowScroll / windowHeight) * 100;
     //      document.getElementById("progressBar").style.width = scrollAmount + "%";
     // };

     return (
          <div className="fixed top-0 w-[calc(100vw_-_5.3rem)] lg:w-[calc(100vw_-_21.8rem)] z-20">
               <div className="navbar bg-base-100 h-20 px-5 my-0 sticky flex justify-between select-none">
                    <div className="flex flex-col items-start w-3/4">
                         {
                              surahInfo ? <h3 className={`text-2xl font-semibold ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {surahInfo ? translationLang === "Bn" ? surahInfo.name_bn : surahInfo.name_en : 'Surah Name Bn'} - {surahInfo ? surahInfo.name_ar : 'Surah Name Ar'}
                              </h3> : <h3 className={`text-2xl font-semibold ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {duaInfo ? translationLang === "Bn" ? duaInfo.name_bn : duaInfo.name_en : 'Dua Name Bn'} - {duaInfo ? duaInfo.name_ar : 'Dua Name Ar'}
                              </h3>
                         }
                         {
                              surahInfo ? <p className={`font-medium flex items-center ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {surahInfo ? translationLang === "Bn" ? `আয়াত সংখ্যা: ${surahInfo.ayah_no_bn}` : `Total Ayah: ${surahInfo.ayah_no_en}` : 'Ayah No 0'}
                                   <span className="mx-3">•</span> <span className="mr-2">{surahInfo.revelation_place_en = "Mecca" ? "🕋" : "🕌"}</span>
                                   {surahInfo ? translationLang === "Bn" ? surahInfo.revelation_place_bn : surahInfo.revelation_place_en : 'Revelation Place'}
                              </p> : <p className={`font-medium flex items-center ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {duaInfo ? translationLang === "Bn" ? `আয়াত সংখ্যা: ${duaInfo.ayah_array.length}` : `Total Ayah: ${duaInfo.ayah_array.length}` : 'Ayah No 0'}
                                   <span className="mx-3">•</span>
                                   <Link to={`/surah/${duaInfo.surah_no_en}`} className="hover:underline">{duaInfo ? translationLang === "Bn" ? duaSurahInfo.name_bn : duaSurahInfo.name_en : "Surah Name"}</Link>
                              </p>
                         }
                    </div>
                    <div className="w-1/4 flex justify-end">
                         {
                              surahInfo ? <h1 className={`text-6xl text-gray-500 font-bold ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {surahInfo ? translationLang === "Bn" ? surahInfo.surah_no_bn : surahInfo.surah_no_en : 'Number'}
                              </h1> : <h1 className={`text-6xl text-gray-500 font-bold ${translationLang === "Bn" && 'banglaFont'}`}>
                                   {duaInfo ? translationLang === "Bn" ? duaInfo.surah_no_bn : duaInfo.surah_no_en : 'Number'}
                              </h1>
                         }
                    </div>
               </div>
               {surahInfo && <progress className="progress progress-info w-[calc(100vw_-_5.3rem)] lg:w-[calc(100vw_-_21.8rem)] py-0 my-0 z-50 fixed top-20 rounded-none" value={surahInfo.ayah_no_en} max={surahInfo.ayah_no_en} id="progressBar"></progress>}
          </div>
     );
};

export default TopBar;