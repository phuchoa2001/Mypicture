import React, { useEffect, useRef, useState } from 'react';
import Masonry from 'masonry-layout';
import './index.css';
import { useHistory } from "react-router-dom";
import callApi from '../../common/api/apiCaller';
import { useDispatch, useSelector } from 'react-redux';
import { get, add } from '../../redux/useList';
import { NAME_URL } from '../../contants/config';

function ListImage({ api }) {
    const [loading, setLoading] = useState(true);
    const { list, search } = useSelector(state => state.List);
    let page = useRef(1);
    const dispatch = useDispatch();
    let history = useHistory();
    let fruits = [];
    for (let i = 0; i < 20; i++) {
        fruits.push(i);
    }
    const handleClick = (index) => {
        history.push(`/mypicture/${index}`);
    }
    async function getList() {
        const data = await callApi(api, "GET", {});
        const { list } = data.data;
        dispatch(get(list));
        setLoading(false);
    }
    useEffect(() => {
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
    const getMasonry = async () => {
        var elem = document.querySelector('.list');
        new Masonry(elem, {
            // options...
            itemSelector: `.item`,

        });
    }
    useEffect(() => {
        getMasonry();
        let Api = false;
        const listImg = document.querySelectorAll("img");
        for (let i = 0; i < listImg.length; i++) {
            listImg[i].onload = function () {
                getMasonry();
            }
        }
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
    })
    return (
        <>
            <div onClick={getMasonry} className="reset">>>Bấm vào đây tải lại nếu lỗi hình ảnh {"<<"} </div>
            <div className="list" data-masonry={`{"itemSelector" : "item"}`} >
                {!loading ? list.map((photo) => (
                    <li className="item" key={photo._id} onClick={() => handleClick(photo._id)}>
                        <img src={photo.url} alt="url" className="img" />
                        <h3 className='text'>{photo.name}</h3>
                    </li>
                )) : fruits.map((photo, index) => (
                    <li className="item loading" key={index}>
                        <h3 className='text'> </h3>
                    </li>
                ))
                }
            </div>
        </>
    );
}

export default ListImage;