import React from 'react';
import mac from './mac.svg';
import wangwang from './wangwang.svg'

interface IconProps {
    name: string
}

console.log(mac)
console.log(wangwang)

const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    );
};

export default Icon;