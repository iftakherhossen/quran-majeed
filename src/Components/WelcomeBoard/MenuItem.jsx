import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';

const MenuItem = ({ menu }) => {
     const { translate, translationLang } = useData();

     return (
          <Link to={`/${menu.name_en.replace(/\s+/g, '-').toLowerCase()}`}>
               <div className={`bg-slate-700 px-6 py-4 rounded-md hover:shadow-lg cursor-pointer text-white ${translationLang === 'Bn' && 'banglaFont'} flex justify-between items-center`}>
                    <h3 className="text-xl font-semibold">{translate === true && translationLang === "Bn" ? menu.name_bn : menu.name_en}</h3>
               </div>
          </Link>
     );
};

export default MenuItem;