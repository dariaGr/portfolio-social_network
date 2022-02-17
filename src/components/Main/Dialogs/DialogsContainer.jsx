import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.newMessageText,
        dialogs: state.dialogs,
        messages: state.messages   
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageCreator()),
        updateNewMessageText: (message) => dispatch(updateNewMessageTextCreator(message))
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;