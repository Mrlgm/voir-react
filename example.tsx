import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import IconExample from './lib/icon/icon.example';
import LayoutExample from './lib/layout/layout.example';

function Example() {
    return (
        <Router>
            <div>
                <header>
                    <div className="logo">
                        VI
                    </div>
                </header>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">Layout</Link></li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </main>
            </div>
        </Router>
    );
}


//不是html
ReactDOM.render(<Example/>, document.querySelector('#root'));



