import React, { Component } from 'react';
import { connect } from "react-redux";
import './DoctorExtraInfo.scss'
import { LANGUAGES } from '../../../utils';
import { getExtraInfoDoctorById } from '../../../services/userService'

class DoctorExtraInfo extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            isShowPriceInfo: false,
            extraDoctorData: ''
        })
    }

    async componentDidMount() {

        let res = await getExtraInfoDoctorById(this.props.currentDoctorId)
        console.log(res);

        if (res && res.errCode === 0) {
            this.setState({
                extraDoctorData: res.data
            })
        }

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.language !== this.props.language) {

        }
        if (prevProps.currentDoctorId !== this.props.currentDoctorId) {
            let res = await getExtraInfoDoctorById(this.props.currentDoctorId)
            // console.log(res);

            if (res && res.errCode === 0) {
                this.setState({
                    extraDoctorData: res.data
                })
            }
        }
    }

    showDetailInfo = (status) => {
        this.setState({
            isShowPriceInfo: status
        })
    }
    render() {
        // console.log(this.props.match.params.id);
        let { language } = this.props
        let { isShowPriceInfo, extraDoctorData } = this.state

        return (
            <React.Fragment>

                <div className="clinic-info">
                    {/* Address Section */}
                    <div className="section">
                        <h2>ĐỊA CHỈ KHÁM</h2>
                        <p className="clinic-name">
                            {extraDoctorData && extraDoctorData.nameClinic ? extraDoctorData.nameClinic : ""}
                        </p>
                        <p className="clinic-address">
                            {extraDoctorData && extraDoctorData.addressClinic ? extraDoctorData.addressClinic : ""}
                        </p>
                    </div>

                    {isShowPriceInfo === false &&
                        <div className="section">
                            <h2>GIÁ KHÁM:
                                <span className="price-value">
                                {extraDoctorData && extraDoctorData.priceTypeData ? extraDoctorData.priceTypeData.value_vi : ""}
                                </span>
                            </h2>
                            <span class="toggle" onClick={(status) => this.showDetailInfo(true)}>Xem thêm</span>
                        </div>
                    }
                    {isShowPriceInfo === true &&
                        <div className="section">
                            <h2>GIÁ KHÁM:</h2>
                            <div className='section-price'>
                                <span className="price-label">Giá khám :  </span>
                                <span className="price-value"> {extraDoctorData && extraDoctorData.priceTypeData ? extraDoctorData.priceTypeData.value_vi : ""}</span>
                                <div className='note'>{extraDoctorData && extraDoctorData.note ? extraDoctorData.note : ""}</div>

                                <div className="payment-methods">
                                {extraDoctorData && extraDoctorData.paymentTypeData ? extraDoctorData.paymentTypeData.value_vi : ""}
                                </div>
                            </div>
                            <span class="toggle" onClick={(status) => this.showDetailInfo(false)}>Thu gọn</span>
                        </div>
                    }
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfo);
