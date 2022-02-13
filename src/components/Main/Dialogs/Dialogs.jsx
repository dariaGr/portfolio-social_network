import React from 'react';
import s from './Dialogs.module.css';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/store';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state, dispatch }) => {
    const dialogsElements = state.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = state.dialogsPage.messages.map(message => <Message text={message.text} />);

    const newMessageElement = React.createRef();

    const handleClickMessage = () => dispatch(addMessageCreator());

    const handleChangeMessage = () => {
        const message = newMessageElement.current.value;
        dispatch(updateNewMessageTextCreator(message));
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
                    <textarea onChange={handleChangeMessage} placeholder='enter your message...' ref={newMessageElement} value={state.dialogsPage.newMessageText}></textarea>
                </div>
                <button className={s.sendButton} type='submit' onClick={handleClickMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;