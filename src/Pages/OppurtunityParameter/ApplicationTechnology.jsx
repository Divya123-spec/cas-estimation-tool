import React from 'react';
import './ApplicationTechnology.scss';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell, SelectItem, Select, TextInput, Button, TooltipIcon, DatePicker, DatePickerInput } from 'carbon-components-react';
import { Add16 } from '@carbon/icons-react';
import { CheckmarkOutline16, ErrorOutline16 } from '../../Components/CommonFuncs/Icons';
import { CheckmarkFilled32 } from '@carbon/icons-react';
import { ErrorFilled32 } from '@carbon/icons-react';
import DeleteModal from './DeleteModal';
import './BasicInfo.scss';
import { randomID, NumberValidation, englishValue, NumberValidationPercentage, OnlyAllowNumberValidationFivedeigits, DateBackendFormat, DateFormatLocalString, OnlyAllowNumberValidation } from '../../Utils/CommonFunc';
import BriefEstimate from './BriefEstimate';
import RetiringApplication from './RetiringApplication';
import { numberOfAppsInScopeYoYIncludingGrowth_total } from '../../Components/CommonFuncs/formula/FormulaComponent_RetiringApplication';
import { WarningFilled16 } from '@carbon/icons-react';

const headers = ['', englishValue('Workstream'), englishValue('Sub-Workstream'), englishValue('refCode'), englishValue('appDistribution'), englishValue('countApps'), '']

const types = {
    None: '',
    'Text (text)': 'number'
};
//this functiion is for Baisc and application technology in the screen
class ApplicationTechnology extends React.Component {
    constructor(props) {
        super(props);
        this.appsinstore = React.createRef();
        this.durationinMonth = React.createRef();
        this.transistionDuration = React.createRef();
        this.TransitionStartDate = React.createRef();
        this.state = {
            InputApplicationDistributionArr: [],
            appplicationTechnologyAddBtn: false,
            appplicationTechnologyAddBtnText: '',
            applicationDistributionError: '',
            value: '',
            appsinstore: '',
            durationinMonth: '',
            transistionDuration: '',
            // retiring application --start

            numberOfAppsInScopeYoYIncludingGrowth: {},
            numberOfAppsInScopeYoYGettingRetiredOnly: {},
            finalApplicationScopeYoY: {},
            retiringApplicationError: false,
            postDecommissionOfAppsTestingEffortPercentage: 0,
            FocusFlagDecommsion: false,
            flagDecommsionWarning: "",
            //end
            appsinstoreErr: '',
            durationinMonthErr: '',
            transistionDurationErr: '',
            dealDurationInYears: '',
            readOnlyStatus: false,
            deleteAppTech: false,
            deleteAppBtn: '',
            TransitionStartDate: '',
            TransitionStartDateFull: '',
            Steadystatestartdate: '',
            TransitionValid: false

        };
    }

