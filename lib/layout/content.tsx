import React from 'react';
import {createScopedClass} from '../helpers/classnames';
import classNames from '../helpers/classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const sc = createScopedClass('vi-content');
const Content: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props;
    return (
        <div className={classNames(sc(), className)} {...rest}>
            {props.children}
        </div>
    );
};

export default Content;