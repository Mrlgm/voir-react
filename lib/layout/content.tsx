import React from 'react';
import createScopedClass from '../classes';

const sc = createScopedClass('vi-content');
const Content: React.FunctionComponent = () => {
    return (
        <div className={sc()}>content</div>
    );
};

export default Content;