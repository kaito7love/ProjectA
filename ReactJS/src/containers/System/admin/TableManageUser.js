import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import { emitter } from "../../../utils/emitter";
import { getAllUsers, createUserService, deleteUserService, editUserService, } from "../../../services/userService";
import * as actions from "../../../store/actions";

class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            userEdit: {},
        };
    }

    async componentDidMount() {
        this.props.fetchAllUser();
    }

    componentDidUpdate(prevProps, prevStates, snapShot) {
        if (prevProps.users !== this.props.users) {
            let arrUsers = this.props.users;
            this.setState({
                arrUsers: arrUsers,
            })
        }

    }

    handleDeleteUser = async (user) => {
        await this.props.deleteUser(user)

    };

    handleEditUser = (user) => {
        console.log("edit by id:", user.id);
    };


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="users-table mt-4 mb-4">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {arrUsers &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-success btn-Edit"
                                                    onClick={() =>
                                                        this.handleEditUser(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <i className="fas fa-user-edit"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-Delete"
                                                    onClick={() =>
                                                        this.handleDeleteUser(
                                                            item
                                                        )
                                                    }
                                                >
                                                    <i className="fas fa-user-slash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUser: () => dispatch(actions.fetchAllUserStart()),
        deleteUser: (data) => dispatch(actions.deleteUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
