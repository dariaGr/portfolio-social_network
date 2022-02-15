import s from './Dialogs.module.css';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state, store }) => {
    const dialogsElements = state.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = state.dialogsPage.messages.map(message => <Message text={message.text} />);

    const handleClickMessage = () => store.dispatch(addMessageCreator());

    const handleChangeMessage = (e) => {
        const message = e.target.value;
        store.dispatch(updateNewMessageTextCreator(message));
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
                    <textarea onChange={handleChangeMessage} placeholder='enter your message...' value={state.dialogsPage.newMessageText}></textarea>
                </div>
                <button className={s.sendButton} type='submit' onClick={handleClickMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;