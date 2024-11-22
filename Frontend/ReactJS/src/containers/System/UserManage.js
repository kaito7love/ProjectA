import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
        };
    }

    async componentDidMount() {
        let response = await getAllUsers("All");

        if (response && response.errCode === 0) {
            this.setState(
                {
                    arrUsers: response.user,
                },
                //start callback
                () => {
                    console.log("data2 :", response);
                }
                //end callback
            );
        }
        console.log("data1 :", response);
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center">User Manage</div>
                <div className="users-table mt-4 mx-5">
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
                                    console.log("check Map", index, item);
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.email}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.address}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        class="btn btn-outline-success btn-Edit"
                                                    >
                                                        <i class="fas fa-user-edit"></i>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        class="btn btn-outline-danger btn-Delete"
                                                    >
                                                        <i class="fas fa-user-slash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
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
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
