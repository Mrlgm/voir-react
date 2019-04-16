import React, {Fragment, MouseEventHandler, ReactElement, ReactFragment, ReactNode} from 'react';
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
                {props.buttons && props.buttons.length > 0 &&
                <footer className={scopedClass('footer')}>
                    {props.buttons.map((button, index) => {
                        return React.cloneElement(button, {key: index});
                    })}
                </footer>}

            </div>
        </Fragment> :
        null;
    return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
    closeOnClickMask: false
};

const alert = (content: string) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component =
        <Dialog
            buttons={[<button onClick={onClose}>OK</button>]}
            visible={true}
            onClose={onClose}>
            {content}
        </Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        yes && yes();
    };
    const onNo = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
        no && no();
    };
    const component = (
        <Dialog
            buttons={[
                <button onClick={onNo}>no</button>,
                <button onClick={onYes}>yes</button>
            ]}
            visible={true}
            onClose={onNo}>
            {content}
        </Dialog>
    );
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
};

//element只能是标签node可以是其他的
const modal = (content: ReactNode | ReactFragment) => {
    const onClose = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //删除div 使用react的方法，先卸载
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    const component = <Dialog onClose={onClose} visible={true}>
        {content}
    </Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);

    return onClose;
};

export {alert, confirm, modal};
export default Dialog;