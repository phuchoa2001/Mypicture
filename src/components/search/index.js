import React from 'react';
import Searchbar from '../searchBar';
import Styles from './index.module.css';
import { useLocation } from "react-router-dom";
import ListImage from '../listimage';
import { NAME_URL } from '../../contants/config';
function Search(props) {
    const search = useLocation().search;
    const searchkey = new URLSearchParams(search).get("q");
    return (
        <>
            <div className={Styles.search}>
                <Searchbar search={searchkey} />
            </div>
            <div className={Styles.list}>
                <ListImage api={`${NAME_URL}/search?q=${searchkey}&page=1`} />
            </div>
        </>
    );
}
export default Search;