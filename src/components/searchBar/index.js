import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import Styles from './index.module.css';
import { change } from '../../redux/useList';
import { useDispatch } from 'react-redux';
function Searchbar({ search, NoRedirection, onSubmit }) {
    let history = useHistory();
    const [input, setInput] = useState(search);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!NoRedirection) {
            dispatch(change(input));
            history.push(`/search/mypicture?q=${input}`);
        } else {
            onSubmit(input);
        }
    }
    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value)
    }
    return (
        <div className={Styles.search}>
            <form onSubmit={handleSubmit} className={Styles.form}>
                <button className={Styles.boxicon} type="submit">
                    <i className={clsx("fa-solid fa-magnifying-glass", Styles.searchicon)}></i>
                </button>
                <input
                    type={"text"}
                    className={Styles.input}
                    placeholder="Tìm kiếm"
                    value={input}
                    onChange={handleChange}
                />
            </form >
        </div>
    );
}
export default Searchbar;