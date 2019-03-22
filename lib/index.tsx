import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn = () => {
    console.log('fn')
};

//不是html
ReactDOM.render(<Icon name="wangwang" onClick={fn}/>, document.querySelector('#root'));