import React, { useEffect, useState } from 'react';
import Styles from './index.module.css';
import { useRouteMatch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import callApi from '../../common/api/apiCaller';
import { NAME_URL } from '../../contants/config';
function Add(props) {
    let match = useRouteMatch("");
    const history = useHistory();
    const [form, setForm] = useState({
        id: "",
        name: "",
        url: "",
        tag: "",
        tagarray: "",

    });
    const checkEdit = async () => {
        if (match.params.id) {
            const res = await callApi(`${NAME_URL}/image/${match.params.id}`);
            const { image } = res.data;
            setForm(image);
        }
    }
    useEffect(() => {
        checkEdit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onChange = (e) => {
        const { value, name } = e.target;
        setForm(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const onChangeTag = (e) => {
        const { value, name } = e.target;
        const arr = value.split(",");
        setForm(prev => {
            return {
                ...prev,
                [name]: value,
                tagarray: arr
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (match.params.id) {
            // Edit
            callApi(`${NAME_URL}`, "PUT", form).then(() => {
                history.push("/admin001sadmin002/warehouse");
            });

        } else {
            //  Add
            callApi(`${NAME_URL}`, "POST", form).then(() => {
                history.push("/admin001sadmin002/warehouse");
            });
        }
    }
    return (
        <div>
            <h3 className={Styles.textadd}> {match.params.id ? "Sửa Sản Phẩm vào Website" : "Thêm Sản Phẩm vào Website"}</h3>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <div className={Styles.form_item}>
                    <label className={Styles.labal}>Tên</label>
                    <input
                        type={"text"}
                        className={Styles.input}
                        placeholder="Nhập tên tại đây"
                        name="name"
                        onChange={onChange}
                        value={form.name}
                    />
                </div>
                <div className={Styles.form_item}>
                    <label className={Styles.labal}>URL</label>
                    <input
                        type={"text"}
                        className={Styles.input}
                        placeholder="Url Hình ảnh "
                        name='url'
                        onChange={onChange}
                        value={form.url}
                    />
                </div>
                <div className={Styles.form_item}>
                    <label className={Styles.labal}>Thẻ Tag</label>
                    <input
                        type={"text"}
                        className={Styles.input}
                        placeholder="cách nhau với dấu phẩy vd :anime,đặng phúc hòa"
                        name="tag"
                        onChange={onChangeTag}
                        value={form.tag}
                    />
                </div>
                <button type='submit' className={Styles.button}>{match.params.id ? "Sửa" : "Gữi đi"}</button>
            </form>
        </div>
    );
}
export default Add;