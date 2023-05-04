import React, { PureComponent } from 'react';

import { TextInput, Select, SelectItem } from 'carbon-components-react';
import { CheckmarkFilled32, ErrorFilled32, WarningFilled32 } from '@carbon/icons-react';

import { englishValue, NumberValidation } from '../../Utils/CommonFunc';

import './AdditionalCost.scss';


const types = {
    None: '',
    'Text (text)': 'text',


};

// function called on additional cost application
class AdditionalCost extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            platformcost: '',
            costtool: '',
            ignite: '',
            libertytool: '',
            inr: '',
            geo: '',
            usdtoan: '',
            ignitetool: '',
            conversionerr: '',
            conversionusderr: '',
            libertyhelpertext: '',
            readOnlyStatus: false,


        };
    }
    componentDidMount() {
        let libertyhelpertext = '';
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData)
        if (this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection === 'clientTool') {
            libertyhelpertext = englishValue('additionalCostInfo')
        }
        let readOnlyStatus = false;
        if (this.props.userestimateState.state === 'InReview' || this.props.userestimateState.state === 'Approved') {
            readOnlyStatus = true;
        } else if (this.props.userestimateState.reviewerEmail === userData.email || this.props.userestimateState.state === "ReWork") {
            readOnlyStatus = true;
        }
        let errorObj = this.errorBasicHandle(this.props.additionalcost.conversionINRtoUSD, this.props.additionalcost.conversionUSDtoEU, this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection)


        this.setState({
            ...this.state,
            platformcost: this.props.additionalcost.costForCognitiveAgentAssist_USD,
            costtool: this.props.additionalcost.costForECATools_USD,

            ignite: this.props.additionalcost.igniteToBeUsedByDefaultSelection,
            ignitetool: this.props.additionalcost.igniteToolCostForThreeYears_USD,

            libertytool: this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection,
            geo: this.props.additionalcost.dealGeoDefaultSelection,

            inr: this.props.additionalcost.conversionINRtoUSD,
            usdtoan: this.props.additionalcost.conversionUSDtoEU,

            libertyhelpertext: errorObj.libertyhelpertext,
            conversionerr: errorObj.errinr,
            conversionusderr: errorObj.errusdtoan,
            readOnlyStatus: readOnlyStatus

        })

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.loaderBtnCost) {
            let libertyhelpertext = '';
            let userData = window.localStorage.getItem('userData');
            userData = JSON.parse(userData)
            if (this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection === 'clientTool') {
                libertyhelpertext = englishValue('additionalCostInfo')
            }
            let readOnlyStatus = false;
            if (this.props.userestimateState.state === 'InReview' || this.props.userestimateState.state === 'Approved') {
                readOnlyStatus = true;
            } else if (this.props.userestimateState.reviewerEmail === userData.email || this.props.userestimateState.state === "ReWork") {
                readOnlyStatus = true;
            }
            let errorObj = this.errorBasicHandle(this.props.additionalcost.conversionINRtoUSD, this.props.additionalcost.conversionUSDtoEU, this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection)


            this.setState({
                ...this.state,
                platformcost: this.props.additionalcost.costForCognitiveAgentAssist_USD,
                costtool: this.props.additionalcost.costForECATools_USD,

                ignite: this.props.additionalcost.igniteToBeUsedByDefaultSelection,
                ignitetool: this.props.additionalcost.igniteToolCostForThreeYears_USD,

                libertytool: this.props.additionalcost.securityToolIntegrationClientVsIBMDefaultSelection,
                geo: this.props.additionalcost.dealGeoDefaultSelection,

                inr: this.props.additionalcost.conversionINRtoUSD,
                usdtoan: this.props.additionalcost.conversionUSDtoEU,
                libertyhelpertext: errorObj.libertyhelpertext,
                conversionerr: errorObj.errinr,
                conversionusderr: errorObj.errusdtoan,
                readOnlyStatus: readOnlyStatus

            })
        }
        this.props.HandlerBtn(false);
    }

    errorBasicHandle = (inr, usdtoan, libertytool) => {
        let errObj = {
            libertyhelpertext: '',
            errinr: '',
            errusdtoan: ''
        }

        if (Number(inr) <= 0) {
            errObj.errinr = englishValue('Incorrectformat')
        } else {
            errObj.errinr = ''

        }

        if (Number(usdtoan) <= 0) {
            errObj.errusdtoan = englishValue('Incorrectformat')
        } else {
            errObj.errusdtoan = ''

        }

        if (libertytool === 'clientTool') {
            errObj.libertyhelpertext = englishValue('additionalCostInfo')
        } else {
            errObj.libertyhelpertext = ''
        }

        return errObj
    }
    igniteclientCost = (valuesCost) => {
        let igniteCost = {};
        this.props.userDropDownData.defaultDropDown['response']['defaultDropdown']['igniteLicenseCostInUSD'].filter(element => {
            if (element.key.includes(valuesCost)) {
                return igniteCost[element.key] = element.value;
            }
        });
        return igniteCost;
    }
    handlChange = e => {

        let libertytool = '';
        let geo = '';
        let inr = '';
        let usdtoan = '';
        let ignite = '';
        let igniteclient = ''
        let libertyhelpertext = ''
        let errinr = ''
        let errusdtoan = '';
        // let additionalCostValues={};
        e.preventDefault();
        const { name, value } = e.target;


        if (name === 'ignite') {
            ignite = value;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (value === 'client') {
                let igniteclientval = this.igniteclientCost(value);
                igniteclient = igniteclientval.client;
            } else if (value === 'ibm_internal') {
                let igniteclientval = this.igniteclientCost(value);
                igniteclient = igniteclientval.ibm_internal;
            }


        } else {
            igniteclient = this.state.ignitetool
        }

        if (name === 'inr') {
            inr = value;
            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (Number(value) <= 0) {
                errinr = englishValue('Incorrectformat')
            } else {
                errinr = ''

            }
        }
        if (name === 'usdtoan') {
            usdtoan = value;
            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            inr = this.state.inr;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (Number(value) <= 0) {
                errusdtoan = englishValue('Incorrectformat')
            } else {
                errusdtoan = ''

            }
        }

        if (name === 'libertytool') {
            libertytool = value;
            ignite = this.state.ignite;
            geo = this.state.geo;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (value === 'clientTool') {
                libertyhelpertext = englishValue('additionalCostInfo')
            } else {
                libertyhelpertext = ''
            }
        } else {
            libertyhelpertext = this.state.libertyhelpertext
        }
        if (name === 'geo') {
            geo = value;
            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
        }
        let warningFlag = false;
        let checkFlag = true;

        checkFlag = errinr.length > 0 || errusdtoan.length > 0 ? false : true
        warningFlag = libertyhelpertext.length > 0 ? errinr.length > 0 || errusdtoan.length > 0 ? false : true : false

        if (warningFlag) {
            checkFlag = false;
        }
        let additionalCostInfo = {
            "costForCognitiveAgentAssist_USD": this.state.platformcost,
            "costForECATools_USD": this.state.costtool,
            "igniteToBeUsedByDefaultSelection": ignite,
            "igniteToolCostForThreeYears_USD": Number(igniteclient),
            "securityToolIntegrationClientVsIBMDefaultSelection": libertytool,
            "dealGeoDefaultSelection": geo,
            "conversionINRtoUSD": Number(inr),
            "conversionUSDtoEU": Number(usdtoan),
            "uiStatus": {
                'iconStatus': {
                    "warning": warningFlag,
                    "ok": checkFlag,
                    "warningMessage": libertyhelpertext
                }
            }
        }

        if (false) {

        }
        else {
            if (!this.state.readOnlyStatus) {
                this.props.ChangeOppAdditionalCost(additionalCostInfo);
            }
        }
        this.setState({
            ...this.state,
            [name]: value,
            libertytool: libertytool,
            geo: geo,
            inr: inr,
            usdtoan: usdtoan,
            ignite: ignite,
            ignitetool: igniteclient,
            libertyhelpertext,
            conversionerr: errinr,
            conversionusderr: errusdtoan

        })

    };

    handlerChangeData = (e) => {
        let libertytool = '';
        let geo = '';
        let inr = '';
        let usdtoan = '';
        let ignite = '';
        let igniteclient = ''
        let libertyhelpertext = ''
        let errinr = ''
        let errusdtoan = '';
        // let additionalCostValues={};
        e.preventDefault();
        const { name, value } = e.target;


        if (name === 'ignite') {
            ignite = value;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (value === 'client') {
                igniteclient = 3000
            } else if (value === 'ibm_internal') {
                igniteclient = 1000
            }


        } else {
            igniteclient = this.state.ignitetool
        }

        if (name === 'inr') {
            if (value == '') {
                inr = 0;
            } else if (value === '0' || value === '0%') {
                inr = 0;
            } else {
                let valueNum = value.replace(/^0+/, 0);
                if (NumberValidation(valueNum)) {
                    inr = (valueNum);
                } else {
                    inr = this.state.inr;
                }
            }


            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (Number(value) <= 0) {
                errinr = englishValue('Incorrectformat')
            } else {
                errinr = ''

            }
        }
        if (name === 'usdtoan') {
            if (value == '') {
                usdtoan = 0;
            } else if (value === '0' || value === '0%') {
                usdtoan = 0;
            } else {
                let valueNum = value.replace(/^0+/, 0);
                if (NumberValidation(valueNum)) {
                    usdtoan = (valueNum);
                } else {
                    usdtoan = this.state.usdtoan;
                }
            }

            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            geo = this.state.geo;
            inr = this.state.inr;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (Number(value) <= 0) {
                errusdtoan = englishValue('Incorrectformat')
            } else {
                errusdtoan = ''

            }
        }

        if (name === 'libertytool') {
            libertytool = value;
            ignite = this.state.ignite;
            geo = this.state.geo;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
            errinr = this.state.conversionerr
            errusdtoan = this.state.conversionusderr
            if (value === 'clientTool') {
                libertyhelpertext = englishValue('additionalCostInfo')
            } else {
                libertyhelpertext = ''
            }
        } else {
            libertyhelpertext = this.state.libertyhelpertext
        }
        if (name === 'geo') {
            geo = value;
            ignite = this.state.ignite;
            libertytool = this.state.libertytool;
            inr = this.state.inr;
            usdtoan = this.state.usdtoan;
        }


        this.setState({
            ...this.state,
            [name]: value,
            libertytool: libertytool,
            geo: geo,
            inr: inr,
            usdtoan: usdtoan,
            ignite: ignite,
            ignitetool: igniteclient,
            libertyhelpertext,
            conversionerr: errinr,
            conversionusderr: errusdtoan

        })




    }
    //Convert Currency
    currencyCoverter = (monetary_value) => {
        let currencyValue = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(monetary_value);
        return currencyValue.slice(0, currencyValue.length - 3)
    }

    inrVal = (inrVal) => {
        let costVal = inrVal;
        if (inrVal) {
            let valuseINR = (inrVal).toString().split('.');
            if (valuseINR[1]?.length>2) {
                costVal = Number(inrVal).toFixed(2);
            }
        }
        return costVal
    }
    render() {
        let igniteOptions = this.props.dropDownList.igniteToBeUsedBy.map((item) =>
            <SelectItem key={item.key} value={item.key} text={item.value} />
        );
        let securityOptions = this.props.dropDownList.securityToolIntegrationClientVsIBM.map((item) =>
            <SelectItem key={item.key} value={item.key} text={item.value} />
        );
        let GeoOptions = this.props.dropDownList.dealGeo.map((item) =>
            <SelectItem key={item.key} value={item.key} text={item.value} />
        );
        let platformcost = this.currencyCoverter(this.state.platformcost);
        let ignitetool = this.currencyCoverter(this.state.ignitetool);
        let costtool = this.currencyCoverter(this.state.costtool);
        let readOnlyStatusData = this.state.readOnlyStatus ? 'readonly' : ''

        return (
            <>
                <div className="additionlcost-mainlclass">
                    {this.state.conversionerr.length > 0 || this.state.conversionusderr.length > 0 ?
                        (<div className="costheader-class">{englishValue("additionalCostInformation")}
                            <ErrorFilled32 className="error-icon" /></div>) :
                        <>
                            {this.state.libertyhelpertext.length > 0 ? (<div className="costheader-class">{englishValue("additionalCostInformation")}
                                <WarningFilled32 className="warning-icon" /></div>) :
                                (<div className="costheader-class">
                                    {englishValue("additionalCostInformation")} <CheckmarkFilled32 className="tick-icon" /></div>)
                            }
                        </>
                    }
                    {/* 1 st row */}
                    <div className="additional">
                        <TextInput className="additional-field1"
                            type={(types, 'text')}
                            labelText={englishValue('costForCognitiveAgentAssist_USD')}
                            name='platformcost'
                            value={platformcost}
                            onChange={this.handlChange}
                            disabled
                        />

                        <div className="cost-class">
                            <TextInput className="additional-field2"
                                type={(types, 'text')}
                                labelText={englishValue('costForECATools_USD')}
                                name='costtool'
                                value={costtool}
                                onChange={this.handlChange}
                                disabled
                            />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="ignitemain-class">
                        <Select id="ignite"
                            className="additional-field1"
                            labelText={englishValue('igniteToBeUsedByDefaultSelection')}
                            name="ignite"
                            defaultValue="placeholder-item"
                            helperText='Use "Client" when IGNITE tools will be used by client AMS team'
                            value={this.state.ignite}
                            // adding diabled true or false for in review/approved/rework  JIRA - bug id  621/622
                            disabled={this.state.readOnlyStatus}
                            onChange={this.handlChange} >

                            {igniteOptions}
                        </Select>
                        <div className="ignite-tool">
                            <TextInput className="additional-field2"
                                labelText={englishValue('igniteToolCostForThreeYears_USD')}
                                name='ignitetool'
                                value={ignitetool}
                                disabled
                            />
                        </div>
                    </div>


                    {/* 3 rd row */}
                    <div className="liberty-class">

                        <Select id="libertytool"
                            className="additional-field1"
                            labelText={englishValue('securityToolIntegrationClientVsIBMDefaultSelection')}
                            name='libertytool'
                            value={this.state.libertytool}
                            onChange={this.handlChange}
                            // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                            disabled={this.state.readOnlyStatus}
                            helperText={this.state.libertyhelpertext}
                        >

                            {securityOptions}
                        </Select>

                        <div className="geo-class">
                            <Select id="geo"
                                className="additional-field2"
                                labelText={englishValue('dealGeoDefaultSelection')}
                                name='geo'
                                // adding diabled true or false for in review/approved/rework  JIRA - bug id 621/622
                                disabled={true}
                                value={this.state.geo}
                                onChange={this.handlChange} >

                                {GeoOptions}
                            </Select>
                        </div>
                    </div>


                    {/* 4th row */}
                    <div className='conversions-class'>
                        <div>
                            <TextInput className='field3-class'
                                type='text'
                                labelText={englishValue('conversionINRtoUSD')}
                                name='inr'
                                value={this.inrVal(this.state.inr)}
                                onBlur={this.handlChange}
                                readOnly={this.state.readOnlyStatus}
                                // helperText={`${this.state.inr} ${englishValue('INRtoUSD')}`}
                                onChange={this.handlerChangeData}
                            />
                            {/* // validation check for additionalCostInfo INR JIRA bug id- 620 */}
                            {this.state.conversionerr.length > 0 ? (<div className="HelperRange"><span className="errorRange">
                                {"Value should be > 0 "} </span></div>) : (<div className="HelperRange"><span className="normalRange"> {Number(this.state.inr).toFixed(2)} ${englishValue('INRtoUSD')}</span></div>)}



                        </div>
                        <div className='USD-class'>
                            <div>
                                <TextInput className='field4-class'
                                    type='text'
                                    labelText={englishValue('conversionUSDtoEU')}
                                    name='usdtoan'
                                    value={this.inrVal(this.state.usdtoan)}
                                    onBlur={this.handlChange}
                                    readOnly={this.state.readOnlyStatus}
                                    // helperText={`${this.state.usdtoan} ${englishValue('USDtoEURO')}`}
                                    onChange={this.handlerChangeData}
                                />
                                {/* // validation check for additionalCostInfo USR JIRA bug id- 620 */}
                                {this.state.conversionusderr.length > 0 ? (<div className="HelperRange"><span className="errorRange">
                                    {"Value should be > 0 "} </span></div>) : (<div className="HelperRange"><span className="normalRange"> {Number(this.state.usdtoan).toFixed(2)} {englishValue('USDtoEURO')}</span></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AdditionalCost;