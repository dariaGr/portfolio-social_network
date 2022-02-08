import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <ul className={s.items}>
                    <DialogItem name='Dan' id='1'/>
                    <DialogItem name='Anthony' id='2'/>
                    <DialogItem name='Bob' id='3'/>
                    <DialogItem name='Tim' id='4'/>
                    <DialogItem name='Robert' id='5'/>
                    <DialogItem name='Rue' id='6'/>
                </ul>
            </div>
            <div className={s.messages}>
                <Message text='Hi' />
                <Message text='How was your day?' />
                <Message text='Okay, bye' />
            </div>
        </div>
    );
};

export default Dialogs;