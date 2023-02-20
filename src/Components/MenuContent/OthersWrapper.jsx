import React from 'react';
import useData from '../../hooks/useData';
import CardWrapper from '../Common/CardWrapper';

const OthersWrapper = () => {
     const { othersData, translate, translationLang } = useData();

     return (
          <div className="p-5 md:px-0">
               <div className="flex flex-col justify-center items-center mt-20">
                    <h2 className="text-3xl text-base-100 font-bold banglaFont">বিস্‌মিল্লাহির্‌ রহ্‌মানির্‌ রহিম</h2>
                    <p className="text-lg text-center mt-4 text-base-100 font-medium banglaFont">
                         বেশি বেশি আল্লহ্‌র যিক্‌র্‌ করা।<br />
                         নবীর উপর দরূদ পড়া।<br />
                         তাওবা ও ক্ষমা পার্থনা করা।<br />
                         নিজের জন্য দু'আ করা।<br />
                         সকল মুসলিম উম্মাহ্‌র জন্য দু'আ করা।<br />
                    </p>
               </div>
               <CardWrapper data={othersData} />
               <div className="flex justify-center items-center mb-10">
                    <p className="text-lg font-semibold">{translate === true && translationLang === "Bn" ? "শীঘ্রই আরও আসছে..." : "More Coming Soon..."}</p>
               </div>
          </div>
     );
};

export default OthersWrapper;