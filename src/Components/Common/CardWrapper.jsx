import React from 'react';
import Card from './Card';

const CardWrapper = ({ data, asmaulHusna, kalima }) => {
     return (
          <div className={`grid grid-cols-1 ${kalima === true ? "gap-6 my-3" : "md:grid-cols-2 xl:grid-cols-3 gap-4"} my-3 px-7 pt-5 pb-10`}>
               {
                    data.map((result, index) => <Card key={result.number ? result.number : result.id} result={result} asmaulHusna={asmaulHusna} kalima={kalima} index={index} />)
               }
          </div>
     );
};

export default CardWrapper;