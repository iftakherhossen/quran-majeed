import React from 'react';
import MenuItem from './MenuItem';
import menuData from '../../assets/menu.json';

const Menu = () => {
     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 my-6 p-4 lg:px-6">
               {
                    menuData.map(menu => <MenuItem menu={menu} key={menu.id} />)
               }
          </div>
     );
};

export default Menu;