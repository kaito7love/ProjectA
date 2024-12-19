
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import { Remarkable } from "remarkable"; // Import Remarkable
import * as actions from "../../../store/actions";
import Select from 'react-select';
const md = new Remarkable(); // Khởi tạo Remarkable
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];
class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postContent: "", // Nội dung Markdown
            renderedHTML: "", // HTML đã được render từ Markdown
            selectedDoctor: '',
            description: '',
        };
    }

    componentDidMount() {
        this.props.fetchAllUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.users !== this.props.users) {
            // this.setState({ arrUsers: this.props.users });
        }
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
           
        });
    }
    handleEditorChange = (e) => {
        const markdownText = e.target.value;
        const renderedHTML = md.render(markdownText); // Render Markdown sang HTML
        // console.log("Rendered HTML:", renderedHTML); // Log HTML vào console
        this.setState({
            postContent: markdownText,
            renderedHTML: renderedHTML
        });

    };
    handleChange = (selectedDoctor) => {
        this.setState({ selectedDoctor }, () =>
            console.log(`Option selected:`, this.state.selectedDoctor)
        );
    };
    handleSaveContentMarkdown = () => {
        console.log("check state", this.state);

    }
    render() {
        return (
            <div className="container">
                <div className="title">Doctor Manage</div>
                <div className="markdown">
                    <div className="markdown-title">Thêm thông tin bác sĩ:</div>
                    <div className="markdown-doctor-detail">
                        <div className="markdown-info-left">
                            <div>Chon Bac Si</div>
                            <Select
                                className="input-info-left"
                                value={this.state.selectedDoctor}
                                onChange={this.handleChange}
                                options={options}
                            />
                        </div>
                        <div className="markdown-info-right">
                            <div>Thong tin gioi thieu</div>
                            <textarea rows={4} className="input-info-right"
                                value={this.state.description}
                                onChange={(event) => { this.handleDescriptionChange(event) }} />
                        </div>
                    </div>
                    <div>Them Bai viet</div>
                    <div className="markdown-content">
                        <textarea
                            className="input-markdown"
                            value={this.state.postContent}
                            onChange={this.handleEditorChange}
                        />
                        <div className="output-markdown">
                            {/* Hiển thị Markdown HTML */}
                            <div dangerouslySetInnerHTML={{ __html: this.state.renderedHTML }} />
                        </div>
                    </div>

                    <div className="col-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.handleSaveContentMarkdown()}
                        >
                            <FormattedMessage id="form.save" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    users: state.admin.users
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllUser: () => dispatch(actions.fetchAllUserStart()),
    deleteUser: (data) => dispatch(actions.deleteUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
