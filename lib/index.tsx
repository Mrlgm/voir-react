import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button/button';
import './style/index.scss';


//不是html
ReactDOM.render(<Button>你好</Button>, document.querySelector('#root'));