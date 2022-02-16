import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = ({ store }) => {
    const state = store.getState();

    const handleClickMessage = () => store.dispatch(addMessageCreator());

    const handleChangeMessage = (message) => store.dispatch(updateNewMessageTextCreator(message));

    return (
        <Dialogs addMessage={handleClickMessage} updateNewMessageText={handleChangeMessage} dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages} newMessageText={state.dialogsPage.newMessageText} />
    );
};

export default DialogsContainer;