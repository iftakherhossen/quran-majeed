import React from 'react';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link, Outlet, useParams } from 'react-router-dom';
import Loader from '../Components/Common/Loader';
import useData from '../hooks/useData';

const Home = () => {
     const { surahList } = useData();
     let params = useParams();
     const { translate, setTranslate, translationLang, setTranslationLang } = useData();
     let translatedHeading;

     if (translate === true && translationLang === "Bn") translatedHeading = "সেটিংস";
     else translatedHeading = "Settings";
     
     return (
          <div>
               <div className="drawer drawer-mobile">
                    <input id="side-bar" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content relative flex">
                         <aside className="flex flex-col sticky top-0 left-0 p-3 h-full w-[4.5rem] bg-base-100 lg:hidden">                              
                              <label htmlFor="side-bar" className="btn btn-circle drawer-button lg:hidden cursor-pointer shadow-sm bg-white hover:bg-white mb-4 lg:mb-0">
                                   <HiMenu className="text-2xl text-slate-800" />
                              </label>
                              <Link to="/" className="mt-auto">
                                   <label className="btn btn-circle drawer-button lg:hidden cursor-pointer shadow-sm bg-white hover:bg-white mb-4 lg:mb-0">
                                        <AiFillHome className="text-2xl text-slate-800" />
                                   </label>
                              </Link>
                              <label htmlFor="settings" className="btn btn-circle drawer-button lg:hidden cursor-pointer shadow-sm bg-white hover:bg-white">
                                   <AiFillSetting className="text-2xl text-slate-800" />
                              </label>
                         </aside>
                         <main className="w-full">
                              <Outlet />
                         </main>
                    </div> 
                    <div className="drawer-side">
                         <label htmlFor="side-bar" className="drawer-overlay"></label> 
                         <ul className="menu p-4 w-[21rem] bg-base-100 text-base-content">
                              <li onClick={() => {document.getElementById('side-bar').click()}}><Link to="/" className="text-xl lg:text-2xl mx-auto banglaFont">{translate === true && translationLang === "Bn" ? "আল-কোরআন মাজীদ" : "Al-Quran Majeed"}</Link></li>
                              <div className="mt-0 divider"></div>
                              {
                                   surahList ? surahList.map(({ surah_no_en, surah_no_bn, name_ar, name_bn, name_en }) => <li key={surah_no_en} onClick={() => {document.getElementById('side-bar').click()}}>
                                        <Link to={`/surah/${surah_no_en}`} className={`text-lg flex justify-between ${surah_no_en === params.number && 'border shadow text-white font-semibold'}`}>
                                             <span>{translate === true && translationLang === "Bn" ? surah_no_bn : surah_no_en}. {translate === true && translationLang === "Bn" ? name_bn : name_en}</span> <span className="arabicFont text-right">{name_ar}</span>
                                        </Link>
                                   </li>) : <Loader />
                              }
                              <li className="hidden lg:block text-lg" onClick={() => {document.getElementById('side-bar').click()}}>
                                   <label htmlFor="settings">{translate === true && translationLang === "Bn" ? "সেটিংস" : "Settings"}</label>
                              </li>
                              <div className="mb-0 divider"></div>
                              <li><span className="mx-auto">{translate === true && translationLang === "Bn" ? "নির্মাণে ইফতেখার হোসেন" : "Developed By Iftakher Hossen"}</span></li>
                         </ul>                    
                    </div>
               </div>

               <div>
                    <input type="checkbox" id="settings" className="modal-toggle" />
                    <div className="modal z-100">
                         <div className="modal-box relative text-white">
                              <label htmlFor="settings" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                              <h2 className="text-2xl font-bold">{translatedHeading}</h2>
                              <div className="py-4 px-2 mt-3">
                                   <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl">{translate === true && translationLang === "Bn" ? "অনুবাদ" : "Translate"}</h3>
                                        <input type="checkbox" className="toggle" defaultChecked={translate} onChange={() => setTranslate(!translate)} />
                                   </div>
                                   <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl">{translate === true && translationLang === "Bn" ? "অনুবাদের ভাষা" : "Translation Language"}</h3>
                                        <select className="select focus:outline-none" defaultValue={translate === true ? "Bn" : "En"} onChange={(e) => setTranslationLang(e.target.value)}>
                                             <option disabled>{translate === true && translationLang === "Bn" ? "ভাষা নির্বাচন করুন" : "Select your language"}</option>
                                             <option value="Bn">বাংলা</option>
                                             <option value="En">English</option>
                                        </select>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Home;