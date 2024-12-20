import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/Header/HomeHeader';
import HomeFooter from '../../HomePage/Footer/HomeFooter';
import './DetailDoctor.scss'
import AppointmentSchedule from './AppointmentSchedule';
import { getDetailDoctorService } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';



class DetailDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            detailDoctor: {}
        })
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getDetailDoctorService(id)

            if (res && res.errCode === 0) {
                this.setState({
                    detailDoctor: res.data
                })
            }
            console.log(this.state.detailDoctor);

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        console.log(this.props.match.params.id);
        let item = this.state.detailDoctor;
        let nameVi, nameEn;

        if (item && item.positionData) {
            nameVi = `${item.positionData.value_vi}, ${item.lastName} ${item.firstName}`;
            nameEn = `${item.positionData.value_en}, ${item.firstName} ${item.lastName}`;
        }
        let { language } = this.props
        return (
            <React.Fragment>
                <HomeHeader />
                <div className='container'>
                    <div className="DetailDoctor">
                        <div className="doctor-info">
                            <img
                                src={item.image}
                                alt="Doctor"
                                className="doctor-image"
                            />
                            <div className="doctor-description">
                                <h2>{language === LANGUAGES.VI ? nameVi : nameEn}</h2>
                                {item && item.Markdown && item.Markdown.description &&
                                    <span>{item.Markdown.description}</span>}
                            </div>

                        </div>


                    </div>
                    {/* <AppointmentSchedule /> */}

                </div>
                <div className='doctor-details-background'>
                    <div className='container'>
                        <div className="doctor-details">
                            {item && item.Markdown && item.Markdown.contentHTML &&
                                <div dangerouslySetInnerHTML={{ __html: item.Markdown.contentHTML }}></div>
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
