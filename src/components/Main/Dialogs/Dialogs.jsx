import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Dan'},
        {id: 2, name: 'Anthony'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Tim'},
        {id: 5, name: 'Robert'}
    ];

    const messages = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How was your day?'},
        {id: 3, text: 'Okay, bye'}
    ];
    
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