import React, {ReactElement} from 'react';
import createScopedClass from '../classes';
import classNames from '../helpers/classnames';
import './style/layout.scss';
import Aside from './aside';

const sc = createScopedClass('vi-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    const children = props.children as Array<ReactElement>;

    const hasAside = children.length && children.reduce((result, node) => {
        return result || node.type === Aside;
    }, false);

    const hasAsideClass = hasAside ? 'hasAside' : '';

    return (
        <div className={classNames(sc(), className, hasAsideClass)} {...rest}>
            {props.children}
        </div>
    );
};

export default Layout;