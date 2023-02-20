import React from 'react';
import Footer from '../Components/Common/Footer';
import DuaBoard from '../Components/WelcomeBoard/DuaBoard';
import Menu from '../Components/WelcomeBoard/Menu';
import QuranicVerse from '../Components/WelcomeBoard/QuranicVerse';
import SearchBoard from '../Components/WelcomeBoard/SearchBoard';
import UpcomingEvent from '../Components/WelcomeBoard/UpcomingEvent';

const WelcomeBoard = () => {
     return (
          <div>
               <div className="w-5/6 mx-auto my-6 select-none pt-8 pb-10">
                    <SearchBoard />
                    <DuaBoard />
                    <Menu />
                    <QuranicVerse />
                    <UpcomingEvent />
               </div>
               <Footer />
          </div>
     );
};

export default WelcomeBoard;