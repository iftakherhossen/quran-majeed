import React from 'react';
import useData from '../../hooks/useData';

const UpcomingEvent = () => {
     const { translate, translationLang } = useData();

     return (
          <div className={`card rounded-xl bg-slate-100 text-base-100 shadow-sm ${translate === true && translationLang === "Bn" && 'banglaFont'}`}>
               <div className="card-body px-6 py-4">
                    <p>Upcoming Event</p>
               </div>
          </div>
     );
};

export default UpcomingEvent;