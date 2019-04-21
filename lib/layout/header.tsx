import React from 'react';
import createScopedClass from '../classes';

const sc = createScopedClass('vi-header');
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc()}>header</div>
    );
};

export default Header;