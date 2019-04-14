import React, {Fragment, MouseEventHandler, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './style/dialog.scss';
import createScopedClass from '../classes';

interface Props {
    visible: boolean;
    buttons: Array<ReactElement>;
    onClose: MouseEventHandler;
    closeOnClickMask?: boolean;
}

const scopedClass = createScopedClass('vi-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: MouseEventHandler = (e) => {
        props.onClose(e);
    };

    const onClickMask: MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e);
        }
    };

    const x = props.visible ?
        <Fragment>
            <div className={scopedClass('mask')} onClick={onClickMask}>

            </div>
            <div className={scopedClass()}>
                <div className={scopedClass('close')} onClick={onClickClose}>
                    X
                </div>
                <header className={scopedClass('header')}>
                    提示
                </header>
                <main className={scopedClass('main')}>
                    {props.children}
                </main>
                <footer className={scopedClass('footer')}>
                    {props.buttons.map((button, index) => {
                        return React.cloneElement(button, {key: index});
                    })}
                </footer>
            </div>
        </Fragment> :
        null;
    return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
    closeOnClickMask: false
};

const alert = (content: string) => {
    const component = <Dialog buttons={[]} visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    }}>{content}</Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
};


export {alert};
export default Dialog;