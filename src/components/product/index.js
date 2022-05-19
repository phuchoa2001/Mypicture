import React, { useEffect, useState } from 'react';
import Styles from './index.module.css';
import callApi from '../../common/api/apiCaller';
import { NAME_URL } from '../../contants/config';
import {
    useRouteMatch
} from "react-router-dom";
function Product(props) {
    let slug = useRouteMatch();
    const [object, setObject] = useState({});
    const getImage = async () => {
        const res = await callApi(`${NAME_URL}/image/${slug.params.id}`);
        const { image } = res.data;
        setObject(image);
    }
    useEffect(() => {
        getImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={Styles.Product}>
            <div className={Styles.frames}>
                <img src={object.url} alt="hello" className={Styles.img} />
                <h3 className={Styles.name}>{object.name}</h3>
            </div>
        </div>
    );
}

export default Product;