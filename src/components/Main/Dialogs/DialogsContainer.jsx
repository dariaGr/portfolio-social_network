import { addMessage, updateNewMessageText } from '../../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../../hoc/withAuthRedirect';

const mapStateToProps = state => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    };
};

export default compose(connect(mapStateToProps, {addMessage, updateNewMessageText}), withAuthRedirect)(Dialogs);