    componentDidMount() {
        let distributionArr = [];
        let refCodeSubstream = {};
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        let numberApplication = this.props.basicinput.numberOfAppsInScope;
        let readOnlyStatus = false;
        if (this.props.userestimateState.state === 'InReview' || this.props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (this.props.userestimateState.reviewerEmail === userData.email || this.props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }
        let Datelocalstring = DateFormatLocalString(this.props.basicinput.dealStartDate);
        this.appsinstore = this.props.basicinput.numberOfAppsInScope;
        this.durationinMonth = this.props.basicinput.dealDurationInMonths;
        this.transistionDuration = this.props.basicinput.transitionDurationInMonths;
        this.TransitionStartDate = Datelocalstring;

        distributionArr = this.props.additionaldistribution.stdNonStdWorkStreams.map((ele, index) => {
            let countApp = parseFloat(((ele['appDistributionPercentage'] * Number(numberApplication)) / 100).toFixed(2))
            return {
                id: randomID(),
                workStream: ele['workStream'],
                subWorkStream: ele['subWorkStream'],
                code: ele['code'],
                appDistributionPercentage: ele['appDistributionPercentage'],
                countOfApps: countApp,
                isTechnologyTable: true,
                ticketDistributionPercentage: ele['ticketDistributionPercentage'],
                hoursPerTicket: ele['hoursPerTicket'],
                adhocUpliftPercentage: ele['adhocUpliftPercentage'],
                uiStatus: ele['uiStatus']
            }
        })

        this.props.dropDownList.standardWorkStreams.forEach((ele) => {
            var subStreamObj = {};
            ele.subWorkStreams.forEach((ele1) => {
                subStreamObj[ele1['subWorkStream']] = {
                    "code": ele1['code'],
                    "ticketDistributionPercentage": ele1['ticketDistributionPercentage'],
                    "hoursPerTicket": ele1['hoursPerTicket'],
                    "adhocUpliftPercentage": ele1['adhocUpliftPercentage']
                }
            })
            refCodeSubstream[ele['workStream']] = { ...subStreamObj };
        })
        let errorObj = this.errorBasicHandle(this.props.basicinput.numberOfAppsInScope, this.props.basicinput.dealDurationInMonths, this.props.basicinput.transitionDurationInMonths,
            {
                y1: this.props.basicinput.numberOfAppsInScope,
                y2: this.props.basicinput.numberOfAppsInScopeY2,
                y3: this.props.basicinput.numberOfAppsInScopeY3,
                y4: this.props.basicinput.numberOfAppsInScopeY4,
                y5: this.props.basicinput.numberOfAppsInScopeY5,
                y6: this.props.basicinput.numberOfAppsInScopeY6,
                y7: this.props.basicinput.numberOfAppsInScopeY7
            }, this.props.basicinput.postDecommissionOfAppsTestingEffortPercentage
        )

        //adding error for add technology
        let appplicationTechnologyAddBtn = false;
        let appplicationTechnologyAddBtnText = ''
        if (distributionArr.length === 10) {
            appplicationTechnologyAddBtn = true;
            appplicationTechnologyAddBtnText = englishValue('maximumTechnologies')
        }
        this.setState({
            ...this.state,
            appsinstore: this.props.basicinput.numberOfAppsInScope,
            durationinMonth: this.props.basicinput.dealDurationInMonths,
            transistionDuration: this.props.basicinput.transitionDurationInMonths,
            TransitionStartDate: Datelocalstring,
            // retiring application --start
            numberOfAppsInScopeYoYIncludingGrowth: this.props.basicinput.numberOfAppsInScopeYoYIncludingGrowth,
            numberOfAppsInScopeYoYGettingRetiredOnly: this.props.basicinput.numberOfAppsInScopeYoYGettingRetiredOnly,
            finalApplicationScopeYoY: {
                y1: this.props.basicinput.numberOfAppsInScope,
                y2: this.props.basicinput.numberOfAppsInScopeY2,
                y3: this.props.basicinput.numberOfAppsInScopeY3,
                y4: this.props.basicinput.numberOfAppsInScopeY4,
                y5: this.props.basicinput.numberOfAppsInScopeY5,
                y6: this.props.basicinput.numberOfAppsInScopeY6,
                y7: this.props.basicinput.numberOfAppsInScopeY7
            },
            retiringApplicationError: errorObj.retiringApplicationError,
            postDecommissionOfAppsTestingEffortPercentage: this.props.basicinput.postDecommissionOfAppsTestingEffortPercentage,
            flagDecommsionWarning: errorObj.postDecommissionOfAppsTestingEffortWarning,
            //end
            TransitionStartDateFull: this.props.basicinput.dealStartDate,
            dealDurationInYears: errorObj.dealDurationInYears,
            appsinstoreErr: errorObj.appErr,
            durationinMonthErr: errorObj.durationErr,
            transistionDurationErr: errorObj.trastitionErr,
            readOnlyStatus: readOnlyStatus,
            InputApplicationDistributionArr: [
                ...this.state.InputApplicationDistributionArr,
                ...distributionArr
            ],
            refCodeSubstream: refCodeSubstream,
            appplicationTechnologyAddBtn: appplicationTechnologyAddBtn,
            appplicationTechnologyAddBtnText: appplicationTechnologyAddBtnText
        })
    }

    componentDidUpdate() {
        this.appsinstore = this.props.basicinput.numberOfAppsInScope;
        this.durationinMonth = this.props.basicinput.dealDurationInMonths;
        this.transistionDuration = this.props.basicinput.transitionDurationInMonths;
        this.TransitionStartDate = DateFormatLocalString(this.props.basicinput.dealStartDate);
    }
    errorBasicHandle = (appsinstore, durationinMonth, transistionDuration, finalApplicationScopeYoY, postDecommissionOfAppsTestingEffortPercentage) => {
        let errObj = {
            appErr: '',
            durationErr: '',
            dealDurationInYears: '',
            trastitionErr: '',
            retiringApplicationError: '',
            postDecommissionOfAppsTestingEffortWarning: ''
        }
        if (Number(appsinstore) < 1) {
            errObj.appErr = "error in feild"
        }
        else if (Number(appsinstore) > 99999) {
            errObj.appErr = "error in feild"
        }
        else {
            errObj.appErr = ''
        }

        if (Number(durationinMonth) < 6) {
            errObj.durationErr = "error in feilds"
        }
        else if (Number(durationinMonth) > 84) {
            errObj.durationErr = "error in feilds"
        }
        else {
            errObj.durationErr = ''
            let passingYear = Number(durationinMonth) / 12;
            errObj.dealDurationInYears = Number(passingYear.toFixed(2));
        }

        if (Number(transistionDuration) < 0) {
            errObj.trastitionErr = "error in feilds"
        }
        else if (Number(transistionDuration) > 6) {
            errObj.trastitionErr = "error in feilds"
        }
        else {
            errObj.trastitionErr = ''

        }
        errObj.retiringApplicationError = !(Object.keys(finalApplicationScopeYoY).every((ele) => finalApplicationScopeYoY[ele] >= 1 && finalApplicationScopeYoY[ele] <= 99999))
        //JIRA 1151 decommsioning
        if (!Number(postDecommissionOfAppsTestingEffortPercentage) == 0 && (Number(postDecommissionOfAppsTestingEffortPercentage) < 5) || (Number(postDecommissionOfAppsTestingEffortPercentage) > 15)) {
            errObj.postDecommissionOfAppsTestingEffortWarning = 'Range: 5%-15%'
        }
        return errObj
    }
    addHandler = () => {
        let distributionArr = [...this.state.InputApplicationDistributionArr];
        let appplicationTechnologyAddBtn = false;
        let appplicationTechnologyAddBtnText = '';
        if(distributionArr.length <10){
            distributionArr.push(x1);
            if(distributionArr.length === 10){
                
            }
        }
        var x1 = {
            id: randomID(),
            workStream: englishValue('placeholderValue'),
            subWorkStream: englishValue('placeholderValue'),
            code: '-',
            appDistributionPercentage: 0,
            countOfApps: 0,
            isTechnologyTable: false,
            "uiStatus": {
                "iconStatus": {
                    "warning": false,
                    "ok": false,
                    "warningMessage": ""
                }
            }
        }
        if (distributionArr.length < 10) {
            distributionArr.push(x1);
            if (distributionArr.length === 10) {
                appplicationTechnologyAddBtn = true;
                appplicationTechnologyAddBtnText = englishValue('maximumTechnologies')
            }

        }
        this.props.handleChangeOppAdditionalDis(distributionArr)
        this.setState({
            ...this.state,
            InputApplicationDistributionArr: distributionArr,
            appplicationTechnologyAddBtn: appplicationTechnologyAddBtn,
            appplicationTechnologyAddBtnText: appplicationTechnologyAddBtnText
        })
    }
    deleteHandler = (deleteValue, id) => {
        let distributionArr = [... this.state.InputApplicationDistributionArr];
        let appplicationTechnologyAddBtn = false;
        let appplicationTechnologyAddBtnText = '';
        let deleteAppTech = false;
        let deleteAppBtn = ""
        if (deleteValue) {
            distributionArr = this.state.InputApplicationDistributionArr.filter(i => i.id !== id);
            appplicationTechnologyAddBtn = false;
            appplicationTechnologyAddBtnText = ''
        }
        else {
            if (distributionArr.length === 1) {
                deleteAppTech = true;
                deleteAppBtn = englishValue('deleteTechnolgies')
            }
            if (distributionArr.length === 10) {
                appplicationTechnologyAddBtn = true;
                appplicationTechnologyAddBtnText = englishValue('maximumTechnologies')
            }
        }

        this.props.handleChangeOppAdditionalDis(distributionArr)
        this.setState({
            ...this.state,
            InputApplicationDistributionArr: distributionArr,
            appplicationTechnologyAddBtn: appplicationTechnologyAddBtn,
            appplicationTechnologyAddBtnText: appplicationTechnologyAddBtnText,
            deleteAppTech: deleteAppTech,
            deleteAppBtn: deleteAppBtn
        })
    }
    subWorkStreamCal = (workStream, subStream) => {
        let flag = false;
        let newDistributionArr = [...this.state.InputApplicationDistributionArr];
        flag = newDistributionArr.some((ele, index) => (ele.workStream === workStream && ele.subWorkStream === subStream))
        return flag;
    };
    handleChange = (event, id) => {
        event.preventDefault();
        let flagApi = false;
        const { name, value } = event.target;
        let newDistributionArr = [];
        newDistributionArr = [...this.state.InputApplicationDistributionArr];
        newDistributionArr = newDistributionArr.map((ele, index) => {
            if (ele.id === id) {

                if (name === 'workStream') {
                    flagApi = true;
                    return {
                        ...ele, code: '-', subWorkStream: englishValue('placeholderValue'), [name]: value, isTechnologyTable: false,
                        "uiStatus": {
                            "iconStatus": {
                                "warning": false,
                                "ok": false,
                                "warningMessage": ""
                            }
                        }
                    }
                }
                else if (name === 'subWorkStream') {
                    var flag = this.subWorkStreamCal(ele['workStream'], value);
                    if (flag) {
                        flagApi = true;
                        alert('Secondary skill should not be Duplicate. Please fill again.');
                        return {
                            ...ele, code: '-', [name]: englishValue('placeholderValue'), isTechnologyTable: false, "uiStatus": {
                                "iconStatus": {
                                    "warning": false,
                                    "ok": false,
                                    "warningMessage": ""
                                }
                            }
                        }
                    }
                    else {
                        flagApi = true;
                        let refCode = this.state.refCodeSubstream[ele['workStream']][value]['code'];
                        return {
                            ...ele, code: refCode,
                            "ticketDistributionPercentage": this.state.refCodeSubstream[ele['workStream']][value]['ticketDistributionPercentage'],
                            "hoursPerTicket": this.state.refCodeSubstream[ele['workStream']][value]['hoursPerTicket'],
                            "adhocUpliftPercentage": this.state.refCodeSubstream[ele['workStream']][value]['adhocUpliftPercentage'],
                            [name]: value, isTechnologyTable: true,
                            "uiStatus": {
                                "iconStatus": {
                                    "warning": false,
                                    "ok": true,
                                    "warningMessage": ""
                                }
                            }

                        }
                    }
                }
                else if (name === 'appDistributionPercentage') {
                    let totalValue = ele['workStream'] + ele['subWorkStream']
                    // get value this.props.additionaldistribution[stdNonStdWorkStreams] from the redux and check with our current value(valuepr)

                    this.props.additionaldistribution['stdNonStdWorkStreams'].forEach((ele) => {
                        let totalValueId = ele['workStream'] + ele['subWorkStream'];
                        if (totalValue == totalValueId) {
                            if (ele['appDistributionPercentage'] != value) {
                                flagApi = true;
                            }
                        }
                    })

                    let valuePer = Number(value);
                    let countApp = ((Number(valuePer) * Number(this.state.appsinstore)) / 100)
                    countApp = parseFloat(countApp.toFixed(2));
                    return { ...ele, [name]: valuePer, countOfApps: countApp }
                }
                else {
                    return { ...ele, [name]: value }
                }
            }
            else {
                return { ...ele }
            }
        })
        if (flagApi) {
            this.props.handleChangeOppAdditionalDis(newDistributionArr)
        } else {

        }

        this.setState({
            ...this.state,
            InputApplicationDistributionArr: newDistributionArr
        })

    }
    //Function runs onChnge
    handleChangeData = (event, id) => {
        event.preventDefault();
        let flagApi = false;
        const { name, value } = event.target;
        let newDistributionArr = [];
        newDistributionArr = [...this.state.InputApplicationDistributionArr];
        newDistributionArr = newDistributionArr.map((ele, index) => {
            if (ele.id === id) {
                let valuePer = value;
                if (name === 'appDistributionPercentage') {
                    if (value == '0') {
                        valuePer = 0;
                    }
                    else if (value.startsWith('.')) {

                        if (NumberValidationPercentage(value)) {
                            valuePer = (value);
                        } else {
                            valuePer = (ele.appDistributionPercentage);
                        }

                    }
                    else {
                        let value1 = (valuePer);
                        if (value.includes('.')) {
                            var res = valuePer.split(".");
                            if ((res[1].length > 2)) {
                                value1 = Number(value1).toFixed(2);
                            }
                        }

                          

                         let valueNum = value1.replace(/^0+/, '');
                         if (valueNum.startsWith('.')) {
                               valueNum=0+valueNum
                            if (NumberValidationPercentage(valueNum)) {
                                valuePer = (valueNum);
                            } else {
                                valuePer = (ele.appDistributionPercentage);
                            }
                        }else{
                        if (NumberValidationPercentage(valueNum)) {
                            valuePer = (valueNum);
                        } else {
                            valuePer = (ele.appDistributionPercentage);
                        }
                    }

                    }
                    return { ...ele, [name]: valuePer }
                }
                return { ...ele }
            }
            else {
                return { ...ele }
            }
        })


        this.setState({
            ...this.state,
            InputApplicationDistributionArr: newDistributionArr
        })

    }
    subWorkStream = (workStream, subStreamValue, id) => {
        let subWorkStream = this.props.dropDownList.standardWorkStreams.map((item, index) => {
            if (item.workStream === workStream) {
                return (item.subWorkStreams.map((item, index) =>
                    <SelectItem key={index} value={item.subWorkStream} text={item.subWorkStream} />));
            }
        }
        );
        let readOnlyStatusData = this.state.readOnlyStatus ? 'readonly' : ''
        return (
            <TableCell className='subWorkStreamDropdown'>
                <Select id="saleStage"
                    labelText=''
                    defaultValue="placeholder-item"
                    name='subWorkStream'
                    value={subStreamValue}
                    onChange={(event) => this.handleChange(event, id)}
                    // adding diabled true or false for in review/approved/rework  JIRA - bug id 621 /622
                    disabled={this.state.readOnlyStatus}
                >
                    <SelectItem
                        disabled
                        hidden
                        value="placeholder-item"
                        text={englishValue('Select')}
                    />
                    {subWorkStream}
                </Select>
            </TableCell>
        )
    }
    //function JIRA 1137  onBlur  retiring application
    handleChangeRetiringApplicationBlur = (e) => {
        let trastitionErr = this.state.transistionDurationErr
        let durationErr = this.state.durationinMonthErr
        let appErr = this.state.appsinstoreErr
        let retiringApplicationError = this.state.retiringApplicationError
        let newRetiringObj = {
            numberOfAppsInScopeYoYIncludingGrowth: this.state.numberOfAppsInScopeYoYIncludingGrowth,
            numberOfAppsInScopeYoYGettingRetiredOnly: this.state.numberOfAppsInScopeYoYGettingRetiredOnly,
            finalApplicationScopeYoY: this.state.finalApplicationScopeYoY
        }
        // console.log(trastitionErr,durationErr,appErr,newRetiringObj)
        numberOfAppsInScopeYoYIncludingGrowth_total(e.target.id, e.target.value, newRetiringObj);
        retiringApplicationError = !(Object.keys(newRetiringObj.finalApplicationScopeYoY).every((ele) => newRetiringObj.finalApplicationScopeYoY[ele] >= 1 && newRetiringObj.finalApplicationScopeYoY[ele] <= 99999))
        let flagBasic = appErr.length > 0 || durationErr.length > 0 || trastitionErr.length > 0 || retiringApplicationError ? false : true
        //JIRA 1151 decommsioning
        let decomssionWarning = false;
        if (flagBasic) {
            decomssionWarning = this.state.flagDecommsionWarning.length > 0 ? true : false;
            flagBasic = decomssionWarning === true ? false : true;
        }
        let basicInfo = {
            "numberOfAppsInScope": this.state.appsinstore,
            "dealDurationInMonths": this.state.durationinMonth,
            "transitionDurationInMonths": this.state.transistionDuration,
            "dealStartDate": this.state.TransitionStartDateFull,
            "dealDurationInYears": this.state.dealDurationInYears,
            "numberOfAppsInScopeYoYIncludingGrowth": newRetiringObj.numberOfAppsInScopeYoYIncludingGrowth,
            "numberOfAppsInScopeYoYGettingRetiredOnly": newRetiringObj.numberOfAppsInScopeYoYGettingRetiredOnly,
            "numberOfAppsInScope": newRetiringObj.finalApplicationScopeYoY.y1,
            "numberOfAppsInScopeY2": newRetiringObj.finalApplicationScopeYoY.y2,
            "numberOfAppsInScopeY3": newRetiringObj.finalApplicationScopeYoY.y3,
            "numberOfAppsInScopeY4": newRetiringObj.finalApplicationScopeYoY.y4,
            "numberOfAppsInScopeY5": newRetiringObj.finalApplicationScopeYoY.y5,
            "numberOfAppsInScopeY6": newRetiringObj.finalApplicationScopeYoY.y6,
            "numberOfAppsInScopeY7": newRetiringObj.finalApplicationScopeYoY.y7,
            "postDecommissionOfAppsTestingEffortPercentage": this.state.postDecommissionOfAppsTestingEffortPercentage,
            "uiStatus": {
                "iconStatus": {
                    "warning": decomssionWarning,
                    "ok": flagBasic,
                    "warningMessage": ""
                }
            }
        }
        if (!this.state.readOnlyStatus) {
            if (e.target.id == 'numberOfAppsInScopeYoYIncludingGrowth_y1' || e.target.id == 'numberOfAppsInScopeYoYGettingRetiredOnly_y1') {
                this.props.handleChangeOppBasic(basicInfo, this.state.InputApplicationDistributionArr)
            } else {
                this.props.handleChangeOppRetiringApplication(basicInfo)
            }
            this.setState({
                ...this.state,
                numberOfAppsInScopeYoYIncludingGrowth: newRetiringObj.numberOfAppsInScopeYoYIncludingGrowth,
                numberOfAppsInScopeYoYGettingRetiredOnly: newRetiringObj.numberOfAppsInScopeYoYGettingRetiredOnly,
                finalApplicationScopeYoY: newRetiringObj.finalApplicationScopeYoY,
                retiringApplicationError: retiringApplicationError
            })
        }






    }

    //function JIRA 1137  onBlur  retiring  Decommision feild
    handleChangeRetiringApplicationDecommisionBlur = (e) => {
        let trastitionErr = this.state.transistionDurationErr
        let durationErr = this.state.durationinMonthErr
        let appErr = this.state.appsinstoreErr
        let retiringApplicationError = this.state.retiringApplicationError
        let newRetiringObj = {
            numberOfAppsInScopeYoYIncludingGrowth: this.state.numberOfAppsInScopeYoYIncludingGrowth,
            numberOfAppsInScopeYoYGettingRetiredOnly: this.state.numberOfAppsInScopeYoYGettingRetiredOnly,
            finalApplicationScopeYoY: this.state.finalApplicationScopeYoY
        }
        retiringApplicationError = !(Object.keys(newRetiringObj.finalApplicationScopeYoY).every((ele) => newRetiringObj.finalApplicationScopeYoY[ele] >= 1 && newRetiringObj.finalApplicationScopeYoY[ele] <= 99999))
        let flagBasic = appErr.length > 0 || durationErr.length > 0 || trastitionErr.length > 0 || retiringApplicationError ? false : true
        //JIRA 1151 decommsioning
        let decomssionWarning = false;
        if (flagBasic) {
            decomssionWarning = this.state.flagDecommsionWarning.length > 0 ? true : false;
            flagBasic = decomssionWarning === true ? false : true;
        }
        let basicInfo = {
            "numberOfAppsInScope": this.state.appsinstore,
            "dealDurationInMonths": this.state.durationinMonth,
            "transitionDurationInMonths": this.state.transistionDuration,
            "dealStartDate": this.state.TransitionStartDateFull,
            "dealDurationInYears": this.state.dealDurationInYears,
            "numberOfAppsInScopeYoYIncludingGrowth": newRetiringObj.numberOfAppsInScopeYoYIncludingGrowth,
            "numberOfAppsInScopeYoYGettingRetiredOnly": newRetiringObj.numberOfAppsInScopeYoYGettingRetiredOnly,
            "numberOfAppsInScope": newRetiringObj.finalApplicationScopeYoY.y1,
            "numberOfAppsInScopeY2": newRetiringObj.finalApplicationScopeYoY.y2,
            "numberOfAppsInScopeY3": newRetiringObj.finalApplicationScopeYoY.y3,
            "numberOfAppsInScopeY4": newRetiringObj.finalApplicationScopeYoY.y4,
            "numberOfAppsInScopeY5": newRetiringObj.finalApplicationScopeYoY.y5,
            "numberOfAppsInScopeY6": newRetiringObj.finalApplicationScopeYoY.y6,
            "numberOfAppsInScopeY7": newRetiringObj.finalApplicationScopeYoY.y7,
            "postDecommissionOfAppsTestingEffortPercentage": this.state.postDecommissionOfAppsTestingEffortPercentage,
            "uiStatus": {
                "iconStatus": {
                    "warning": decomssionWarning,
                    "ok": flagBasic,
                    "warningMessage": ""
                }
            }
        }
        if(!this.state.readOnlyStatus){
            this.props.handleChangeOppRetiringApplication(basicInfo)
            this.setState({
                ...this.state,
                FocusFlagDecommsion: false
            })
        }
       

    }

    //Function runs onBlur
    handlChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let appErr = '';
        let durationErr = ''
        let trastitionErr = ''
        let passingYear = '';
        let newDistributionArr = [];
        let numberOfApps = this.state.appsinstore;
        let dealDurationInMonths = this.state.durationinMonth;
        let transitionDurationInMonths = this.state.transistionDuration;
        let dealDurationInYears = this.state.dealDurationInYears;
        let dealStartDate = this.state.TransitionStartDateFull;
        let startDate = this.state.TransitionStartDate;
        let endDate = this.state.Steadystatestartdate;
        let nonLabourApps = this.props.userNonLabourStub['response']['nonLaborCostStub'];
        // retiring application --start
        let numberOfAppsInScopeYoYIncludingGrowth = this.state.numberOfAppsInScopeYoYIncludingGrowth;
        let numberOfAppsInScopeYoYGettingRetiredOnly = this.state.numberOfAppsInScopeYoYGettingRetiredOnly;
        let finalApplicationScopeYoY = this.state.finalApplicationScopeYoY;
        //end
        let filterLabourObj = nonLabourApps.find((ele) => {
            return ele.appRange_min <= numberOfApps && ele.appRange_max >= numberOfApps

        })
        if (name === 'appsinstore') {
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr
            passingYear = this.state.passingYear
            //JIRA id -623 // added a condition if blank comes it will be replaced with 0
            if (numberOfApps == '') {
                numberOfApps = 0
            } else {
                numberOfApps = value
            }
            if (Number(numberOfApps) < 1) {
                appErr = englishValue('rangeNoApplication')
            }
            else if (Number(numberOfApps) > 99999) {
                appErr = englishValue('rangeNoApplication')
            }
            else {
                appErr = ''
            }
        }
        if (name === 'durationinMonth') {
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr
            //JIRA id -623 // added a condition if blank comes it will be replaced with 0
            if (dealDurationInMonths == '') {
                dealDurationInMonths = 0
            } else {
                dealDurationInMonths = value
            }
            if (Number(dealDurationInMonths) < 6) {
                durationErr = englishValue('rangedurationDealMonths')
            }
            else if (Number(dealDurationInMonths) > 84) {
                durationErr = englishValue('rangedurationDealMonths')
            }
            else {
                durationErr = ''
                passingYear = Number(dealDurationInMonths) / 12;
                dealDurationInYears = Number(passingYear.toFixed(2));
            }
        }
        if (name === 'transistionDuration') {
            // transitionDurationInMonths = value;
            passingYear = this.state.passingYear
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr;
            //JIRA id -623 // added a condition if blank comes it will be replaced with 0
            if (transitionDurationInMonths == '') {
                transitionDurationInMonths = 0
            } else {
                transitionDurationInMonths = value
            }
            if (Number(transitionDurationInMonths) < 0) {
                trastitionErr = englishValue('rangedurationDealMonths')
            }
            else if (Number(transitionDurationInMonths) > 6) {
                trastitionErr = englishValue('rangedurationDealMonths')
            }
            else {
                trastitionErr = ''

            }
        }
        if (name == 'dealStartDate') {
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr
        }
        if (name === 'appsinstore') {
            newDistributionArr = [...this.state.InputApplicationDistributionArr];
            newDistributionArr = newDistributionArr.map((ele, index) => {
                let countApp = parseFloat(((Number(ele.appDistributionPercentage) * Number(value)) / 100).toFixed(2))
                countApp = parseFloat(countApp);
                return { ...ele, countOfApps: countApp }
            })

        }
        else {
            newDistributionArr = [...this.state.InputApplicationDistributionArr];
        }
        let flagBasic = true;



        flagBasic = appErr.length > 0 || durationErr.length > 0 || trastitionErr.length > 0 || this.state.retiringApplicationError ? false : true
        // this.props.handleChangeOppBasic(obj);

        //JIRA 1151 decommsioning
        let decomssionWarning = false;
        if (flagBasic) {
            decomssionWarning = this.state.flagDecommsionWarning.length > 0 ? true : false;
            flagBasic = decomssionWarning === true ? false : true;
        }

        let basicInfo = {
            "numberOfAppsInScope": numberOfApps,
            "dealDurationInMonths": dealDurationInMonths,
            "transitionDurationInMonths": transitionDurationInMonths,
            "dealStartDate": dealStartDate,
            "dealDurationInYears": dealDurationInYears,
            "numberOfAppsInScopeYoYIncludingGrowth": numberOfAppsInScopeYoYIncludingGrowth,
            "numberOfAppsInScopeYoYGettingRetiredOnly": numberOfAppsInScopeYoYGettingRetiredOnly,
            "numberOfAppsInScope": finalApplicationScopeYoY.y1,
            "numberOfAppsInScopeY2": finalApplicationScopeYoY.y2,
            "numberOfAppsInScopeY3": finalApplicationScopeYoY.y3,
            "numberOfAppsInScopeY4": finalApplicationScopeYoY.y4,
            "numberOfAppsInScopeY5": finalApplicationScopeYoY.y5,
            "numberOfAppsInScopeY6": finalApplicationScopeYoY.y6,
            "numberOfAppsInScopeY7": finalApplicationScopeYoY.y7,
            "postDecommissionOfAppsTestingEffortPercentage": this.state.postDecommissionOfAppsTestingEffortPercentage,
            "uiStatus": {
                "iconStatus": {
                    "warning": decomssionWarning,
                    "ok": flagBasic,
                    "warningMessage": ""
                }
            }
        }
        if (name == 'dealStartDate') {
            this.props.handleChangeOppBasicDealStartDate(basicInfo, newDistributionArr)
        }
        if (name == 'appsinstore') {
            if ((this.appsinstore == value)) {

            } else {
                this.props.handleChangeOppBasic(basicInfo, newDistributionArr)
            }
        } else if (name == 'durationinMonth') {
            if ((this.durationinMonth == value)) {

            } else {
                this.props.handleChangeOppBasic(basicInfo, newDistributionArr)
            }
        } else if (name == 'transistionDuration') {
            if ((this.transistionDuration == value)) {

            } else {
                this.props.handleChangeOppBasic(basicInfo, newDistributionArr)
            }
        }





        this.setState({

            ...this.state,
            appsinstore: numberOfApps,
            durationinMonth: dealDurationInMonths,
            transistionDuration: transitionDurationInMonths,
            appsinstoreErr: appErr,
            durationinMonthErr: durationErr,
            transistionDurationErr: trastitionErr,
            dealDurationInYears: dealDurationInYears,
            InputApplicationDistributionArr: newDistributionArr,
            TransitionStartDate: startDate,
            Steadystatestartdate: endDate,

        })
    };

