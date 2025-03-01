import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './DetailSpecialty.scss'
import HomeHeader from '../../HomePage/Header/HomeHeader';
import HomeFooter from '../../HomePage/Footer/HomeFooter';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import DoctorExtraInfo from '../Doctor/DoctorExtraInfo';


class DetailSpecialty extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            arrDoctorId: [63, 11, 13]
        })
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }

    }
    render() {
        let { arrDoctorId } = this.state
        let { language } = this.props
        return (
            <React.Fragment>
                <HomeHeader />
                <div className='detail-specialty-background'>
                    <div className='detail-specialty-container'>
                        <div className='decription-specialty container'>
                            <div>
                                Cơ Xương Khớp
                                Bác sĩ Cơ Xương Khớp giỏi
                                Danh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:

                                Các chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm
                                Các giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội
                                Các bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.
                                Là thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...
                                Được nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...
                                Bệnh Cơ Xương Khớp
                                Gout
                                Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
                                Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
                                Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai
                                Loãng xương, đau nhức xương
                                Viêm xương, gai xương
                                Viêm cơ, Teo cơ, chứng đau mỏi cơ
                                Yếu cơ, Loạn dưỡng cơ
                                Các chấn thương về cơ, xương, khớp
                                ...
                            </div>
                        </div>
                        <div className='detail-specialty'>
                            {arrDoctorId && arrDoctorId.length > 0 &&

                                arrDoctorId.map((item, index) => {
                                    return (
                                        <div className='detail-doctor container' key={index}>
                                            <div className='content-left'>
                                                <ProfileDoctor
                                                    // doctorId={this.state.currentDoctorId}
                                                    doctorId={item}
                                                    isShowDescription={true}
                                                />

                                            </div>
                                            <div className='content-right'>
                                                {/* <DoctorSchedule
                                                    currentDoctorId={item}
                                                /> */}
                                                <div className='doctor-schedule'>
                                                    <DoctorSchedule
                                                        currentDoctorId={item}
                                                    />
                                                </div>
                                                <div className='doctor-extra-info'>
                                                    <DoctorExtraInfo
                                                        currentDoctorId={item}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <HomeFooter />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
