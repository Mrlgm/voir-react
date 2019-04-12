import React from 'react';
import ReactDOM from 'react-dom';
import DialogExample from './dialog/dialog.example';
import './style/index.scss';


//不是html
ReactDOM.render(<DialogExample/>, document.querySelector('#root'));




export {default as Icon} from './icon/icon';