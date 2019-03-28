import * as React from 'react';
import './style/button.scss';

interface buttonProps {

}

const Button: React.FunctionComponent<buttonProps> = (props) => {
    return (<button className="vi-button">
        <span>{props.children}</span>
    </button>);
};

export default Button;