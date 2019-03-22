import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log(e.currentTarget);
};

//不是html
ReactDOM.render(<Icon name="wangwang" onClick={fn}/>, document.querySelector('#root'));