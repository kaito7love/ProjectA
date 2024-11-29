import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Section.scss'

import img from './../../../images/160857-791310225786250729637925205413557167980544o.jpg';


class MedicalFacility extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2
        }
        return (
            <div className='section-background-medicalFacility'>
                <div className='container' >
                    <div className='section-medicalFacility'>
                        <div className='section-content'>
                            <p className='section-text'>Cơ Sở Y Tế</p>
                            <button className='section-btn'>
                                Xem Thêm
                            </button>
                        </div>
                        <div className='section-body'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src={img} className='slider-img'></img>
                                            <div className='slider-text'>Cơ Xương Khớp 2</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src={img} className='slider-img'></img>
                                            <div className='slider-text'>Cơ Xương Khớp 2</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src={img} className='slider-img'></img>
                                            <div className='slider-text'>Cơ Xương Khớp 2</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src={img} className='slider-img'></img>
                                            <div className='slider-text'>Cơ Xương Khớp 2</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src={img} className='slider-img'></img>
                                            <div className='slider-text'>Cơ Xương Khớp 2</div>
                                        </div>
                                    </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
