import React, { Component } from 'react';
import loading from './loading.gif';
import './loading.css';

export default class Loading extends Component {
    render() {
        return (
            <div className='container center'>
                <img className='loading' src={loading} alt='loading' />
            </div>
        );
    }
}
