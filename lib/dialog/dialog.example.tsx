import React, {useState} from 'react';
import Dialog, {alert} from './dialog';

export default function () {
    const [visible] = useState(true);
    return (<div>
        <Dialog visible={visible}>hi</Dialog>
        <div>
            <button onClick={e => alert('hhh')}>hhh</button>
        </div>
    </div>);
}