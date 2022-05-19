import React, { useEffect } from 'react';
import ListImage from '../listimage';
import { useDispatch } from 'react-redux';
import { change } from '../../redux/useList';
import { NAME_URL } from '../../contants/config';
function Home(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(change(""));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <ListImage api={`${NAME_URL}?page=1`} />
        </>
    );
}

export default Home;