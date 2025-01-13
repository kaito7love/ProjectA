import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Section.scss'
import { FormattedMessage } from "react-intl";
class MedicalFacility extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2
        }
        return (
            <div className='section-background-medicalFacility'>
                <div className='container' >
                    <div className='section-medicalFacility'>
                        <div className='section-content'>
                            <p className='section-text'><FormattedMessage id="home-page.facility" /></p>
                            <button className='section-btn'>
                                Xem Thêm
                            </button>
                        </div>
                        <div className='section-body'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src="./images/160857-791310225786250729637925205413557167980544o.jpg" alt="React Image" className='slider-img' />
                                            <div className='slider-text'>Y Học Cổ Truyền</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src="./images/160857-791310225786250729637925205413557167980544o.jpg" alt="React Image" className='slider-img' />
                                            <div className='slider-text'>Y Học Cổ Truyền</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src="/images/160857-791310225786250729637925205413557167980544o.jpg" alt="React Image" className='slider-img' />
                                            <div className='slider-text'>Y Học Cổ Truyền</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src="./images/160857-791310225786250729637925205413557167980544o.jpg" alt="React Image" className='slider-img' />
                                            <div className='slider-text'>Y Học Cổ Truyền</div>
                                        </div>
                                    </div>
                                    <div className='slider-items'>
                                        <div className='slider-content'>
                                            <img src="./images/160857-791310225786250729637925205413557167980544o.jpg" alt="React Image" className='slider-img' />
                                            <div className='slider-text'>Y Học Cổ Truyền</div>
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