    //JIRA 1137 retiring aplication
    handleChangeRetiringApplication = (e) => {
        let valueChange = e.target.id;
        let valueOppParameter = valueChange.split('_');
        let newRetiringApplicationData = {
            ...this.state[valueOppParameter[0]],
            [e.target.name]: Math.round(Number(e.target.value))
        }
        // console.log(newRetiringApplicationData)
        if (OnlyAllowNumberValidationFivedeigits((e.target.value))) {
            this.setState({
                ...this.state,
                [valueOppParameter[0]]: newRetiringApplicationData
            })
        }
    }

    //JIRA 1137 retiring decommsion feild aplication
    handleChangeRetiringApplicationDecomission = (e) => {
        let warningDecommsion = ''
        if (!Number(e.target.value) == 0 && (Number(e.target.value) < 5) || (Number(e.target.value) > 15)) {
            warningDecommsion = 'Range: 5%-15%'
        }
        if (NumberValidationPercentage((e.target.value))) {
            this.setState({
                ...this.state,
                [e.target.name]: Number(e.target.value),
                flagDecommsionWarning: warningDecommsion
            })
        }
    }

    //JIRA 1137 
    handlerFocus = (e) => {
        this.setState({
            ...this.state,
            FocusFlagDecommsion: true
        })
    }
    handlerChangeData = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let appErr = '';
        let durationErr = ''
        let trastitionErr = ''
        let passingYear = '';
        let newDistributionArr = [];
        let numberOfApps = this.state.appsinstore;
        let dealDurationInMonths = this.state.durationinMonth;
        let transitionDurationInMonths = this.state.transistionDuration;
        let dealDurationInYears = this.state.dealDurationInYears;
        if (name === 'appsinstore') {
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr
            passingYear = this.state.passingYear
            if (value == '') {
                numberOfApps = 0;
            } else if (value === '0' || value === '0%') {
                numberOfApps = 0;
            } else {
                if (value.includes(".")) {
                    var fields = value.split('.')[0];
                    numberOfApps = fields;
                } else {
                    let valueNum = value.replace(/^0+/, '');
                    if (OnlyAllowNumberValidationFivedeigits(valueNum)) {
                        numberOfApps = valueNum;
                    } else {
                        numberOfApps = this.state.appsinstore;
                    }
                }


            }

            if (Number(numberOfApps) < 1) {
                appErr = englishValue('rangeNoApplication')
            }
            else if (Number(numberOfApps) > 99999) {
                appErr = englishValue('rangeNoApplication')
            }
            else {
                appErr = ''
            }



        }
        if (name === 'durationinMonth') {
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr
            if (value == '') {
                dealDurationInMonths = 0;
            } else if (value === '0' || value === '0%') {
                dealDurationInMonths = 0;
            } else {
                if (value.includes(".")) {
                    var fields = value.split('.')[0];
                    dealDurationInMonths = fields;
                } else {
                    let valueNum = value.replace(/^0+/, '');
                    if (OnlyAllowNumberValidationFivedeigits(valueNum)) {
                        dealDurationInMonths = valueNum;
                    } else {
                        dealDurationInMonths = this.state.durationinMonth;
                    }
                }
            }

            if (Number(dealDurationInMonths) < 6) {
                durationErr = englishValue('rangedurationDealMonths')
            }
            else if (Number(dealDurationInMonths) > 84) {
                durationErr = englishValue('rangedurationDealMonths')
            }
            else {
                durationErr = ''
                passingYear = Number(dealDurationInMonths) / 12;
                dealDurationInYears = Number(passingYear.toFixed(2));
            }
        }
        if (name === 'transistionDuration') {
            passingYear = this.state.passingYear
            trastitionErr = this.state.transistionDurationErr
            durationErr = this.state.durationinMonthErr
            appErr = this.state.appsinstoreErr;
            if (value == '') {
                transitionDurationInMonths = 0;
            } else if (value === '0' || value === '0%') {
                transitionDurationInMonths = 0;
            } else {
                if (value.includes(".")) {
                    var fields = value.split('.')[0];
                    transitionDurationInMonths = fields;
                } else {
                    let valueNum = value.replace(/^0+/, '');
                    if (OnlyAllowNumberValidationFivedeigits(valueNum)) {
                        transitionDurationInMonths = valueNum;
                    } else {
                        transitionDurationInMonths = this.state.transistionDuration;
                    }
                }
            }

            if (Number(transitionDurationInMonths) < 0) {
                trastitionErr = englishValue('rangedurationDealMonths')
            }
            else if (Number(transitionDurationInMonths) > 6) {
                trastitionErr = englishValue('rangedurationDealMonths')
            }
            else {
                trastitionErr = ''

            }
        }
        if (name === 'appsinstore') {
            newDistributionArr = [...this.state.InputApplicationDistributionArr];
            newDistributionArr = newDistributionArr.map((ele, index) => {
                let countApp = parseFloat(((Number(ele.appDistributionPercentage) * Number(numberOfApps)) / 100).toFixed(2))
                countApp = parseFloat(countApp);
                return { ...ele, countOfApps: countApp }
            })

        }

