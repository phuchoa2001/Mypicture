import React, { useEffect, useState } from 'react';
import Styles from './index.module.css';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
function MenuMobile(props) {
    let history = useHistory();
    const [hideMenu, setHideMenu] = useState(false);
    const handleHome = () => {
        history.push("/")
    }
    const handleSearch = () => {
        history.push("/search");
    }
    useEffect(() => {
        let scroll = 0;
        calculateOffsets();
        window.addEventListener("scroll", () => {
            calculateOffsets();
        });
        function calculateOffsets() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 10) {
                scrollTop > scroll ? setHideMenu(true) : setHideMenu(false);
                scroll = scrollTop;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={clsx(Styles.MenuMobile, {
            [Styles.hideMenu]: hideMenu
        })}>
            <div className={Styles.boxicon}>
                <i className={clsx("fa-solid fa-house", Styles.icon)} onClick={handleHome}></i>
            </div>
            <div className={Styles.boxicon} onClick={handleSearch}>
                <i className={clsx("fa-solid fa-magnifying-glass", Styles.icon)}></i>
            </div>
        </div>
    );
}

export default MenuMobile;