
import React from 'react';
import Styles from './index.module.css';
import { useHistory } from "react-router-dom";
import callApi from '../../../common/api/apiCaller';
import { deleteitem } from '../../../redux/useList';
import { useDispatch } from 'react-redux';
import { NAME_URL } from '../../../contants/config';
function Item({ name, tag, id }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleEdit = () => {
        history.push(`/admin001sadmin002/edit/${id}`);
    }
    const handleDelete = () => {
        callApi(`${NAME_URL}`, "DELETE", { id }).then(res => {
            if (res.status === 202) {
                dispatch(deleteitem(id));
            }
        })
    }
    return (
        <div className={Styles.item}>
            <div className={Styles.info}>
                <h3 className={Styles.name}>{name}</h3>
                <p className={Styles.tag}>{tag}</p>
            </div>
            <div className={Styles.menu}>
                <div className={Styles.action} onClick={handleEdit}>Sửa</div>
                <div className={Styles.action} onClick={handleDelete}>xóa</div>
            </div>
        </div>
    );
}

export default Item;