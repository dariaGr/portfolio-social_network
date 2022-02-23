import { addMessage, updateNewMessageText } from '../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const mapStateToProps = state => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessageText})(AuthRedirectComponent);

export default DialogsContainer;