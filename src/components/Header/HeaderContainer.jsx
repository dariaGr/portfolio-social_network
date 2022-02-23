import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from './../../redux/authReducer';
import { AuthAPI } from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                };
            });
    };
    
    render() {
        return (
            <Header {...this.props} />
        );
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

