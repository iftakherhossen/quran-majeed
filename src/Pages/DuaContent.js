import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Common/Footer';
import Surah from '../Components/SurahContent/Surah';
import TopBar from '../Components/SurahContent/TopBar';
import useData from '../hooks/useData';

const DuaContent = () => {
     let params = useParams();
     const { duaList, surahList, ayahInArabic, ayahInBangla, ayahInEnglish, translate, translationLang } = useData();

     const duaInfo = duaList.find(info => info.id === params.id);
     const surahInfo = surahList.find(info => info.surah_no_en === duaInfo.surah_no_en);
     const surahInArabic = ayahInArabic.filter(ayah => ayah.surah_no === duaInfo.surah_no_en && duaInfo.ayah_array.find(dua => ayah.verseIdAr === dua));
     const surahInBangla = ayahInBangla.filter(ayah => ayah.surah_no === duaInfo.surah_no_en && duaInfo.ayah_array.find(dua => ayah.verseIdAr === dua));
     const surahInEnglish = ayahInEnglish.filter(ayah => ayah.surah_no === duaInfo.surah_no_en && duaInfo.ayah_array.find(dua => ayah.verseIdAr === dua));
     
     let translatedContent;

     if (translate === true && translationLang === "Bn") translatedContent = surahInBangla;
     else translatedContent = surahInEnglish;

     console.log(surahInArabic);

     return (
          <div>
               <TopBar 
                    duaInfo={duaInfo}
                    duaSurahInfo={surahInfo}
                    translationLang={translationLang} 
               />
               <Surah 
                    surahInArabic={surahInArabic} 
                    surahInBangla={surahInBangla} 
                    surahInEnglish={surahInEnglish} 
                    translatedContent={translatedContent} 
                    translationLang={translationLang} 
                    dua={true}
               /> 
               <Footer />
          </div>
     );
};

export default DuaContent;