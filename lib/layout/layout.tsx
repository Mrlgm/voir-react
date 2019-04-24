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
    let hasAside = false;
    if ((props.children as Array<ReactElement>).length) {
        (props.children as Array<ReactElement>).map((node) => {
            if (node.type === Aside) {
                hasAside = true;
            }
        });
    }
    return (
        <div className={classNames(sc(), [className, hasAside && 'hasAside'].join(' '))} {...rest}>
            {props.children}
        </div>
    );
};

export default Layout;