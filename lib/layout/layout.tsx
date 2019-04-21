import React from 'react';
import createScopedClass from '../classes';
import classNames from '../helpers/classnames';
import './style/layout.scss';

const sc = createScopedClass('vi-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={classNames(sc(), className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Layout;