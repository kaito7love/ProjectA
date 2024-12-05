import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss'

class SocialMedia extends Component {


    render() {
        return (
            <div className='section-background-social'>
                <div className='container'>
                    <div className='section-social'>
                        <div className='section-content'>
                            <p className='section-text'>Truyền thông nói về BookingCare</p>
                        </div>
                        <div className='section-body'>
                            <div className="social-left">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/FyDQljKtWnI?si=LOc5M6G-9pBwcDv7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <div className="social-right">
                                <div className='media-left'>
                                    <img src='./images/vnexpress.png' className='slider-img'></img>
                                </div>
                                <div className='media-right'>
                                    {/* <img src={img} className='slider-img'></img> */}
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SocialMedia);
