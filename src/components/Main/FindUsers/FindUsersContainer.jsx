import { connect } from "react-redux";
import { followAC, setUsersAC } from "../../../redux/UsersReducer";
import { unfollowAC } from "../../../redux/UsersReducer";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollowAC(userId))},
        setUsers: (userId) => {dispatch(setUsersAC(userId))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);