import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { LANGUAGES } from '../../utils';

class Header extends Component {
    changeLanguage =  (language) => {
        // console.log(language);
        this.props.changeLanguageAppRedux(language);
    };

    render() {
        const { processLogout, lang ,userInfo} = this.props;
        console.log("Check user login",userInfo);
        
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>

                <div className='language'>
                    <span className='welcome'><FormattedMessage id="home-header.welcome"/> {userInfo && userInfo.firstName ? userInfo.firstName : ""}!   </span>
                    <span className={lang === LANGUAGES.VI ? "language-vi active" : "language-vi"}
                        onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span>
                    <span className={lang === LANGUAGES.EN ? "language-en active" : "language-en"}
                        onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>

                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
