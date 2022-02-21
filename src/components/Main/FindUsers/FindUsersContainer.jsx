import { connect } from "react-redux";
import { toggleFollowAC, setUsersAC } from "../../../redux/UsersReducer";
import FindUsers  from "./FindUsers";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {dispatch(toggleFollowAC(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);