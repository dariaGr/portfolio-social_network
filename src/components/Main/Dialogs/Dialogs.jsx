import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({dialogs, messages}) => {
    const dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = messages.map(message => <Message text={message.text} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <ul className={s.items}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;