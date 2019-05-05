import React from 'react';
import ReactDOM from 'react-dom';
import './example.scss';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import IconExample from './lib/icon/icon.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';

const logo = require('./logo.png');

function Example() {
    return (
        <Router>
            <Layout className='page'>
                <Header>
                    <div className="logo">
                        <img src={logo} alt=""/>
                        VI
                    </div>
                </Header>
                <Layout>
                    <Aside>
                        <h2>组件</h2>
                        <ul>
                            <li><Link to="/icon">Icon</Link></li>
                            <li><Link to="/dialog">Dialog</Link></li>
                            <li><Link to="/layout">Layout</Link></li>
                        </ul>
                    </Aside>
                    <Content>
                        <Route path="/icon" component={IconExample}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </Router>
    );
}


//不是html
ReactDOM.render(<Example/>, document.querySelector('#root'));



