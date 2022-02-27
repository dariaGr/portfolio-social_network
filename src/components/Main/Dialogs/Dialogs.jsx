import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field name='NewMessageBody' placeholder='enter your message...' component='textarea'/>
            </div>
                <button className={s.sendButton}>Send</button>
        </form>
    );
};

const Dialogs = ({ addMessage, dialogs, messages }) => {
    const dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    const messagesElements = messages.map(message => <Message text={message.text} key={message.id} />);

    const addNewMessage = (values) => {
        addMessage(values.NewMessageBody)
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
                <DialogsFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const DialogsFormRedux = reduxForm({form: 'dialogs'})(DialogsForm);

export default Dialogs;