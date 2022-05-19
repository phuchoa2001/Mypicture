import React from 'react';
import Styles from './index.module.css';
import MenuMobile from './menumobile';
import { useHistory } from "react-router-dom";
import Searchbar from '../../components/searchBar';
function Header(props) {
    let history = useHistory();
    const handleHome = () => {
        history.push(`/`);
    }
    return (
        <>
            <div className={Styles.Header}>
                <div className={Styles.logo} onClick={handleHome}>
                    <img src="/image/logo.png" alt="logo" className={Styles.logo_img} />
                </div>
                <Searchbar search="" />
            </div>
            <MenuMobile />
        </>
    );
}

export default Header;