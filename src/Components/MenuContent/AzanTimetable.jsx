import 'moment/locale/bn';
import moment from 'moment/moment';
import React from 'react';
import useData from '../../hooks/useData';

const AzanTimetable = () => {
     const date = new Date();
     const timeStamp = date.getTime();
     const { translate, translationLang, prayerTime } = useData();

     const timeTable = prayerTime.today ? prayerTime.today : {
          "Fajr": "05:13",
          "Sunrise": "06:29",
          "Dhuhr": "12:12",
          "Asr": "15:29",
          "Maghrib": "17:56",
          "Isha'a": "19:11",
     };

     const timeArray = Object.values(timeTable).map(value => value);

     const prayer = [
          { img: "https://muslimbangla.com/assets/img/ic_fajr.png", titleBn: "ফজর", titleEn: "Fajr", time: timeArray[0] }, { img: "https://muslimbangla.com/assets/img/ic_sunrise.png", titleBn: "সূর্যোদয়", titleEn: "Sunrise", time: timeArray[1] }, { img: "https://muslimbangla.com/assets/img/ic_juhr.png", titleBn: "যোহর", titleEn: "Dhuhr", time: timeArray[2] }, { img: "https://muslimbangla.com/assets/img/ic_asar_hanafi.png", titleBn: "আসর", titleEn: "Asr", time: timeArray[3] }, { img: "https://muslimbangla.com/assets/img/ic_magrib.png", titleBn: "মাগরিব", titleEn: "Maghrib", time: timeArray[4] }, { img: "https://muslimbangla.com/assets/img/ic_isha.png", titleBn: "ইশা", titleEn: "Isha", time: timeArray[5] }
     ];

     translate === true && translationLang === "Bn" ? moment.locale('bn') : moment.locale('en');

     return (
          <div className="relative">
               <div className="h-[500px] lg:h-[650px] 2xl:h-[800px] flex justify-center items-center">
                    <div className="h-[500px] lg:h-[700px] 2xl:h-[800px] w-full bg-center bg-cover absolute -z-10" style={{ backgroundImage: "url('https://muslimbangla.com/prayer-bg.77d38f54a3687a6f.jpg')" }}></div>
                    <div className={`h-full flex flex-col justify-center items-center pb-6 text-white ${translationLang === "Bn" && "banglaFont"}`}>
                         <h1 className="text-5xl font-bold">{translate === true && translationLang === "Bn" ? "নামাজের সময়সূচি" : "Salah Timetable"}</h1>
                         <p className="text-2xl mt-5 mb-2 fon-medium">{moment(date).format('dddd, DD MMMM, YYYY')}</p>
                         <p className="text-2xl fon-medium">{moment(timeStamp).format('LT')}</p>
                    </div>
               </div>
               <div className="absolute min-w-full top-[80%] xl:top-[90%]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 mt-5 p-4">
                         {
                              prayer.map(({ img, titleBn, titleEn, time }) => <div className={`bg-slate-50 text-base-100 shadow-sm hover:shadow-md border flex md:flex-col justify-between md:justify-center items-center p-4 md:px-0 md:py-6 rounded-xl cursor-pointer ${translate === true && translationLang === "Bn" && "banglaFont"}`} key={titleEn}>
                                   <img src={img} alt={titleEn} className="w-9 mb-3" />
                                   <h3 className="text-2xl md:text-3xl font-bold md:mb-2">{translate === true && translationLang === "Bn" ? titleBn : titleEn}</h3>
                                   <h2 className="text-2xl font-bold">{moment(time, ["HH.mm"]).format("hh:mm A")}</h2>
                              </div>)
                         }
                    </div>
               </div>

               {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <iframe className="w-full h-[360px] shadow-sm" src="https://www.islamicfinder.org/prayer-widget/" title="Azan Timetable"></iframe>
                    <iframe className="w-full h-[410px] shadow-sm" src="https://www.islamicfinder.org/specialislamicdays" title="Special Date in Calender"> </iframe>
               </div> */}
          </div>
     );
};

export default AzanTimetable;