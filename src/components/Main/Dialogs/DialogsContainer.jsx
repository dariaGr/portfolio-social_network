import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState();
                const handleClickMessage = () => store.dispatch(addMessageCreator());
                const handleChangeMessage = (message) => store.dispatch(updateNewMessageTextCreator(message));
                
                return (
                    <Dialogs 
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages} 
                        newMessageText={state.dialogsPage.newMessageText} 
                        addMessage={handleClickMessage} 
                        updateNewMessageText={handleChangeMessage} 
                    />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;