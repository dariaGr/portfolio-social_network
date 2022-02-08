import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'Dan'},
        {id: 2, name: 'Anthony'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Tim'},
        {id: 5, name: 'Robert'}
    ]
    
    const messagesData = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How was your day?'},
        {id: 3, text: 'Okay, bye'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <ul className={s.items}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[1].id}/>
                </ul>
            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].text} />
            </div>
        </div>
    );
};

export default Dialogs;