        else {
            newDistributionArr = [...this.state.InputApplicationDistributionArr];
        }
        let flagBasic = true;
        this.setState({

            ...this.state,
            [name]: value,
            appsinstore: numberOfApps,
            durationinMonth: dealDurationInMonths,
            transistionDuration: transitionDurationInMonths,
            appsinstoreErr: appErr,
            durationinMonthErr: durationErr,
            transistionDurationErr: trastitionErr,
            dealDurationInYears: dealDurationInYears,
            InputApplicationDistributionArr: newDistributionArr
        })
    };
    // calender displayed
    handleDateChangeTransition = (e) => {

        let backendAPIDate = DateBackendFormat(e);
        let dateCurrent = DateFormatLocalString(backendAPIDate);
        let errorObj = this.errorBasicHandle(this.state.appsinstore, this.state.durationinMonth, this.state.transistionDuration, this.state.finalApplicationScopeYoY, this.state.postDecommissionOfAppsTestingEffortPercentage)
        this.setState(
            {
                ...this.state,
                appsinstoreErr: errorObj.appErr,
                durationinMonthErr: errorObj.durationErr,
                transistionDurationErr: errorObj.trastitionErr,
                TransitionStartDate: dateCurrent,
                TransitionStartDateFull: backendAPIDate,
                TransitionValid: false
            });
    }
    render() {
        let workStream = this.props.dropDownList.standardWorkStreams.map((item, index) =>
            <SelectItem key={index} value={item.workStream} text={item.workStream} />
        );
        let appDistributionPercentageTotal = '';
        let appCountTotal = '';
        let applicationDistributionError = '';
        let applicationCountApps = '';
        let applicationEmpty = '';
        let addedTechnology = true;
        if (this.state.InputApplicationDistributionArr.length == 0) {
            applicationEmpty = true;
        }
        if (this.state.InputApplicationDistributionArr.length > 0) {
            appCountTotal = this.state.InputApplicationDistributionArr.reduce((acc, item) => {
                return acc + parseFloat(item['countOfApps']);
            }, 0)
            appCountTotal = parseFloat(appCountTotal.toFixed(2));
            appDistributionPercentageTotal = this.state.InputApplicationDistributionArr.reduce((acc, item) => {
                return (acc = Number((acc + Number(item['appDistributionPercentage'])).toFixed(2)));

            }, 0);

            applicationDistributionError = (appDistributionPercentageTotal) === 100 && appCountTotal == this.state.appsinstore ? '' : 'ERROR: Incorrect application distribution. Should be 100%. Not more or less!!'
            addedTechnology = this.state.InputApplicationDistributionArr.every((ele) => ele['uiStatus']['iconStatus']['ok']);;
            // applicationDistributionError = appCountTotal == this.state.appsinstore ? '' : 'ERROR: Incorrect application distribution. Should be 100%. Not more or less!!'
        }
        if (this.state.appsinstoreErr.length > 0 || this.state.durationinMonthErr.length > 0 || this.state.transistionDurationErr.length > 0 || applicationDistributionError.length > 0 || applicationCountApps.length > 0 || !addedTechnology) {
            this.props.disableBtnHandler(true)
        }
        else {
            this.props.disableBtnHandler(false)
        }
        let dealDurationInYears = ''
        if (this.state.dealDurationInYears) {
            dealDurationInYears = Number(this.state.dealDurationInYears).toFixed(2) + ' Years';
        }
        let readOnlyStatusData = this.state.readOnlyStatus ? 'readonly' : ''
        return (
            <>
                <div className="basic-class">

                    {this.state.appsinstoreErr.length > 0 || this.state.durationinMonthErr.length > 0 || this.state.transistionDurationErr.length > 0 || this.state.retiringApplicationError ?
                        (<p className="header-class">{englishValue("basicInfo")}<ErrorFilled32 className="error-icon" /> </p>) :
                        <>
                            {this.state.flagDecommsionWarning.length > 0 ? <p className="header-class">{englishValue("basicInfo")} <WarningFilled16 className="warning-icon" /></p> : <p className="header-class" >
                                {englishValue("basicInfo")}<CheckmarkFilled32 className="tick-icon" /> </p>}
                        </>
                    }


                    <RetiringApplication headers={['', 'Y1', 'Y2', 'Y3', 'Y4', 'Y5', 'Y6', 'Y7']} {...this.props}
                        readOnlyValue={this.state.readOnlyStatus}
                        handleChangeRetiringApplicationBlur={this.handleChangeRetiringApplicationBlur} handleChangeRetiringApplication={this.handleChangeRetiringApplication} numberOfAppsInScopeYoYIncludingGrowth={this.state.numberOfAppsInScopeYoYIncludingGrowth} numberOfAppsInScopeYoYGettingRetiredOnly={this.state.numberOfAppsInScopeYoYGettingRetiredOnly} finalApplicationScopeYoY={this.state.finalApplicationScopeYoY} retiringApplicationError={this.state.retiringApplicationError} />
                    <div className="input-class">
                        {/* <div>
                            <TextInput
                                labelText={englishValue("numberApplicationsScope")}
                                type={(types, 'number')}
                                value={this.state.appsinstore}
                                onBlur={this.handlChange}
                                name='appsinstore'
                                readOnly={this.state.readOnlyStatus}
                                onChange={this.handlerChangeData}

                            />

                            {this.state.appsinstoreErr.length > 0 ? (<div className="HelperRange">
                                <span className="errorRange">{englishValue('rangeNoApplication')}</span></div>) : (<div className="HelperRange">
                                    <span className="normalRange">{englishValue('rangeNoApplication')}</span></div>)}
                        </div> */}
                        <div>
                            <TextInput
                                labelText={englishValue("durationDealMonths")}
                                type={(types, 'number')}
                                value={this.state.durationinMonth}
                                onBlur={this.handlChange}
                                name='durationinMonth'
                                readOnly={this.state.readOnlyStatus}
                                onChange={this.handlerChangeData}

                            />
                            {this.state.durationinMonthErr.length > 0 ? (<div className="HelperRange">
                                <span className="errorRange">{englishValue('rangedurationDealMonths')}</span></div>) : (<div className="HelperRange">
                                    <span className="normalRange">{englishValue('rangedurationDealMonths')}</span></div>)}
                        </div>
                        <div>
                            <TextInput
                                labelText={englishValue('durationTransitionMonths')}
                                type={(types, 'number')}
                                value={this.state.transistionDuration}
                                onBlur={this.handlChange}
                                name='transistionDuration'
                                readOnly={this.state.readOnlyStatus}
                                onChange={this.handlerChangeData}
                            />
                            {this.state.transistionDurationErr.length > 0 ? (<div className="HelperRange">
                                <span className="errorRange">{englishValue('rangeDurationTransitionMonths')}</span></div>) : (<div className="HelperRange">
                                    <span className="normalRange">{englishValue('rangeDurationTransitionMonths')}</span></div>)}
                        </div>
                        <TextInput
                            labelText={englishValue('calculatedYears')}
                            type={(types, 'text')}
                            className="NumberOfYears"
                            value={dealDurationInYears}
                            disabled
                        />
                        <div className='DateTransitionSteady'>
                            <DatePicker datePickerType="single"
                                onChange={this.handleDateChangeTransition}
                                value={this.state.TransitionStartDate}

                            >
                                <DatePickerInput
                                    placeholder="mm/dd/yyyy"
                                    labelText='Deal Start Date'
                                    id="date-picker-transition-single"
                                    onBlur={this.handlChange}
                                    name='dealStartDate'
                                    disabled={this.state.readOnlyStatus}
                                />
                            </DatePicker>

                        </div>

                    </div>

                    <div className="input-class-decommsion">
                        <div>
                            {/* //JIRA 1151 decommsioning */}
                            {this.state.FocusFlagDecommsion ?
                                <TextInput
                                    labelText={englishValue("numberdecomssion")}
                                    type={(types, 'text')}
                                    value={`${this.state.postDecommissionOfAppsTestingEffortPercentage}`}
                                    onBlur={this.handleChangeRetiringApplicationDecommisionBlur}
                                    name='postDecommissionOfAppsTestingEffortPercentage'
                                    readOnly={this.state.readOnlyStatus}
                                    onChange={this.handleChangeRetiringApplicationDecomission}
                                    onFocus={this.handlerFocus}
                                />
                                :
                                <TextInput
                                    labelText={englishValue("numberdecomssion")}
                                    type={(types, 'text')}
                                    value={`${this.state.postDecommissionOfAppsTestingEffortPercentage}%`}
                                    onBlur={this.handleChangeRetiringApplicationDecommisionBlur}
                                    name='postDecommissionOfAppsTestingEffortPercentage'
                                    readOnly={this.state.readOnlyStatus}
                                    onChange={this.handleChangeRetiringApplicationDecomission}
                                    onFocus={this.handlerFocus}
                                />}


                            {this.state.flagDecommsionWarning.length > 0 ? (<div className="HelperRange">
                                <span className="warninRange">{englishValue('rangeNoApplicationRetiring')}</span></div>) : (<div className="HelperRange">
                                    <span className="normalRange">{englishValue('rangeNoApplicationRetiring')}</span></div>)}
                        </div>

                    </div>


                </div>
                <div className='additionldistribution-mainclass'>
                    <div className='headerAdditionalDistribution'>
                        {applicationDistributionError.length > 0 || applicationCountApps.length > 0 || !addedTechnology || applicationEmpty ? <p className='header-class'>{englishValue("applicationTechnologyDistribution")}<ErrorFilled32 className="error-icon" /></p>
                            :
                            <p className='header-class'>{englishValue("applicationTechnologyDistribution")} <span> <CheckmarkFilled32 className="tick-icon" /> </span></p>}


                        {this.state.appplicationTechnologyAddBtnText.length > 0 ?
                            <div className='addTechnnology'>
                                <TooltipIcon tooltipText={this.state.appplicationTechnologyAddBtnText} direction='left'>
                                    <Button renderIcon={Add16} disabled={this.state.appplicationTechnologyAddBtn} iconDescription="Icon Description" onClick={this.addHandler} data-attr={readOnlyStatusData}>{englishValue('addTechnology')} </Button>
                                </TooltipIcon>
                            </div>
                            :
                            <Button renderIcon={Add16} className='addTechnnology' disabled={this.state.appplicationTechnologyAddBtn} data-attr={readOnlyStatusData} iconDescription="Icon Description" onClick={this.addHandler} >{englishValue('addTechnology')} </Button>
                        }
                    </div>
                    <div className="BriefEstimateModal">
                        <BriefEstimate {...this.props}></BriefEstimate>
                    </div>
                    <div className='totalPercentage'>
                        <span>{englishValue('appDistributionPercentageTotal')}: {Number(appDistributionPercentageTotal).toFixed(2)}%</span>
                        <span>{englishValue('appCountTotal')}: {appCountTotal}</span>
                    </div>
                    {applicationDistributionError.length > 0 || applicationCountApps.length > 0 ? <p className='applicationDistributionErr'>
                        {applicationDistributionError}
                    </p> : null}

                    <div className='additionalDistributionTable'>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {headers.map((header) => (
                                        <TableHeader key={header}>{header}</TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {this.state.InputApplicationDistributionArr.length > 0 ?
                                <TableBody>
                                    {this.state.InputApplicationDistributionArr.map((row, index) => (
                                        <TableRow key={index}>
                                            {row['uiStatus']['iconStatus']['ok'] ?
                                                <TableCell className='greenTick'><CheckmarkOutline16 /> </TableCell>
                                                :
                                                <TableCell className='redTick'>
                                                    <TooltipIcon tooltipText={englishValue('incompleteData')} direction='right'>
                                                        <ErrorOutline16 />
                                                    </TooltipIcon>
                                                </TableCell>
                                            }
                                            <TableCell className='saleStageDropdown'>
                                                <Select id="saleStage"
                                                    labelText=''
                                                    defaultValue="placeholder-item"
                                                    name='workStream'
                                                    value={row.workStream}
                                                    // adding diabled true or false for in review/approved/rework  JIRA - bug id 621 /622
                                                    disabled={this.state.readOnlyStatus}
                                                    onChange={(event) => this.handleChange(event, row.id)}
                                                >
                                                    <SelectItem
                                                        disabled
                                                        hidden
                                                        value="placeholder-item"
                                                        text={englishValue('Select')}

                                                    />
                                                    {workStream}
                                                </Select>
                                            </TableCell>
                                            {this.subWorkStream(row.workStream, row.subWorkStream, row.id)}
                                            <TableCell >{row.code}</TableCell>
                                            <TableCell >
                                                <TextInput
                                                    id="estimate-title"
                                                    type={(types, 'text')}
                                                    labelText=''
                                                    name='appDistributionPercentage'
                                                    value={row.appDistributionPercentage}
                                                    onChange={(event) => this.handleChangeData(event, row.id)}
                                                    onBlur={(event) => this.handleChange(event, row.id)}
                                                    readOnly={this.state.readOnlyStatus}
                                                />
                                            </TableCell>
                                            <TableCell >{row.countOfApps}</TableCell>
                                            <TableCell >
                                                <DeleteModal distributionArr={this.state.InputApplicationDistributionArr} deleteHandler={this.deleteHandler} rowID={row.id} readOnlyStatusData={readOnlyStatusData}
                                                    deleteAppTech={this.state.deleteAppTech}
                                                    deleteAppBtn={this.state.deleteAppBtn}
                                                ></DeleteModal>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                :
                                <TableBody></TableBody>
                            }
                        </Table>
                        <p className='NonStandardEstimation'>
                            {englishValue('NonStandardEstimation')}
                        </p>
                    </div>
                </div>

            </>
        );
    }
}

export default ApplicationTechnology;
