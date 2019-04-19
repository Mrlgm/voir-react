import React from 'react';
import ReactDOM from 'react-dom';
import DialogExample from './lib/dialog/dialog.example';
import IconExample from './lib/icon/icon.example';

function Example() {
    return <div>
        <IconExample/>
        <DialogExample/>
    </div>;
}


//不是html
ReactDOM.render(<Example/>, document.querySelector('#root'));



