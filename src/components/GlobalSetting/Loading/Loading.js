import React from 'react';
import styleLoading from './Loading.module.css';
import { useSelector } from 'react-redux';

export default function Loading(props) {

    const {isLoading} = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require('../../../assets/images/Curve-Loading.gif').default} alt="loading.gif"/>
            </div>
        )
    } else {
        return '';
    }
}
