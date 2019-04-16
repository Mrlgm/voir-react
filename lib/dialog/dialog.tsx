import React, {Fragment, MouseEventHandler, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './style/dialog.scss';
import createScopedClass from '../classes';

interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
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

    const dialog = props.visible ?
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
                {props.buttons && props.buttons.length > 0 &&
                <footer className={scopedClass('footer')}>
                    {props.buttons.map((button, index) => {
                        return React.cloneElement(button, {key: index});
                    })}
                </footer>}

            </div>
        </Fragment> :
        null;
    return ReactDOM.createPortal(dialog, document.body);
};

Dialog.defaultProps = {
    closeOnClickMask: false
};

//element只能是标签node可以是其他的

const modal = (content: string | ReactNode, buttons?: Array<ReactElement>) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            buttons={buttons}
            visible={true}
            onClose={onClose}>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);

    return onClose;
};

const alert = (content: string) => {
    const buttons = [<button onClick={() => {onClose();}}>OK</button>];
    const onClose = modal(content, buttons);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        onClose();
        yes && yes();
    };
    const onNo = () => {
        onClose();
        no && no();
    };
    const buttons = [
        <button onClick={onNo}>no</button>,
        <button onClick={onYes}>yes</button>
    ];
    const onClose = modal(content, buttons);
};

export {alert, confirm, modal};
export default Dialog;