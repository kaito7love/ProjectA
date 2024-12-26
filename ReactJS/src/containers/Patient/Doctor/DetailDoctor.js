import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/Header/HomeHeader';
import HomeFooter from '../../HomePage/Footer/HomeFooter';
import './DetailDoctor.scss'
import { getDetailDoctorService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfo from './DoctorExtraInfo';



class DetailDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            detailDoctor: {},
            currentDoctorId: -1,
        })
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.setState({
                currentDoctorId: id
            })
            let res = await getDetailDoctorService(id)

            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
            // console.log(this.state.detailDoctor);

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        // console.log(this.props.match.params.id);
        let detailDoctor = this.state.detailDoctor;
        let nameVi, nameEn;

        if (detailDoctor && detailDoctor.positionData) {
            nameVi = `${detailDoctor.positionData.value_vi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
            nameEn = `${detailDoctor.positionData.value_en}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
        }
        let { language } = this.props
        return (
            <React.Fragment>
                <HomeHeader />
                <div className='container'>
                    <div className="Detail-Doctor">
                        <div className="doctor-info">
                            <img
                                src={detailDoctor.image}
                                alt="Doctor"
                                className="doctor-image"
                            />
                            <div className="doctor-description">
                                <h2>{language === LANGUAGES.VI ? nameVi : nameEn}</h2>
                                {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.description &&
                                    <span>{detailDoctor.Markdown.description}</span>}
                            </div>
                        </div>
                        <div className='doctor-content'>
                            <div className='doctor-right-content'>
                                <div className='doctor-schedule'>
                                    <DoctorSchedule
                                        currentDoctorId={this.state.currentDoctorId}
                                    />
                                </div>
                            </div>
                            <div className='doctor-left-content'>
                                <div className='doctor-extra-info'>
                                    <DoctorExtraInfo
                                        currentDoctorId={this.state.currentDoctorId}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='doctor-details-background'>
                    <div className='container'>
                        <div className="doctor-details">
                            {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML &&
                                <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
