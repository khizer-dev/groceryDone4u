import React, {useState} from 'react';
import HeaderAlert from '../header/header-alert/HeaderAlert';
import HaederFeature from '../header/header-feature/HeaderFeature';
import HeaderSearch from '../header/header-search/HeaderSerach';
import HeaderMenu from '../header/header-menu/HeaderMenu';
import SideDrawer from '../side-drawer/SideDrawer';

 const Header = () => {
    return (
        <div>

            
            <HeaderAlert/>
            <HaederFeature/>
            <HeaderSearch />
            <HeaderMenu />
            
        </div>
    )
}

export default Header;