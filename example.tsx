import React from 'react';
import ReactDOM from 'react-dom';
import DialogExample from './lib/dialog/dialog.example';
import IconExample from './lib/icon/icon.example';
import LayoutExample from './lib/layout/layout.example';

function Example() {
    return (
        <div>
            <header>
                <div className="logo">
                    VI
                </div>
            </header>
            <aside>
                <h2>组件</h2>
                <ul>
                    <li>Icon</li>
                    <li>Dialog</li>
                </ul>
            </aside>
            <IconExample/>
            <DialogExample/>
            <LayoutExample/>
        </div>
    );
}


//不是html
ReactDOM.render(<Example/>, document.querySelector('#root'));



