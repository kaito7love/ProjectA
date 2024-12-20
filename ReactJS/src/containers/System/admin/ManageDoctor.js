
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./ManageDoctor.scss";
import { Remarkable } from "remarkable"; // Import Remarkable
import * as actions from "../../../store/actions";
import Select from 'react-select';
import { LANGUAGES, manageActions } from "../../../utils";
import { getDetailDoctorService } from "../../../services/userService";
const md = new Remarkable(); // Khởi tạo Remarkable

class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: "", // Nội dung Markdown
            contentHTML: "", // HTML đã được render từ Markdown
            selectedDoctor: '',
            description: '',
            doctorList: '',
            hasData: '',
        };
    }

    componentDidMount() {
        this.props.fetchAllDoctor();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({ doctorList: dataSelect });
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.allDoctors)
            this.setState({ doctorList: dataSelect });
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
            contentMarkdown: markdownText,
            contentHTML: renderedHTML
        });

    };
    handleChange = async (selectedDoctor) => {
        this.setState({ selectedDoctor }, () =>
            console.log(`Option selected:`, this.state.selectedDoctor)
        );
        let res = await getDetailDoctorService(selectedDoctor.value)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            this.setState({
                contentMarkdown: res.data.Markdown.contentMarkdown,
                contentHTML: res.data.Markdown.contentHTML,
                description: res.data.Markdown.description,
                hasData: true
            });
        } else {
            this.setState({
                contentMarkdown: '',
                contentHTML: '',
                description: '',
                hasData: false
            });
        }

        console.log(res);

    };
    handleSaveContentMarkdown = () => {
        this.props.saveInfoDoctor({
            doctorId: this.state.selectedDoctor.value,
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
        })
        console.log("check state", this.state);
    }
    buildDataInputSelect = (data) => {
        let result = []
        let { language } = this.props
        if (data && data.length > 0) {
            data.map((item, index) => {
                let option = {};
                let labelVi = `${item.lastName} ${item.firstName}`;
                let labelEn = `${item.firstName} ${item.lastName}`;
                option.label = language === LANGUAGES.VI ? labelVi : labelEn;
                option.value = item.id
                result.push(option)
            })
        }
        return result;
    }
    render() {

        let { hasData } = this.setState
        console.log(this.state.hasData);
        return (
            <div className="container">
                <div className="title">Doctor Manage</div>
                <div className="markdown">
                    <div className="markdown-title">Thêm thông tin bác sĩ:</div>
                    <div className="markdown-doctor-detail">
                        <div className="markdown-info-left">
                            <div>Chọn Bác Sĩ:</div>
                            <Select
                                className="input-info-left"
                                value={this.state.selectedDoctor}
                                onChange={this.handleChange}
                                options={this.state.doctorList}
                            />
                        </div>
                        <div className="markdown-info-right">
                            <div>Giới thiệu bác sĩ:</div>
                            <textarea rows={4} className="input-info-right"
                                value={this.state.description}
                                onChange={(event) => { this.handleDescriptionChange(event) }} />
                        </div>
                    </div>
                    <div>Thêm bài viết:</div>
                    <div className="markdown-content">
                        <textarea
                            className="input-markdown"
                            value={this.state.contentMarkdown}
                            onChange={this.handleEditorChange}
                        />
                        <div className="output-markdown">
                            {/* Hiển thị Markdown HTML */}
                            <div dangerouslySetInnerHTML={{ __html: this.state.contentHTML }} />
                        </div>
                    </div>

                    <div className="col-12">
                        <button
                            type="button"
                            className={this.state.hasData === true ? "btn btn-warning" : 'btn btn-primary'}
                            onClick={() => this.handleSaveContentMarkdown()}
                        >
                            {this.state.hasData === true ? <FormattedMessage id="form.edit" /> : <FormattedMessage id="form.create-detail" />}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
    saveInfoDoctor: (data) => dispatch(actions.saveInfoDoctor(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
