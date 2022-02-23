import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ addMessage, updateNewMessageText, dialogs, messages, newMessageText, isAuth }) => {
    const dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    const messagesElements = messages.map(message => <Message text={message.text} key={message.id} />);

    const handleClickMessage = () => addMessage();

    const handleChangeMessage = (e) => {
        const message = e.target.value;
        updateNewMessageText(message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <ul className={s.items}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textarea}>
                    <textarea onChange={handleChangeMessage} placeholder='enter your message...' value={newMessageText}></textarea>
                </div>
                <button className={s.sendButton} type='submit' onClick={handleClickMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;