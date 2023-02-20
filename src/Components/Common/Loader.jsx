import React from 'react';
import { Dna, Oval } from 'react-loader-spinner';

const Loader = () => {
     return (
          <div className="flex justify-center items-center">
               {/* <Oval
                    height={80}
                    width={80}
                    color="#282A36"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#282A36"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
               /> */}
               <Dna
                    visible={true}
                    height="90"
                    width="90"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
               />
          </div>
     );
};

export default Loader;