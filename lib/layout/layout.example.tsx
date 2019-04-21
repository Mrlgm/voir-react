import React from 'react';
import Layout from './layout';
import Footer from './footer';
import Content from './content';
import Header from './header';

export default function () {
    return (
        <div>
            <div>
                <h1>第一个例子</h1>
                <Layout style={{height: 500}} className='hi'>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
        </div>
    );
};