import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

export default function () {
    const [visible, setVisible] = useState(false);
    const openModal = () => {
        const close = modal(<h1>你好
            <button onClick={() => {close();}}>
                close
            </button>
        </h1>);
    };
    return (<div>
        <button onClick={() => {setVisible(!visible);}}>click</button>
        <Dialog visible={visible} buttons={
            [
                <button onClick={() => {setVisible(false);}}>1</button>,
                <button onClick={() => {setVisible(false);}}>2</button>
            ]
        } onClose={() => {setVisible(false);}}>hi</Dialog>
        <div>
            <button onClick={e => alert('hhh')}>hhh</button>
            <button onClick={e => confirm('hhh', () => {
                window.alert('yes');
            }, () => {
                window.alert('no');
            })}>
                confirm
            </button>
            <button onClick={openModal}>modal</button>
        </div>
    </div>);
}