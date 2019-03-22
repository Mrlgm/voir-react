import React from 'react';
import './importAll';
import './icon.scss';
import classNames from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}


const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props;
    return (
        <svg className={classNames('vi-icon', className)} {...restProps}>
            <use xlinkHref={`#${props.name}`}/>
        </svg>
    );
};

export default Icon;