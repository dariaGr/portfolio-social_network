import { addMessage, updateNewMessageText } from '../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages   
    };
};

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;