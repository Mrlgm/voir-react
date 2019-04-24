import React from 'react';
import createScopedClass from '../classes';
import classNames from '../helpers/classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = createScopedClass('vi-footer');
const Footer: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={classNames(sc(), className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Footer;