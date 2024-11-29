import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Section.scss'

import img from './../../../images/104940-bs-vi.jpg';


class Doctor extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
