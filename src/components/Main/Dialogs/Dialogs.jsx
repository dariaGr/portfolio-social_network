import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators';

const maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field validate={[required, maxLength50]} name='NewMessageBody' placeholder='enter your message...' component={Textarea} />
            </div>
                <button className={s.sendButton}>Send</button>
        </form>
    );
};

const Dialogs = ({ addMessage, dialogs, messages }) => {
    const dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    const messagesElements = messages.map(message => <Message text={message.text} key={message.id} />);

    const addNewMessage = (values) => {
        addMessage(values.NewMessageBody);
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