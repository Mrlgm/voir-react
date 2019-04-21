import React from 'react';
import createScopedClass from '../classes';

const sc = createScopedClass('vi-footer');
const Footer: React.FunctionComponent = () => {
    return (
        <div className={sc()}>footer</div>
    );
};

export default Footer;