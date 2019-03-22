import React from 'react';
import './importAll';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="vi-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;