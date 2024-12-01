import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../../../utils";
import { changeLanguageApp } from "../../../store/actions";

class HomeHeader extends Component {
    changeLanguage = (language) => {
        // console.log(language);
        this.props.changeLanguageAppRedux(language);
    };



    // make color
    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "https://static.elfsight.com/platform/platform.js";
    //     script.async = true;
    //     script.onload = () => {
    //         this.changeLanguage(this.props.lang)
    //         this.setState({ scriptLoaded: true });
    //         console.log("Loading :", this.props.lang);
    //         console.log("Elfsight script loaded.");
    //     };
    //     document.body.appendChild(script);
    // }
    render() {
        let language = this.props.lang;
        return (
            <div className="container-fluid home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <div className="header-bar">
                            <i class="fas fa-bars"></i>
                        </div>
                        <div className="header-logo"></div>
                        {/* <div>Booking Care</div> */}
                    </div>
                    <div className="mid-content">
                        <div className="header-service">
                            <div className="detail-service">
                                <span className="detail-service-choose">
                                    <FormattedMessage id="home-header.all" />
                                </span>
                            </div>
                        </div>
                        <div className="header-service">
                            <div className="detail-service">
                                <span className="detail-service-content">
                                    Tại Nhà
                                </span>
                            </div>
                        </div>
                        <div className="header-service">
                            <div className="detail-service">
                                <span className="detail-service-content">
                                    Tại Viện
                                </span>
                            </div>
                        </div>
                        <div className="header-service">
                            <div className="detail-service">
                                <span className="detail-service-content">
                                    Sống Khỏe
                                </span>
                            </div>
                        </div>
                        <div className="header-service header-search-box">
                            search
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="header-info">
                            <i class="fas fa-handshake"></i>
                            <p>
                                <FormattedMessage id="home-header.support" />
                            </p>
                        </div>
                        <div className="header-info">
                            <div className="history-book">
                                <i class="fas fa-history"></i>
                                <p>
                                    <FormattedMessage id="home-header.appointment" />
                                </p>
                            </div>
                        </div>
                        {/* <div className="make-color">
                            <div
                                className="elfsight-app-eb02f6eb-0039-4a52-b932-28e9a5de5b9d"
                                data-elfsight-app-lazy
                            ></div>
                        </div> */}
                        <div className="header-language">
                            <div className="language">
                                <div
                                    className={
                                        language === LANGUAGES.VI
                                            ? "Vie action"
                                            : "Vie"
                                    }
                                >
                                    <span
                                        onClick={() =>
                                            this.changeLanguage(LANGUAGES.VI)
                                        }
                                    >
                                        VN
                                    </span>
                                </div>
                                <div
                                    className={
                                        language === LANGUAGES.EN
                                            ? "En action"
                                            : "En"
                                    }
                                >
                                    <span
                                        onClick={() =>
                                            this.changeLanguage(LANGUAGES.EN)
                                        }
                                    >
                                        EN
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="header-info">
                            <div className="header-login">
                                <i class="fas fa-sign-in-alt"></i>
                                <p>login</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguageAppRedux: (language) =>
            dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

