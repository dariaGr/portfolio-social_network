import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ state, dispatch }) => {
    const dialogsElements = state.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    const messagesElements = state.dialogsPage.messages.map(message => <Message text={message.text} />);

    const newMessageElement = React.createRef();

    const handleClickMessage = () => dispatch({type: "ADD_MESSAGE"});

    const handleChangeMessage = () => {
        const message = newMessageElement.current.value;
        dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newMessage: message});
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