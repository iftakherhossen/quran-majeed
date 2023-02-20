import React from 'react';
import { FaShare } from 'react-icons/fa';
import useData from '../../hooks/useData';

const QuranicVerse = () => {
     const { translate, translationLang, surahList, ayahInBangla, ayahInEnglish } = useData();
     let randomVerse = {};

     const generateRandomVerse = (array) => {
          const date = new Date();
          const random = () => {
               return (date.getFullYear() * date.getDate() * (date.getMonth() + 1)) % array.length;
          }

          randomVerse = array[random()];
     };

     generateRandomVerse(translate === true && translationLang === "Bn" ? ayahInBangla : ayahInEnglish);

     const randomVerseDetails = surahList.find(surah => randomVerse.surah_no === surah.surah_no_en);

     return (
          <div className={`card mt-10 mb-7 text-base-100 shadow-sm bg-slate-100 ${translate === true && translationLang === "Bn" && 'banglaFont'}`}>
               <div className="pt-4 px-5 flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">
                         {translate === true && translationLang === "Bn" ? "আজকের দিনের কোরআনের আয়াত" : "Quranic Verse of the Day"}
                    </h2>
                    <button className="btn btn-sm btn-circle bg-base-100 hover:bg-white text-white hover:text-base-100"><FaShare /></button>
               </div>
               <div className="divider my-0"></div>
               <div className="card-body pt-3 px-6 pb-5" key={randomVerse.id}>
                    <q className="text-3xl font-bold">{randomVerse.ayah}</q>
                    <p className="text-xl flex justify-end font-semibold">~ {translate === true && translationLang === "Bn" ? randomVerseDetails.name_bn : randomVerseDetails.name_en}</p>
               </div>
          </div>
     );
};

export default QuranicVerse;