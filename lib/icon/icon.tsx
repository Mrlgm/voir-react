import React from 'react';
import './importAll';
import './icon.scss';
import classNames from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}


const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
    return (
        <svg className={classNames('vi-icon', className)} {...restProps}>
            <use xlinkHref={`#${name}`}/>
        </svg>
    );
};

export default Icon;