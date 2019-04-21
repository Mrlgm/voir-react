import React from 'react';
import createScopedClass from '../classes';

const sc = createScopedClass('vi-aside');
const Aside: React.FunctionComponent = () => {
    return (
        <div className={sc()}>aside</div>
    );
};

export default Aside;