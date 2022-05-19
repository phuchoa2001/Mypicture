import React, { useEffect, useRef } from 'react';
import Styles from './index.module.css';
import Item from './item';
import { useDispatch, useSelector } from 'react-redux';
import { get, add } from '../../redux/useList';
import callApi from '../../common/api/apiCaller';
import Searchbar from '../searchBar';
import { NAME_URL } from '../../contants/config';
function Warehouse(props) {
    const dispatch = useDispatch();
    let page = useRef(1);
    const { list, search } = useSelector(state => state.List);
    async function getList() {
        const data = await callApi(`${NAME_URL}?page=1`, "GET", {});
        const { list } = data.data;
        dispatch(get(list));
    }
    const handleSubmit = (input) => {
        callApi(`${NAME_URL}/search?q=${input}&page=1`, "GET", {}).then(res => {
            dispatch(get(res.data.list));
        });
    }
    useEffect(() => {
        getList();
        let Api = false;
        window.onscroll = async function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                if (!Api) {
                    page.current++;
                    Api = true;
                    const data = await callApi(`${NAME_URL}?page=${page.current}`, "GET", {});
                    dispatch(add(data.data.list));
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    return (
        <div className={Styles.list}>
            <h3 className={Styles.heading}>Danh sách sản phẩm</h3>
            <Searchbar NoRedirection={true} search="" onSubmit={handleSubmit} />
            {list.map((item) => <Item key={item._id} name={item.name} tag={item.tag} id={item._id} />)}
        </div>
    );
}

export default Warehouse;