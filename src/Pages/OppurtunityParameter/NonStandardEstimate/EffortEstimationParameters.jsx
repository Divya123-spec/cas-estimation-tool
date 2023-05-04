import React from 'react';
import '../ApplicationTechnology.scss';
import { TextInput, TooltipIcon, SelectItem, Select } from 'carbon-components-react';
import { CheckmarkFilled32, WarningFilled16, ErrorFilled32, ErrorFilled16, WarningFilled32 } from '@carbon/icons-react';
import '../BasicInfo.scss';
import { NumberValidationPercentage, warningValue } from '../../../Utils/CommonFunc';
import {
    englishValue,
} from '../../../Utils/CommonFunc';
import { connect } from "react-redux";
const types = {
    None: '',
    'Text (text)': 'text'
};

//function for efoor estimATION IN Application

//const COUNTRY = [{ text: "US", value: "us" }, { text: "IN", value: "in" }]
class EffortEstimationParameters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onsitePercentage: '',
            offshorePercentage: '',
            upliftForGovernance: '',
            percentageOfPremiumSkillsOnsite: '',
            percentageOfPremiumSkillsOffshore: '',
            onsitePercentageLandedLocal: "",
            offshorePercentageIndiaEnabledForNow: "",
            nearshoreLocation: "",
            readOnlyStatus: false,
            FocusFlag: false,
            FocusValueIdFlag: '',
            error: {
                onsitePercentage: '',
                offshorePercentage: '',
                upliftForGovernance: '',
                percentageOfPremiumSkillsOnsite: '',
                percentageOfPremiumSkillsOffshore: '',
                onsitePercentageLandedLocal: "",
                offshorePercentageIndiaEnabledForNow: "",
                nearshoreLocation: "",
                percentageOfPremiumSkillsOnsiteerror: "",
                percentageOfPremiumSkillsOffshoreerror: "",
            }
        };
    }


    componentDidMount() {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        let readOnlyStatus = false;
        if (this.props.userestimateState.state === 'InReview' || this.props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (this.props.userestimateState.reviewerEmail === userData.email || this.props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }
        const { effortEstimationParameters } = this.props;
        let temErr = this.validationinfocheck(effortEstimationParameters);
        this.setState({

            onsitePercentage: effortEstimationParameters.onsitePercentage,
            offshorePercentage: effortEstimationParameters.offshorePercentage,
            upliftForGovernance: effortEstimationParameters.governanceUpliftPercentage,
            percentageOfPremiumSkillsOnsite: effortEstimationParameters.onsitePremiumSkillsPercentage,
            percentageOfPremiumSkillsOffshore: effortEstimationParameters.offshorePremiumSkillsPercentage,
            onsitePercentageLandedLocal: effortEstimationParameters.onsiteLocationDefaultSelection,
            offshorePercentageIndiaEnabledForNow: effortEstimationParameters.offshoreLocationDefaultSelection,
            nearshoreLocation: effortEstimationParameters.nearshoreLocationDefaultSelection,
            readOnlyStatus: readOnlyStatus,
            error: temErr

        })
    }
    validationinfocheck = (effortEstimationParameters) => {
        let tempError = {
            onsitePercentage: '',
            offshorePercentage: '',
            upliftForGovernance: '',
            percentageOfPremiumSkillsOnsite: '',
            percentageOfPremiumSkillsOffshore: '',
            onsitePercentageLandedLocal: "",
            offshorePercentageIndiaEnabledForNow: "",
            nearshoreLocation: "",
            percentageOfPremiumSkillsOnsiteerror: '',
            percentageOfPremiumSkillsOffshoreerror: '',
        }

        //onsite
        if (Number(effortEstimationParameters.onsitePercentage) < 0) {
            tempError.onsitePercentage = 'range 0-20';
        }
        else if (Number(effortEstimationParameters.onsitePercentage) > 20) {
            tempError.onsitePercentage = 'range 0-20'

        }
        else {
            tempError.onsitePercentage = "";
        }

        //offshore
        if (Number(effortEstimationParameters.offshorePercentage) < 0) {
            tempError.offshorePercentage = 'range 0-100';
        }
        else if (Number(effortEstimationParameters.offshorePercentage) > 100) {
            tempError.offshorePercentage = 'range 0-100'

        }
        else {
            tempError.offshorePercentage = "";
        }

        //uplift

        if (Number(effortEstimationParameters.governanceUpliftPercentage) < 4) {
            tempError.upliftForGovernance = 'range 4-8'
        }
        else if (Number(effortEstimationParameters.governanceUpliftPercentage) > 8) {
            tempError.upliftForGovernance = 'range 4-8'
        }
        else {
            tempError.upliftForGovernance = ""
        }

        //percentage onsite
        if ((Number(effortEstimationParameters.onsitePercentage)) - (Number(effortEstimationParameters.onsitePremiumSkillsPercentage)) < 0) {
            tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
        }
        else if (Number(effortEstimationParameters.onsitePremiumSkillsPercentage) < 0) {
            tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
        }
        else if (Number(effortEstimationParameters.onsitePremiumSkillsPercentage) > 10) {
            tempError.percentageOfPremiumSkillsOnsite = 'range 0-10';
        }

        else {
            tempError.percentageOfPremiumSkillsOnsite = ""
            tempError.percentageOfPremiumSkillsOnsiteerror = ""
        }

        //percentage offshore
        if ((Number(effortEstimationParameters.offshorePercentage)) - (Number(effortEstimationParameters.offshorePremiumSkillsPercentage)) < 0) {
            tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
        }
        else if (Number(effortEstimationParameters.offshorePremiumSkillsPercentage) < 0) {
            tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
        }
        else if (Number(effortEstimationParameters.offshorePremiumSkillsPercentage) > 25) {
            tempError.percentageOfPremiumSkillsOffshore = 'range 0-25';
        }

        else {
            tempError.percentageOfPremiumSkillsOffshore = ""
            tempError.percentageOfPremiumSkillsOffshoreerror = ""
        }

        return tempError;
    }
    componentDidUpdate() {
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        let readOnlyStatus = false;
        if (this.props.userestimateState.state === 'InReview' || this.props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (this.props.userestimateState.reviewerEmail === userData.email || this.props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }



        if (this.props.loaderBtnCost) {
            const { effortEstimationParameters } = this.props;
            let temErr = this.validationinfocheck(effortEstimationParameters);
            this.setState({
                onsitePercentage: effortEstimationParameters.onsitePercentage,
                offshorePercentage: effortEstimationParameters.offshorePercentage,
                upliftForGovernance: effortEstimationParameters.governanceUpliftPercentage,
                percentageOfPremiumSkillsOnsite: effortEstimationParameters.onsitePremiumSkillsPercentage,
                percentageOfPremiumSkillsOffshore: effortEstimationParameters.offshorePremiumSkillsPercentage,
                onsitePercentageLandedLocal: effortEstimationParameters.onsiteLocationDefaultSelection,
                offshorePercentageIndiaEnabledForNow: effortEstimationParameters.offshoreLocationDefaultSelection,
                nearshoreLocation: effortEstimationParameters.nearshoreLocationDefaultSelection,
                readOnlyStatus: readOnlyStatus,
                error: temErr
            })
        }

        this.props.HandlerBtn(false);
    }

    handlerFocus = (e) => {
        let valueChange = e.target.id;
        this.setState({
            ...this.state,
            FocusFlag: true,
            FocusValueIdFlag: valueChange
        })
    }
    // on blur function called
    handleInputChange = e => {
        e.preventDefault();
        let { name, value } = e.target;
        let newvalue = 0;
        let onsitePercent = this.state.onsitePercentage;
        let offShorePercent = this.state.offshorePercentage;
        if (e.target.value === '' || e.target.value === '%') {
            newvalue = 0;
        } else if (e.target.value === '0' || e.target.value === '0%') {
            newvalue = 0;
        } else {
            let value = (e.target.value.replace(/%/, ''))
            value = value.replace(/^0+/, 0);
            if (NumberValidationPercentage((value))) {
                newvalue = Number(value);

            }
            else {
                newvalue = this.state[name];
            }
        }


        const tempError = this.state.error;
        switch (name) {
            case "onsitePercentage":
                onsitePercent = Number(newvalue);
                offShorePercent = Number((100 - newvalue).toFixed(2));

                if (Number(newvalue) < 0) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(newvalue) > 20) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else {
                    tempError.onsitePercentage = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                if ((Number(newvalue)) - (Number(this.state.percentageOfPremiumSkillsOnsite)) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
                    tempError.percentageOfPremiumSkillsOnsite = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                if ((Number(offShorePercent) - (Number(this.state.percentageOfPremiumSkillsOffshore))) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
                    tempError.percentageOfPremiumSkillsOffshore = ""
                } else if (Number(this.state.percentageOfPremiumSkillsOffshore) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                } else {
                    tempError.offShorePercent = ''
                    tempError.percentageOfPremiumSkillsOffshoreerror = '';
                }

                // tempError.offShorePercent = offShorePercent < 0 ?
                //     englishValue('rangeNoApplication') :
                //     offShorePercent > 100 ? englishValue('rangeNoApplication') : "";
                break;
            case "offshorePercentage":

                offShorePercent = Number(newvalue);
                onsitePercent = Number((100 - newvalue).toFixed(2));;



                if (Number(newvalue) < 0) {
                    tempError.offshorePercentage = 'range 0-100'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }


                else if (Number(newvalue) > 100) {
                    tempError.offshorePercentage = 'range 0-100'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else {
                    tempError.offshorePercentage = ''
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }

                if (Number(onsitePercent) < 0) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(onsitePercent) > 20) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else {
                    tempError.onsitePercentage = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }

                if ((Number(newvalue)) - (Number(this.state.percentageOfPremiumSkillsOffshore)) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
                    tempError.percentageOfPremiumSkillsOffshore = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                if ((Number(onsitePercent) - (Number(this.state.percentageOfPremiumSkillsOnsite))) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
                    tempError.percentageOfPremiumSkillsOnsite = ""
                } else if (Number(this.state.percentageOfPremiumSkillsOnsite) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                } else {
                    tempError.percentageOfPremiumSkillsOnsite = ''
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }

                break;

            case "upliftForGovernance":
                if (Number(newvalue) < 4) {
                    tempError.upliftForGovernance = 'range 4-8'
                }
                else if (Number(newvalue) > 8) {
                    tempError.upliftForGovernance = 'range 4-8'
                }
                else {
                    tempError.upliftForGovernance = ""
                }
                break;
            case "percentageOfPremiumSkillsOnsite":
                if ((Number(this.state.onsitePercentage)) - (Number(newvalue)) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1'
                    tempError.percentageOfPremiumSkillsOnsite = ""
                }
                else if (Number(newvalue) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(newvalue) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }

                else {
                    tempError.percentageOfPremiumSkillsOnsite = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                break;
            case "percentageOfPremiumSkillsOffshore":
                if ((Number(this.state.offshorePercentage)) - (Number(newvalue)) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 1'
                    tempError.percentageOfPremiumSkillsOffshore = ""
                }
                else if (Number(newvalue) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(newvalue) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else {
                    tempError.percentageOfPremiumSkillsOffshore = ""
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                break;
            default:
                break;
        }
        if (newvalue === '') {
            newvalue = 0;
        }

        const temp = {
            ...this.state,
            onsitePercentage: onsitePercent,
            offshorePercentage: offShorePercent,
            [name]: newvalue,
        }
        this.setState({
            ...this.state,
            onsitePercentage: onsitePercent,
            offshorePercentage: offShorePercent,
            [name]: newvalue,
            FocusFlag: false,
            FocusValueIdFlag: '',
            error: tempError
        })
        let ok = true;
        let warning = false;
        let objValidationError = this.hasError();
        let hasWarningValidation = this.hasWarning();
        if (objValidationError) {
            ok = false
            warning = false
        }
        else if (hasWarningValidation) {
            ok = false
            warning = true
        } else {
            ok = true
            warning = false
        }

        const _effortEstimationParameters = {
            onsitePercentage: temp.onsitePercentage,
            offshorePercentage: temp.offshorePercentage,
            governanceUpliftPercentage: temp.upliftForGovernance,
            onsitePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOnsite,
            offshorePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOffshore,
            onsiteLocationDefaultSelection: temp.onsitePercentageLandedLocal,
            offshoreLocationDefaultSelection: temp.offshorePercentageIndiaEnabledForNow,
            nearshoreLocationDefaultSelection: temp.nearshoreLocation,
            uiStatus: {
                iconStatus: {
                    ok: ok,
                    warning: warning,
                    warningMessage: ""
                }
            }
        }

        // Start JIRA https://jsw.ibm.com/browse/CMIWET-618 
        // adding a flag so that there should be no handleEffortEstimationParams method call if value is same so that output and intermediate output was getting disabled
        let flagEffort = false;
        switch (name) {
            case "onsitePercentage":
                if (Number(newvalue) != this.state.onsitePercentage) {
                    flagEffort = true;
                }
                break;
            case "offshorePercentage":
                if (Number(newvalue) != this.state.offshorePercentage) {
                    flagEffort = true;
                }
                break;

            case "upliftForGovernance":
                if (Number(newvalue) != this.state.upliftForGovernance) {
                    flagEffort = true;
                }
                break;
            case "percentageOfPremiumSkillsOnsite":
                if (Number(newvalue) != this.state.percentageOfPremiumSkillsOnsite) {
                    flagEffort = true;
                }
                break;
            case "percentageOfPremiumSkillsOffshore":
                if (Number(newvalue) != this.state.percentageOfPremiumSkillsOffshore) {
                    flagEffort = true;
                }
                break;
            default:
                break;
        }
        if (flagEffort) {
            this.props.handleEffortEstimationParams(_effortEstimationParameters);
        }

        // END
    };
    //on change function called
    handleInputChangeChnage = e => {
        e.preventDefault();
        let { name, value } = e.target;
        let newvalue = 0;
        let onsitePercent = this.state.onsitePercentage;
        let offShorePercent = this.state.offshorePercentage;
        if (e.target.value === '' || e.target.value === '%') {
            newvalue = 0;
        } else if (e.target.value === '0' || e.target.value === '0%') {
            newvalue = 0;
        } else {
            let value = (e.target.value.replace(/%/, ''))
            value = value.replace(/^0+/, 0);
            if (NumberValidationPercentage((value))) {
                newvalue = Number(value);

            }
            else {
                newvalue = this.state[name];
            }
        }
        const tempError = this.state.error;
        switch (name) {
            case "onsitePercentage":
                onsitePercent = Number(newvalue);
                offShorePercent = Number((100 - newvalue).toFixed(2));

                if (Number(newvalue) < 0) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(newvalue) > 20) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else {
                    tempError.onsitePercentage = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                if ((Number(newvalue)) - (Number(this.state.percentageOfPremiumSkillsOnsite)) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
                    tempError.percentageOfPremiumSkillsOnsite = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                if ((Number(offShorePercent) - (Number(this.state.percentageOfPremiumSkillsOffshore))) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
                    tempError.percentageOfPremiumSkillsOffshore = ""
                } else if (Number(this.state.percentageOfPremiumSkillsOffshore) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                } else {
                    tempError.offShorePercent = ''
                    tempError.percentageOfPremiumSkillsOffshoreerror = '';
                }

                // tempError.offShorePercent = offShorePercent < 0 ?
                //     englishValue('rangeNoApplication') :
                //     offShorePercent > 100 ? englishValue('rangeNoApplication') : "";
                break;
            case "offshorePercentage":

                offShorePercent = Number(newvalue);;
                onsitePercent = Number((100 - newvalue).toFixed(2));;



                if (Number(newvalue) < 0) {
                    tempError.offshorePercentage = 'range 0-100'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }


                else if (Number(newvalue) > 100) {
                    tempError.offshorePercentage = 'range 0-100'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else {
                    tempError.offshorePercentage = ''
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }

                if (Number(onsitePercent) < 0) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(onsitePercent) > 20) {
                    tempError.onsitePercentage = 'range 0-20'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else {
                    tempError.onsitePercentage = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }

                if ((Number(newvalue)) - (Number(this.state.percentageOfPremiumSkillsOffshore)) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
                    tempError.percentageOfPremiumSkillsOffshore = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOffshore) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                if ((Number(onsitePercent) - (Number(this.state.percentageOfPremiumSkillsOnsite))) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
                    tempError.percentageOfPremiumSkillsOnsite = ""
                } else if (Number(this.state.percentageOfPremiumSkillsOnsite) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(this.state.percentageOfPremiumSkillsOnsite) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                } else {
                    tempError.percentageOfPremiumSkillsOnsite = ''
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }


                break;

            case "upliftForGovernance":
                if (Number(newvalue) < 4) {
                    tempError.upliftForGovernance = 'range 4-8'
                }
                else if (Number(newvalue) > 8) {
                    tempError.upliftForGovernance = 'range 4-8'
                }
                else {
                    tempError.upliftForGovernance = ""
                }
                break;
            case "percentageOfPremiumSkillsOnsite":
                if ((Number(this.state.onsitePercentage)) - (Number(newvalue)) < 0) {
                    tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1'
                    tempError.percentageOfPremiumSkillsOnsite = ""
                }
                else if (Number(newvalue) < 0) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                else if (Number(newvalue) > 10) {
                    tempError.percentageOfPremiumSkillsOnsite = 'range 0-10'
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }

                else {
                    tempError.percentageOfPremiumSkillsOnsite = ""
                    tempError.percentageOfPremiumSkillsOnsiteerror = ""
                }
                break;
            case "percentageOfPremiumSkillsOffshore":
                if ((Number(this.state.offshorePercentage)) - (Number(newvalue)) < 0) {
                    tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 1'
                    tempError.percentageOfPremiumSkillsOffshore = ""
                }
                else if (Number(newvalue) < 0) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else if (Number(newvalue) > 25) {
                    tempError.percentageOfPremiumSkillsOffshore = 'range 0 -25'
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                else {
                    tempError.percentageOfPremiumSkillsOffshore = ""
                    tempError.percentageOfPremiumSkillsOffshoreerror = ""
                }
                break;
            default:
                break;
        }
        if (newvalue === '') {
            newvalue = 0;
        }

        const temp = {
            ...this.state,
            onsitePercentage: onsitePercent,
            offshorePercentage: offShorePercent,
            [name]: newvalue,
        }
        this.setState({
            ...this.state,
            onsitePercentage: onsitePercent,
            offshorePercentage: offShorePercent,
            [name]: newvalue,
            FocusFlag: true,
            FocusValueIdFlag: e.target.id,
            error: tempError
        })
        let ok = true;
        let warning = false;
        let objValidationError = this.hasError();
        let hasWarningValidation = this.hasWarning();
        if (objValidationError) {
            ok = false
            warning = false
        }
        else if (hasWarningValidation) {
            ok = false
            warning = true
        } else {
            ok = true
            warning = false
        }

        const _effortEstimationParameters = {
            onsitePercentage: temp.onsitePercentage,
            offshorePercentage: temp.offshorePercentage,
            governanceUpliftPercentage: temp.upliftForGovernance,
            onsitePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOnsite,
            offshorePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOffshore,
            onsiteLocationDefaultSelection: temp.onsitePercentageLandedLocal,
            offshoreLocationDefaultSelection: temp.offshorePercentageIndiaEnabledForNow,
            nearshoreLocationDefaultSelection: temp.nearshoreLocation,
            uiStatus: {
                iconStatus: {
                    ok: ok,
                    warning: warning,
                    warningMessage: ""
                }
            }
        }
        this.props.handleEffortEstimationParams(_effortEstimationParameters);
    };
    handleSelectChange = e => {
        const { name, value } = e.target;
        let onsitePercent = this.state.onsitePercentage;
        let offShorePercent = this.state.offshorePercentage;
        let percentageOfPremiumSkillsOffshore = this.state.percentageOfPremiumSkillsOffshore
        const tempError = this.state.error;
        let temp = ''
        //effort estimate paramter if offshoredropdown is none
        if (value === 'cicCountryNone') {
            offShorePercent = 0;
            onsitePercent = Number((100 - offShorePercent).toFixed(2));
            percentageOfPremiumSkillsOffshore = 0;
            if (offShorePercent < 0) {
                tempError.offshorePercentage = 'range 0-100';
                tempError.percentageOfPremiumSkillsOffshoreerror = "";
            }

            else if (offShorePercent > 100) {
                tempError.offshorePercentage = 'range 0-100'
                tempError.percentageOfPremiumSkillsOffshoreerror = ""
            }
            else {
                tempError.offshorePercentage = ''
                tempError.percentageOfPremiumSkillsOffshoreerror = ""
            }

            if (Number(onsitePercent) < 0) {
                tempError.onsitePercentage = 'range 0-20'
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            }
            else if (Number(onsitePercent) > 20) {
                tempError.onsitePercentage = 'range 0-20'
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            }
            else {
                tempError.onsitePercentage = ""
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            }

            if ((Number(offShorePercent)) - (Number(this.state.percentageOfPremiumSkillsOffshore)) < 0) {
                //  tempError.percentageOfPremiumSkillsOffshoreerror = 'refer note 2';
                tempError.percentageOfPremiumSkillsOffshore = ""
            }
            else if (Number(this.state.percentageOfPremiumSkillsOffshore) < 0) {
                tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                tempError.percentageOfPremiumSkillsOffshoreerror = ""
            }
            else if (Number(this.state.percentageOfPremiumSkillsOffshore) > 25) {
                tempError.percentageOfPremiumSkillsOffshore = 'range 0-25'
                tempError.percentageOfPremiumSkillsOffshoreerror = ""
            }
            if ((Number(onsitePercent) - (Number(this.state.percentageOfPremiumSkillsOnsite))) < 0) {
                tempError.percentageOfPremiumSkillsOnsiteerror = 'refer note 1';
                tempError.percentageOfPremiumSkillsOnsite = ""
            } else if (Number(this.state.percentageOfPremiumSkillsOnsite) < 0) {
                tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            }
            else if (Number(this.state.percentageOfPremiumSkillsOnsite) > 10) {
                tempError.percentageOfPremiumSkillsOnsite = 'range 0 -10'
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            } else {
                tempError.percentageOfPremiumSkillsOnsite = ''
                tempError.percentageOfPremiumSkillsOnsiteerror = ""
            }

            temp = {
                ...this.state,
                onsitePercentage: onsitePercent,
                offshorePercentage: offShorePercent,
                percentageOfPremiumSkillsOffshore: percentageOfPremiumSkillsOffshore,
                [name]: value
            }
            this.setState({
                ...this.state,
                onsitePercentage: onsitePercent,
                offshorePercentage: offShorePercent,
                percentageOfPremiumSkillsOffshore: percentageOfPremiumSkillsOffshore,
                error: tempError
            })

        }
        else {
            temp = {
                ...this.state,
                [name]: value
            }


            this.setState(temp);
        }

        let ok = true;
        let warning = false;
        let objValidationError = this.hasError();
        let hasWarningValidation = this.hasWarning();
        if (objValidationError) {
            ok = false
            warning = false
        }
        else if (hasWarningValidation) {
            ok = false
            warning = true
        } else {
            ok = true
            warning = false
        }

        const _effortEstimationParameters = {
            onsitePercentage: temp.onsitePercentage,
            offshorePercentage: temp.offshorePercentage,
            governanceUpliftPercentage: temp.upliftForGovernance,
            onsitePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOnsite,
            offshorePremiumSkillsPercentage: temp.percentageOfPremiumSkillsOffshore,
            onsiteLocationDefaultSelection: temp.onsitePercentageLandedLocal,
            offshoreLocationDefaultSelection: temp.offshorePercentageIndiaEnabledForNow,
            nearshoreLocationDefaultSelection: temp.nearshoreLocation,
            uiStatus: {
                iconStatus: {
                    ok: ok,
                    warning: warning,
                    warningMessage: ""
                }
            }

        }

        // Start JIRA https://jsw.ibm.com/browse/CMIWET-618 
        // adding a flag so that there should be no handleEffortEstimationParams method call if value is same so that output and intermediate output was getting disabled
        let flagEffort = false;
        switch (name) {
            case "onsitePercentageLandedLocal":
                if ((value) != this.state.onsitePercentageLandedLocal) {
                    flagEffort = true;
                }
                break;
            case "offshorePercentageIndiaEnabledForNow":
                if ((value) != this.state.offshorePercentageIndiaEnabledForNow) {
                    flagEffort = true;
                }
                break;
            case "nearshoreLocation":
                if ((value) != this.state.nearshoreLocation) {
                    flagEffort = true;
                }
                break;
            default:
                break;
        }
        if (flagEffort) {
            this.props.handleEffortEstimationParams(_effortEstimationParameters);
        }

        //END
    }
    hasError = () => {
        let errormain = false;
        // for (const key in this.state.error) {
        //     if (key == 'percentageOfPremiumSkillsOnsiteerror' || key == 'percentageOfPremiumSkillsOffshoreerror') {
        //         if (this.state.error[key].length > 0) {
        //             return {
        //                 warning: false,
        //                 error: true
        //             };
        //             break;
        //         }
        //     }
        //     else {
        //         if (this.state.error[key].length > 0) {
        //             return {
        //                 warning: true,
        //                 error: false
        //             };
        //         }
        //     }

        // }
        for (const key in this.state.error) {
            if (key == 'percentageOfPremiumSkillsOnsiteerror' || key == 'percentageOfPremiumSkillsOffshoreerror') {
                if (this.state.error[key].length > 0) {
                    errormain = true;
                }
            }
        }

        return errormain
    }
    hasWarning = () => {
        let warning = false;
        // for (const key in this.state.error) {
        //     if (key == 'percentageOfPremiumSkillsOnsiteerror' || key == 'percentageOfPremiumSkillsOffshoreerror') {
        //         if (this.state.error[key].length > 0) {
        //             return {
        //                 warning: false,
        //                 error: true
        //             };
        //             break;
        //         }
        //     }
        //     else {
        //         if (this.state.error[key].length > 0) {
        //             return {
        //                 warning: true,
        //                 error: false
        //             };
        //         }
        //     }

        // }
        for (const key in this.state.error) {
            if (key !== 'percentageOfPremiumSkillsOnsiteerror' || key !== 'percentageOfPremiumSkillsOffshoreerror') {
                if (this.state.error[key].length > 0) {
                    warning = true;
                }
            }

        }

        return warning
    }

    render() {
        //let COUNTRY=[];
        let OnsiteLocationOption = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.onsiteLocation;
        let OffshoreLocationOption = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.offshoreLocation;
        let NearshoreLocationOption = this.props.userDropDownData.defaultDropDown.response.defaultDropdown.nearshoreLocation;
        // let securityOptions = this.props.dropDownList.securityToolIntegrationClientVsIBM.map((item) =>
        //     <SelectItem key={item.key} value={item.key} text={item.value} />
        // );
        // let NearshoreLocationOption = this.props.dropDownList.securityToolIntegrationClientVsIBM.map((item) =>
        //     <SelectItem key={item.key} value={item.key} text={item.value} />
        // );
        // let OnsiteLocationOption = [{ text: "US", value: "us" }, { text: "IN", value: "in" }]
        //  let OffshoreLocationOption = [{ text: "US", value: "us" }, { text: "IN", value: "in" }]


        // effortEstimationParameters
        let readOnlyStatusData = this.state.readOnlyStatus ? 'readonly' : ''
        return (
            <div className="basic-class" style={{ marginBottom: "30px" }}>
                {this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 || this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ?
                    (<p className="efortheader-class">
                        {englishValue("effort_estimation_parameters")}<ErrorFilled32 className="error-icon" />
                    </p>) :
                    <>
                        {this.state.error.onsitePercentage.length > 0 || this.state.error.offshorePercentage.length > 0 || this.state.error.upliftForGovernance.length > 0 ||
                            this.state.error.percentageOfPremiumSkillsOnsite.length > 0 || this.state.error.percentageOfPremiumSkillsOffshore.length > 0 ?
                            (<p className="efortheader-class">
                                {englishValue("effort_estimation_parameters")}<WarningFilled32 className="error-icon effort_estimation_parameters-error-icon" />
                            </p>) :
                            <p className="efortheader-class" >
                                {englishValue("effort_estimation_parameters")}<CheckmarkFilled32 className="tick-icon" />
                            </p>
                        }
                    </>
                }
                <div className="effort-estimatiom-params">
                    <div className="child select-option">
                        <Select
                            labelText={englishValue('Onsite_percentage_Landed_Local')}
                            name="onsitePercentageLandedLocal"
                            defaultValue="placeholder-item"
                            // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                            disabled={this.state.readOnlyStatus}
                            value={this.state.onsitePercentageLandedLocal}
                            onChange={this.handleSelectChange}
                            onBlur={this.handleSelectChange}>
                            {
                                OnsiteLocationOption.map(item => <SelectItem key={item.key} value={item.key} text={item.value} />)
                            }
                        </Select>
                        {
                            this.state.error.onsitePercentageLandedLocal.length > 0 &&
                            <div className="infoIcon">
                                <WarningFilled16 />
                            </div>
                        }
                        {
                            this.state.error.onsitePercentageLandedLocal.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange"></span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange"></span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="child select-option">
                        <Select
                            labelText={englishValue('Offshore_percentage_India_enabled_for_now')}
                            name="offshorePercentageIndiaEnabledForNow"
                            defaultValue="placeholder-item"
                            // adding diabled true or false for in review/approved/rework  JIRA - bug id 621 /622
                            disabled={this.state.readOnlyStatus}
                            value={this.state.offshorePercentageIndiaEnabledForNow}
                            onChange={this.handleSelectChange}
                            onBlur={this.handleSelectChange}>
                            {
                                OffshoreLocationOption.map(item => <SelectItem key={item.key} value={item.key} text={item.value} />)
                            }
                        </Select>
                        {
                            this.state.error.offshorePercentageIndiaEnabledForNow.length > 0 &&
                            <div className="infoIcon">
                                <WarningFilled16 />
                            </div>
                        }
                        {
                            this.state.error.offshorePercentageIndiaEnabledForNow.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange"></span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange"></span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="child select-option">
                        <Select
                            labelText={englishValue('Nearshore')}
                            name="nearshoreLocation"
                            defaultValue="placeholder-item"
                            disabled={this.state.readOnlyStatus}
                            value={this.state.nearshoreLocation}
                            onChange={this.handleSelectChange}
                            onBlur={this.handleSelectChange}>
                            {
                                NearshoreLocationOption.map(item => <SelectItem key={item.key} value={item.key} text={item.value} />)
                            }
                        </Select>
                        {
                            this.state.error.nearshoreLocation.length > 0 &&
                            <div className="infoIcon">
                                <WarningFilled16 />
                            </div>
                        }
                        {
                            this.state.error.nearshoreLocation.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange"></span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange"></span>
                                    </div>
                                )
                        }
                    </div>

                </div>
                <div className="effort-estimatiom-params">
                    <div className="child">

                        {this.state.FocusFlag && this.state.FocusValueIdFlag == 'onsitePercentage' ?
                            <TextInput
                                labelText="Onsite percentage (Landed + Local + NearShore)"
                                type={(types, 'text')}
                                value={`${this.state.onsitePercentage}`}
                                onBlur={this.handleInputChange}
                                id='onsitePercentage'
                                name="onsitePercentage"
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}


                            /> :
                            <TextInput
                                labelText="Onsite percentage (Landed + Local + NearShore)"
                                type={(types, 'text')}
                                value={`${this.state.onsitePercentage}%`}
                                onBlur={this.handleInputChange}
                                name="onsitePercentage"
                                id='onsitePercentage'
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            />}
                        {
                            this.state.error.onsitePercentage.length > 0 &&
                            <div className="infoIcon">


                                <WarningFilled16 />
                            </div>
                        }

                        {
                            this.state.error.onsitePercentage.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange">{englishValue('onsite_percentage_range')}</span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange">{englishValue('onsite_percentage_range')}</span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="child">

                        {this.state.FocusFlag && this.state.FocusValueIdFlag == 'offshorePercentage' ?
                            <TextInput
                                labelText="Offshore percentage (India enabled for now)"
                                type={(types, 'text')}
                                value={`${this.state.offshorePercentage}`}
                                onBlur={this.handleInputChange}
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                id='offshorePercentage'
                                name='offshorePercentage'
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            // disabled={this.state.offshorePercentageIndiaEnabledForNow=='cicCountryNone'}
                            /> :
                            <TextInput
                                labelText="Offshore percentage (India enabled for now)"
                                type={(types, 'text')}
                                value={`${this.state.offshorePercentage}%`}
                                onBlur={this.handleInputChange}
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                id='offshorePercentage'
                                name='offshorePercentage'
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            //  disabled={this.state.offshorePercentageIndiaEnabledForNow=='cicCountryNone'}

                            />}
                        {
                            this.state.error.offshorePercentage.length > 0 &&
                            <div className="infoIcon">
                                <WarningFilled16 />

                            </div>
                        }
                        {
                            this.state.error.offshorePercentage.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange">{englishValue('offshore_percentage_range')}</span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange">{englishValue('offshore_percentage_range')}</span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="child">
                        {this.state.FocusFlag && this.state.FocusValueIdFlag == 'upliftForGovernance' ?
                            <TextInput
                                labelText={englishValue('uplift_for_governance')}
                                type={(types, 'text')}
                                value={`${this.state.upliftForGovernance}`}
                                onBlur={this.handleInputChange}
                                readOnly={this.state.readOnlyStatus}
                                id='upliftForGovernance'
                                name="upliftForGovernance"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            /> : <TextInput
                                labelText={englishValue('uplift_for_governance')}
                                type={(types, 'text')}
                                value={`${this.state.upliftForGovernance}%`}
                                onBlur={this.handleInputChange}
                                readOnly={this.state.readOnlyStatus}
                                id='upliftForGovernance'
                                name="upliftForGovernance"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            />}
                        {
                            this.state.error.upliftForGovernance.length > 0 &&
                            <div className="infoIcon">


                                <WarningFilled16 />

                            </div>
                        }
                        {
                            this.state.error.upliftForGovernance.length > 0 ?
                                (
                                    <div className="HelperRange">
                                        <span className="errorRange">{englishValue('uplift_for_governance_range')}</span>
                                    </div>
                                ) :
                                (
                                    <div className="HelperRange">
                                        <span className="normalRange">{englishValue('uplift_for_governance_range')}</span>
                                    </div>
                                )
                        }
                    </div>
                    <div className="child">

                        {this.state.FocusFlag && this.state.FocusValueIdFlag == 'percentageOfPremiumSkillsOnsite' ?
                            <TextInput
                                className={this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 ? 'percentageOnsiteError' : ''}
                                labelText={englishValue('percentage_of_premium_skills_onsite')}
                                type={(types, 'text')}
                                value={`${this.state.percentageOfPremiumSkillsOnsite}`}
                                readOnly={this.state.readOnlyStatus}
                                // value={this.state.percentageOfPremiumSkillsOnsite}
                                onBlur={this.handleInputChange}
                                id="percentageOfPremiumSkillsOnsite"
                                name="percentageOfPremiumSkillsOnsite"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            /> :

                            <TextInput
                                className={this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 ? 'percentageOnsiteError' : ''}
                                labelText={englishValue('percentage_of_premium_skills_onsite')}
                                type={(types, 'text')}
                                value={`${this.state.percentageOfPremiumSkillsOnsite}%`}
                                readOnly={this.state.readOnlyStatus}
                                // value={this.state.percentageOfPremiumSkillsOnsite}
                                onBlur={this.handleInputChange}
                                id="percentageOfPremiumSkillsOnsite"
                                name="percentageOfPremiumSkillsOnsite"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            />}

                        {
                            this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 ?
                                (<div className="errorIcon">
                                    <ErrorFilled16 />
                                </div>) :
                                <>
                                    {
                                        this.state.error.percentageOfPremiumSkillsOnsite.length > 0 ?
                                            <div className="infoIcon">

                                                <WarningFilled16 />

                                            </div> : ''
                                    }
                                </>
                        }
                        {this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 ?
                            (
                                <div className="HelperRange">
                                    <span className="errorClassRange">{englishValue('percentage_of_premium_skills_onsite_error')}</span>
                                </div>
                            ) :
                            <>
                                {this.state.error.percentageOfPremiumSkillsOnsite.length > 0 ?
                                    (
                                        <div className="HelperRange">
                                            <span className="errorRange">{englishValue('percentage_of_premium_skills_onsite_range')}</span>
                                        </div>
                                    ) :
                                    (
                                        <div className="HelperRange">
                                            <span className="normalRange">{englishValue('percentage_of_premium_skills_onsite_range')}</span>
                                        </div>
                                    )
                                }
                            </>
                        }

                    </div>
                    <div className="child">

                        {this.state.FocusFlag && this.state.FocusValueIdFlag == 'percentageOfPremiumSkillsOffshore' ?

                            <TextInput
                                className={this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ? 'percentageOffhsoreError' : ''}
                                labelText={englishValue('percentage_of_premium_skills_offshore')}
                                type={(types, 'text')}

                                value={`${this.state.percentageOfPremiumSkillsOffshore}`}
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                onBlur={this.handleInputChange}
                                id='percentageOfPremiumSkillsOffshore'
                                name="percentageOfPremiumSkillsOffshore"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            /> :
                            <TextInput
                                className={this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ? 'percentageOffhsoreError' : ''}
                                labelText={englishValue('percentage_of_premium_skills_offshore')}
                                type={(types, 'text')}
                                value={`${this.state.percentageOfPremiumSkillsOffshore}%`}
                                // value={this.state.percentageOfPremiumSkillsOffshore}
                                readOnly={this.state.readOnlyStatus || this.state.offshorePercentageIndiaEnabledForNow == 'cicCountryNone'}
                                onBlur={this.handleInputChange}
                                id='percentageOfPremiumSkillsOffshore'
                                name="percentageOfPremiumSkillsOffshore"
                                onChange={this.handleInputChangeChnage}
                                onFocus={this.handlerFocus}
                            //     disabled={ this.state.offshorePercentageIndiaEnabledForNow=='cicCountryNone'} 

                            />}

                        {
                            this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ?
                                (<div className="errorIcon">
                                    <ErrorFilled16 />
                                </div>) :
                                <>
                                    {
                                        this.state.error.percentageOfPremiumSkillsOffshore.length > 0 ?
                                            <div className="infoIcon">
                                                <WarningFilled16 />
                                            </div> : ''
                                    }
                                </>
                        }
                        {this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ?
                            (
                                <div className="HelperRange">
                                    <span className="errorClassRange">{englishValue('percentage_of_premium_skills_offshore_error')}</span>
                                </div>
                            ) :
                            <>
                                {this.state.error.percentageOfPremiumSkillsOffshore.length > 0 ?
                                    (
                                        <div className="HelperRange">
                                            <span className="errorRange">{englishValue('percentage_of_premium_skills_offshore_range')}</span>
                                        </div>
                                    ) :
                                    (
                                        <div className="HelperRange">
                                            <span className="normalRange">{englishValue('percentage_of_premium_skills_offshore_range')}</span>
                                        </div>
                                    )
                                }
                            </>
                        }
                    </div>

                </div>

                <div className='effortnotes'>
                    <p>Note:</p>
                    <p className={this.state.error.percentageOfPremiumSkillsOnsiteerror.length > 0 ? 'errorTextColor' : ''}>1.Value of ‘Percentage of premium skills: Onsite’ should be a positive number and less than / equal to the value of ‘Onsite percentage (Landed + Local + NearShore)</p>
                    <p className={this.state.error.percentageOfPremiumSkillsOffshoreerror.length > 0 ? 'errorTextColor' : ''}>2.Value of ‘Percentage of premium skills: Offshrore’ should be a positive number and less than / equal to the value of ‘Offshore percentage (India enabled for now)’</p>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => ({
    effortEstimationParameters: state.userInputData.defaultInputData.response.estimate.userInputs.effortEstimationParameters
})

export default connect(mapStateToProps)(EffortEstimationParameters);