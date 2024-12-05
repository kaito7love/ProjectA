import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils';
import * as actions from '../../store/actions'


class UserRedux extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gender: [],
            position: [],
            role: [],
        }
    }


    async componentDidMount() {
        this.props.getGender()

        // try {
        //     let res = await getAllCodeService('gender')
        //     console.log("check gender", res);
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             gender: res.datas
        //         })
        //     }
        // } catch (error) {
        //     console.log(error);
        // }

    }
    componentDidUpdate(prevProps, prevStates, snapShot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                gender: this.props.genderRedux,
            })
        }
    }
    render() {
        let genders = this.state.gender;        
        let language = this.props.lang;
        return (
            <>
                <div className="user-redux-container" >
                    <div className='title'>Admin Manage</div>
                    <div className='user-redux-body'>
                        <div className='container'>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id='form.email' /></label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id='form.password' /></label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id='form.firstName' /></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id='form.lastName' /></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label"><FormattedMessage id='form.address' /></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label"><FormattedMessage id='form.phone' /></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label"><FormattedMessage id='form.gender' /></label>
                                    <select className="form-select">
                                        {genders && genders.length > 0 &&
                                            genders.map((item, index) => {
                                                console.log(item);
                                                return (
                                                    <option key={index}>
                                                        {language === LANGUAGES.VI ? item.value_vi : item.value_en}
                                                    </option>
                                                )
                                            })};

                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label"><FormattedMessage id='form.role' /></label>
                                    <select className="form-select">
                                        <option selected>Patient</option>
                                        <option>Doctor</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary"><FormattedMessage id='form.save' /></button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        lang: state.app.language,
        genderRedux: state.admin.genders,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGender: () => dispatch(actions.fetchGenderStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
