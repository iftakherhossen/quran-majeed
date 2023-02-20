import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Surah from '../Components/SurahContent/Surah';
import TopBar from '../Components/SurahContent/TopBar';
import useData from '../hooks/useData';

const SurahContent = () => {
     let params = useParams();
     const { surahList, ayahInArabic, ayahInBangla, ayahInEnglish, translate, translationLang } = useData();

     const surahInfo = surahList.find(info => info.surah_no_en === params.number);
     const surahInArabic = ayahInArabic.filter(ayah => ayah.surah_no === params.number);
     const surahInBangla = ayahInBangla.filter(ayah => ayah.surah_no === params.number);
     const surahInEnglish = ayahInEnglish.filter(ayah => ayah.surah_no === params.number);

     let translatedContent;

     if (translate === true && translationLang === "Bn") translatedContent = surahInBangla;
     else translatedContent = surahInEnglish;

     return (
          <div>
               <TopBar 
                    surahInfo={surahInfo}
                    translationLang={translationLang} 
               />
               <Surah 
                    surahInArabic={surahInArabic} 
                    surahInBangla={surahInBangla} 
                    surahInEnglish={surahInEnglish} 
                    translatedContent={translatedContent} 
                    translationLang={translationLang} 
               />
               <Footer />
          </div>
     );
};

export default SurahContent;