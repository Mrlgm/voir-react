import React from 'react';
import './importAll';
import './icon.scss';

interface IconProps {
    name: string
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="vi-icon">
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;