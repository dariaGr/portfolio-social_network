import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages   
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