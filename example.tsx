import React from 'react';
import ReactDOM from 'react-dom';
import './example.scss';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Aside, Content, Footer, Header} from './lib/layout/layout';
import IconDemo from './lib/icon/icon.demo';

const logo = require('./logo.png');

function Example() {
    return (
        <Router>
            <Layout className="page">
                <Header className="page-header">
                    <div className="logo">
                        <img src={logo} width='48' height='48' alt=""/>
                        <span>VI</span>
                    </div>
                </Header>
                <Layout>
                    <Aside className="page-aside">
                        <h2>组件</h2>
                        <ul>
                            <li><NavLink to="/icon">Icon</NavLink></li>
                            <li><NavLink to="/dialog">Dialog</NavLink></li>
                            <li><NavLink to="/layout">Layout</NavLink></li>
                        </ul>
                    </Aside>
                    <Content className="page-main">
                        <Route path="/icon" component={IconDemo}/>
                        <Route path="/dialog" component={DialogExample}/>
                        <Route path="/layout" component={LayoutExample}/>
                    </Content>
                </Layout>
                <Footer className="page-footer">
                    &copy; Mrlgm
                </Footer>
            </Layout>
        </Router>
    );
}


//不是html
ReactDOM.render(<Example/>, document.querySelector('#root'));



