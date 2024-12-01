import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss'

class HomeFooter extends Component {


    render() {
        return (
            <div className='container'>
                <div className='home-footer'>
                    <p>Copyright © 2025 Trường Đại Học Quốc Tế Miền Đông</p>
                    <p>Design by <a target='_blank' href='https://www.facebook.com/kaito7love'>Kaito Nguyen</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
