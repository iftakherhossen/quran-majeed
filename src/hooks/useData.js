import { useEffect, useState } from 'react';
import asmaulHusna from '../assets/asmaul_husna.json';
import ayahAr from '../assets/ayah_ar.json';
import ayahBn from '../assets/ayah_bn.json';
import ayahEn from '../assets/ayah_en.json';
import duas from '../assets/dua_list.json';
import kalima from '../assets/kalima.json';
import others from '../assets/others.json';
import surahs from '../assets/surah_list.json';

const useData = () => {
     const [onlineStatus, setOnlineStatus] = useState(false);

     const surahList = surahs;
     const duaList = duas;
     const ayahInArabic = ayahAr;
     const ayahInBangla = ayahBn;
     const ayahInEnglish = ayahEn;
     const asmaulHusnaData = asmaulHusna;
     const kalimaData = kalima;
     const othersData = others;

     useEffect(() => {
          setOnlineStatus(navigator.onLine ? true : false);
     }, []);

     const mostSearchedList = ["36", "55", "56", "67", "112"];
     const mostSearched = surahs.filter(({ surah_no_en }) => mostSearchedList.find(list => list === surah_no_en));

     let slicedValue;
     const [windowSize, setWindowSize] = useState([
          window.innerWidth,
          window.innerHeight,
     ]);

     useEffect(() => {
          const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
     });

     if (windowSize[0] <= 640) slicedValue = 2;
     else if (windowSize[0] <= 1024) slicedValue = 4;
     else slicedValue = 6;

     const [translate, setTranslate] = useState(true);
     const [translationLang, setTranslationLang] = useState("Bn");
     const handleChangeLang = e => setTranslationLang(e.target.value);

     const [userData, setUserData] = useState({});
     const [prayerTime, setPrayerTime] = useState({});

     useEffect(() => {
          fetch('https://geolocation-db.com/json/')
               .then(res => res.json())
               .then(data => setUserData({
                    city: data.city,
                    longitude: data.longitude,
                    latitude: data.latitude,
               }));

          fetch(`https://dailyprayer.abdulrcs.repl.co/api/${userData.city}`)
               .then(res => res.json())
               .then(data => setPrayerTime(data));
     }, [userData.city]);

     return {
          onlineStatus,
          surahList,
          duaList,
          ayahInArabic, 
          ayahInBangla,
          ayahInEnglish,
          asmaulHusnaData,
          kalimaData,
          othersData,
          mostSearched,
          slicedValue,
          translate,
          setTranslate,
          translationLang,
          setTranslationLang,
          handleChangeLang,
          userData,
          prayerTime,
     };
};

export default useData;