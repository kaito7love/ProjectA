import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Section.scss'
import * as actions from '../../../store/actions'
import { LANGUAGES } from '../../../utils'
import img from './../../../images/doctor.png';

const sliderData = [
    { image: './images/104940-bs-vi.jpg', text: 'Doctor 1' },
    { image: './images/104940-bs-vi.jpg', text: 'Doctor 2' },
    { image: './images/104940-bs-vi.jpg', text: 'Doctor 3' },
    // Add more items as needed
];


class Doctor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }

    componentDidMount() {
        this.props.loadTopDoctor()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctors !== this.props.topDoctors) {
            this.setState({
                arrDoctors: this.props.topDoctors
            })
        }
    }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }

        let arrDoctors = this.state.arrDoctors
        let { language } = this.props
        // arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        console.log(arrDoctors);
        
        return (
            <div className='section-background-doctor'>
                <div className='container' >
                    <div className='section-doctor'>
                        <div className='section-content'>
                            <p className='section-text'>Bác Sĩ Nổi Bật</p>
                            <button className='section-btn'>
                                Xem Thêm
                            </button>
                        </div>
                        <div className='section-body'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {arrDoctors && arrDoctors.length > 0 &&
                                        arrDoctors.map((item, index) => {

                                            const nameVi = `${item.positionData.value_vi}, ${item.firstName}, ${item.lastName}`;
                                            const nameEn = `${item.positionData.value_en}, ${item.firstName}, ${item.lastName}`;
                                            console.log(nameVi);
                                            return (
                                                <div key={index} className='slider-items'>
                                                    <div className='slider-content'>
                                                        <img src={item.image} alt={item.text} className='slider-img' />
                                                        <div className='slider-img-doctor'></div>
                                                        <div className='slider-text'>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                        <div className='slider-text'>Chuyen khoa</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        topDoctors: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctor: () => dispatch(actions.fetchTopDoctor()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);