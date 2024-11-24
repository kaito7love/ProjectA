import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createUser } from "../../services/userService";
import ModelUser from "./ModalUser";
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModelUser: false,
        };
    }

    async componentDidMount() {
        await this.getAllUser();
    }

    getAllUser = async () => {
        let response = await getAllUsers("All");

        if (response && response.errCode === 0) {
            this.setState(
                {
                    arrUsers: response.user,
                },
                //start callback
                () => {
                    // console.log("data2 :", response);
                }
                //end callback
            );
        }
        // console.log("data1 :", response);
    };
    handleAddNewUser = () => {
        this.setState({
            isOpenModelUser: true,
        });
    };
    toggleUserModel = () => {
        this.setState({
            isOpenModelUser: !this.state.isOpenModelUser,
        });
    };
    createUsers = async (data) => {
        try {
            let res = await createUser(data);
            if (res && res.message.errCode !== 0) {
                alert(res.message.message);
            } else {
                await this.getAllUser();
                this.setState({
                    isOpenModelUser: false,
                });
            }
            console.log("data from uMange", res);
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container row">
                <div className="title text-center">User Manage</div>
                <div className="mx-5 ">
                    <button
                        className="btn btn-primary btn-addNewUser"
                        onClick={() => this.handleAddNewUser()}
                    >
                        Add New User<i className="fas fa-plus"></i>
                    </button>
                </div>
                <div>
                    <ModelUser
                        isOpenModelUser={this.state.isOpenModelUser}
                        toggleUserModel={this.toggleUserModel}
                        createUser={this.createUsers}
                    />
                </div>
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
                                    // console.log("check Map", index, item);
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
                                                >
                                                    <i className="fas fa-user-edit"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger btn-Delete"
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
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
