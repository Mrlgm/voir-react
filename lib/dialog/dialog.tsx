import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/button';
import './style/dialog.scss';
import createScopedClass from '../classes';

interface Props {
    visible: boolean;
}

const scopedClass = createScopedClass('vi-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
    const x = props.visible ?
        <Fragment>
            <div className={scopedClass('mask')}>

            </div>
            <div className={scopedClass()}>
                <div className={scopedClass('close')}>
                    X
                </div>
                <header className={scopedClass('header')}>
                    提示
                </header>
                <main className={scopedClass('main')}>
                    {props.children}
                </main>
                <footer className={scopedClass('footer')}>
                    <Button>ok</Button>
                    <Button>cancel</Button>
                </footer>
            </div>
        </Fragment> :
        null;
    return ReactDOM.createPortal(x, document.body);
};

const alert = (content: string) => {
    const component = <Dialog visible={true}>content</Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
};

export {alert};
export default Dialog;