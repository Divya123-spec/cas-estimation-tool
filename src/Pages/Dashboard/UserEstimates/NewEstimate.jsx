import React, { Component } from "react";
import { Button, TextInput, Select, SelectItem, Checkbox } from 'carbon-components-react';
import { SendFilled18, WarningFilled14, WarningAltFilled14 } from '../../../Components/CommonFuncs/Icons';
import LoaderApp from '../../LoaderApp';
import { englishValue } from "../../../Utils/CommonFunc";
class NewEstimate extends Component {
    constructor(props) {
        super(props);
        this.OppIdText = React.createRef();
        this.state = {
            UserEstimates: {
                estimateTitle: '',
                opportunityId: '',
                userData: '',
                opportunityName: '',
                clientName: '',
                saleStage: englishValue('placeholderValue'),
                industry: englishValue('placeholderValue'),
                ShortDescription: ''
            },
            UserEstimatesDisabled: {
                estimateTitleDisable: false,
                opportunityIdDisable: false,
                userDataDisable: false,
                opportunityNameDisable: true,
                clientNameDisable: true,
                saleStageDisable: true,
                industryDisable: true,
                ShortDescriptionDisable: true,
                StartEstimateBtnDisable: true
            },
            UserEstimatesError: {
                estimateTitleError: "",
                opportunityIdError: "",
                userDataError: "",
                opportunityNameError: "",
                clientNameError: "",
                saleStageError: "",
                industryError: "",
                ShortDescriptionError: "",
                StartEstimateBtnError: ""
            },
            UserEstimatesWarning: {
                estimateTitleWarning: "",
                opportunityIdWarning: "",
                userDataWarning: "",
                opportunityNameWarning: "",
                clientNameWarning: '',
                saleStageWarning: '',
                industryWarning: '',
                ShortDescriptionWarning: '',
                StartEstimateBtnWarning: ''
            },
            useEstimateMandatory: true

        }

    }

    //Checkbox HandleChange
    onCheckChange = (name, event) => {
        let UserEstimatesDisabledBtn = {};
        let saleStageOption = '';
        let saleStageWarning2 = '';
        let OppIdIconColor = '';
        let opportunityIdText2 = '';
        let clientName = ''
        let industry = englishValue('placeholderValue')
        let ShortDescription = '';
        let opportunityName = '';
        let EstimateMandatory = true
        if (event === true) {
            UserEstimatesDisabledBtn = {
                ...this.state.UserEstimatesDisabled,
                clientNameDisable: false,
                saleStageDisable: true,
                industryDisable: false,
                ShortDescriptionDisable: false,
                opportunityIdDisable: true
            }
            saleStageOption = 'rom';
            saleStageWarning2 = 'Only ROM estimates can be created without opportunity ID';
            OppIdIconColor = false;
            this.OppIdText = '';
            EstimateMandatory = false

        }
        if (event === false) {
            UserEstimatesDisabledBtn = {
                ...this.state.UserEstimatesDisabled,
                clientNameDisable: true,
                saleStageDisable: true,
                industryDisable: false,
                ShortDescriptionDisable: true,
                opportunityIdDisable: false
            }
            saleStageOption = englishValue('placeholderValue');
            opportunityIdText2 = this.state.UserEstimates.opportunityId;
            OppIdIconColor = this.state.OppIdIcon;
            EstimateMandatory = true
            industry = englishValue('placeholderValue');
        }
        this.setState({
            ...this.state,
            UserEstimates: {
                ...this.state.UserEstimates,
                saleStage: saleStageOption,
                opportunityId: opportunityIdText2,
                clientName: clientName,
                industry: industry,
                ShortDescription: ShortDescription,
                opportunityName: opportunityName,
                [name]: event
            },
            OppIdIcon: OppIdIconColor,
            UserEstimatesDisabled: UserEstimatesDisabledBtn,
            UserEstimatesWarning: {
                ...this.state.UserEstimatesWarning,
                saleStageWarning: saleStageWarning2
            },
            UserEstimatesError: {
                ...this.state.UserEstimatesError,
                opportunityIdError: ""
            },
            useEstimateMandatory: EstimateMandatory
        })
    };
    //Checkbox HandleChange
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let error = '';
        let OppIdIconFlag = false;

        if (name === 'opportunityId') {
            this.OppIdText = value;
            error = '';
            if (value.length > 0) {
                OppIdIconFlag = true;
            }
            this.setState({
                ...this.state,
                UserEstimates: {
                    ...this.state.UserEstimates,
                    opportunityId: value,
                    userData: '',
                    opportunityName: '',
                    clientName: '',
                    saleStage: englishValue('placeholderValue'),
                    industry: englishValue('placeholderValue'),
                    ShortDescription: ''

                },
                UserEstimatesError: {
                    ...this.state.UserEstimatesError,
                    opportunityIdError: error
                },
                OppIdIcon: OppIdIconFlag

            })


        } else if (name === 'estimateTitle') {
            OppIdIconFlag = this.state.OppIdIcon;
            error = this.state.UserEstimatesError.opportunityIdError;
            this.setState({
                ...this.state,
                UserEstimates: {
                    ...this.state.UserEstimates,
                    [name]: value
                },
                UserEstimatesError: {
                    ...this.state.UserEstimatesError,
                    opportunityIdError: error
                },
                OppIdIcon: OppIdIconFlag

            })
        }
        else {
            error = this.state.UserEstimatesError.opportunityIdError;
            // OppIdIconFlag=true
            this.setState({
                ...this.state,
                UserEstimates: {
                    ...this.state.UserEstimates,
                    [name]: value
                },
                UserEstimatesError: {
                    ...this.state.UserEstimatesError,
                    opportunityIdError: error
                },
                OppIdIcon: OppIdIconFlag

            })
        }

    };
    //Reset the data and Close Modal
    cancelHandlerButton = () => {
        this.setState({
            ...this.state,
            UserEstimates: {
                estimateTitle: '',
                opportunityId: '',
                userData: '',
                opportunityName: '',
                clientName: '',
                saleStage: englishValue('placeholderValue'),
                industry: englishValue('placeholderValue'),
                ShortDescription: ''
            },
            UserEstimatesDisabled: {
                estimateTitleDisable: false,
                opportunityIdDisable: false,
                userDataDisable: false,
                opportunityNameDisable: true,
                clientNameDisable: true,
                saleStageDisable: true,
                industryDisable: true,
                ShortDescriptionDisable: true,
                StartEstimateBtnDisable: true
            },
            UserEstimatesError: {
                estimateTitleError: "",
                opportunityIdError: "",
                userDataError: "",
                opportunityNameError: "",
                clientNameError: "",
                saleStageError: "",
                industryError: "",
                ShortDescriptionError: "",
                StartEstimateBtnError: ""
            },
            UserEstimatesWarning: {
                estimateTitleWarning: "",
                opportunityIdWarning: "",
                userDataWarning: "",
                opportunityNameWarning: "",
                clientNameWarning: '',
                saleStageWarning: '',
                industryWarning: '',
                ShortDescriptionWarning: '',
                StartEstimateBtnWarning: ''
            },
            OppIdIcon: false

        })
        this.props.cancelHandler()
    }
    // Fetching The OPP ID
    fetchOppIdHandler = (event) => {
       if(!this.state.OppIdIcon){

       }else{
        let error = '';
        if (this.OppIdText.length > 0) {

            this.setState({
                ...this.state,
                OppIdIcon: true,
                showFetchingicon: true

            })
            //ooporunity id valid;
            this.props.userfetchDataForOpptNo(this.OppIdText).then((res) => {
                if (res.status === 'SUCCESS') {
                    if (res.data['isOppIdValid']) {
                        this.setState({
                            ...this.state,
                            UserEstimates: {
                                ...this.state.UserEstimates,
                                opportunityName: res.data['oppName'],
                                clientName: res.data['customerName']
                            },
                            UserEstimatesDisabled: {
                                estimateTitleDisable: false,
                                opportunityIdDisable: false,
                                userDataDisable: false,
                                opportunityNameDisable: true,
                                clientNameDisable: false,
                                saleStageDisable: false,
                                industryDisable: false,
                                ShortDescriptionDisable: false,
                                StartEstimateBtnDisable: false
                            },
                            UserEstimatesError: {
                                ...this.state.UserEstimatesError,
                                opportunityIdError: ""
                            },
                            OppIdIcon: false,
                            showFetchingicon: false

                        })
                    }
                    else {
                        error = englishValue('OpportunityIDNotfound');
                        this.setState({
                            ...this.state,
                            UserEstimatesError: {
                                ...this.state.UserEstimatesError,
                                opportunityIdError: error
                            },
                            UserEstimates: {
                                ...this.state.UserEstimates,
                                opportunityName: '',
                                clientName: ''
                            },
                            // UserEstimatesDisabled: UserDisabledBtn,
                            OppIdIcon: false,
                            showFetchingicon: false

                        })
                    }

                }
                else {
                    if (res.errorCode ==='ERRCAS401B') {
                        this.props.history.push('/');
                    }else{
                     alert(englishValue('TechnicalError'))
                    }
                    
                    this.setState({
                        ...this.state,
                        OppIdIcon: true,
                        showFetchingicon: false

                    })
                }

            }).catch((err) => {
                alert(englishValue('TechnicalError'))
                this.setState({
                    ...this.state,
                    OppIdIcon: true,
                    showFetchingicon: false

                })
            });
       }
       

        }



    }
    //Sending Modal Datato backend API
    StartHandlerEstimate = () => {
        let userEstimateEdit = {};
        let dashBoardData = this.props.userSessionData.dashBoardData.estimates;
        let industryData = this.state.UserEstimates.industry;
        if (this.state.UserEstimates.industry === englishValue('placeholderValue')) {
            industryData = '';
        }
        //check weather the BAFO/RFP record of that Opp_ID is already present or not
        var dashboardFilterData = dashBoardData.filter((ele) => {
            return ele.opportunityId === this.OppIdText
        });
        let count = 0;
        for (let element of dashboardFilterData) {
            if (element.saleStage === this.state.UserEstimates.saleStage) {
                if (element.saleStage !== 'rom') {
                    let err = "One record already exists in the system against the same opportunity ID for the selected Sale stage. Note :For BAFO / RFP sales stages, only one estimation record is allowed per sales stage against an opportunity.";
                    alert(err);
                    count = 1;

                }
                else {
                    count = 0;
                }

            }
        }
        if (count === 0) {
            userEstimateEdit = {
                estimateTitle: this.state.UserEstimates.estimateTitle,
                opportunityId: this.state.UserEstimates.opportunityId,
                opportunityName: this.state.UserEstimates.opportunityName,
                clientName: this.state.UserEstimates.clientName,
                saleStage: this.state.UserEstimates.saleStage,
                industry: industryData,
                opportunityShortDesc: this.state.UserEstimates.ShortDescription
            }
            this.props.startEstimateHandler(userEstimateEdit);
        }


    }
    SectorIndustryHandler=()=>{
     let newArr=[];
     this.props?.userDropDownData?.defaultDropDown['response']['defaultDropdown']?.sector?.map(sectorObj=>{
        sectorObj.industry?.map(ele=>newArr.push(ele))
     })
     return newArr;
    }
    render() {
        //Mandatory Data with icons
        let estimate = (<span>{englishValue('EstimatTitle')} <span className='mandatory'>*</span></span>)
        let opportunityId = (<span>{englishValue('Opportunity Id')} <span className='mandatory'>{this.state.useEstimateMandatory ? '*' : ''}</span></span>)
        let saleStage = (<span>{englishValue('saleStage')}<span className='mandatory'>*</span></span>)
        let industry = (<span>{englishValue('Industry')}<span className='mandatory'>*</span></span>)
        let clientName = (<span>{englishValue('clientName')}<span className='mandatory'>*</span></span>)
        let oppName = (<span>{englishValue('opportunityName')}<span className='not-mandatory'>*</span></span>)
       //disable button if industry , client name , estimate title and salestage is not filled doesnt match
        let StartEstimateBtnDisable = this.state.UserEstimates.saleStage !== englishValue('placeholderValue') && this.state.UserEstimates.industry !== englishValue('placeholderValue') &&this.state.UserEstimates.estimateTitle.length > 0 && this.state.UserEstimates.clientName.length > 0
        
      
        // Dymically adding Options In dropdown
        let saleStageOptions = '';
        let industryOptions = '';
        if (Object.keys(this.props.userDropDownData).length !== 0) {
            if(this.props.userDropDownData.defaultDropDown){
                if (this.props.userDropDownData.defaultDropDown['response']) {
                    saleStageOptions = this.props.userDropDownData.defaultDropDown['response']['defaultDropdown']['salesStage'].map((item) =>
                        <SelectItem key={item.key} value={item.key} text={item.value} />
                    );
                    let industryArr=this.SectorIndustryHandler();
                    industryOptions = industryArr.map((item) =>
                        <SelectItem key={item.key} value={item.key} text={item.value} />
                    );
                }
    
            }
          
        }

        let fetchOppIdIcons = (this.state.UserEstimatesError.opportunityIdError.length > 0 ? 'fetchOppIdIconErr' : 'fetchOppIdIcon')
        return (
            <>
                <div className="ModalContent">
                    <h3 className="Header">{englishValue('NewEstimateDetails')}</h3>
                    <p className="HeaderPara">{englishValue('OpportunityDetails')}</p>
                    <div>
                        <div className='InputTags'>
                            <TextInput
                                id="estimate-title"
                                maxLength="50"
                                labelText={estimate}
                                placeholder={englishValue('placeHolderEstimatetitle')}
                                name='estimateTitle'
                                className='textInputBottom'
                                onChange={this.handleChange}
                                value={this.state.UserEstimates.estimateTitle}
                                disabled={this.state.UserEstimatesDisabled.estimateTitleDisable}
                            />
                            <div className='opportunityStyle'>
                                <div className='oppIdDiv'>
                                    <TextInput
                                        id="opportunity-id"
                                        labelText={opportunityId}
                                        placeholder={englishValue('placeHolderOpportunityID')}
                                        className={this.state.UserEstimatesError.opportunityIdError.length > 0 ? "error" : null}
                                        name='opportunityId'
                                        onChange={this.handleChange}
                                        value={this.state.UserEstimates.opportunityId}
                                        disabled={this.state.UserEstimatesDisabled.opportunityIdDisable}
                                    />
                                    {this.state.UserEstimatesError.opportunityIdError.length > 0 ?
                                        <div className='oppIdIconDiv'>
                                            {WarningFilled14('oppIdErrIcon')}
                                        </div>
                                        : <>
                                            <div className='oppIdIconDiv'>
                                                {this.state.showFetchingicon ? <LoaderApp loaderBtn={true}></LoaderApp> : null}
                                            </div>

                                        </>}
                                    {this.state.UserEstimatesError.opportunityIdError.length > 0 && (
                                        <p className="errorMessage">{this.state.UserEstimatesError.opportunityIdError}</p>
                                    )}
                                </div>
                                <div className="fetchOpportunity">
                                    <span className={fetchOppIdIcons} onClick={(event) => this.fetchOppIdHandler(event)}>
                                        {SendFilled18(this.state.OppIdIcon ? "active" : "inactive")}
                                    </span>
                                </div>
                            </div>
                            <div className="CheckBoxHandler">
                                <Checkbox labelText={englishValue('Enterdetailsmanually')} id="userData"
                                    name='userData'
                                    onChange={(event) => this.onCheckChange('userData', event)}
                                    checked={this.state.UserEstimates.userData}
                                />

                            </div>
                            <div className='InputTagsManually'>
                                <TextInput
                                    id="opportunity-name"
                                    labelText={oppName}
                                    name='opportunityName'
                                    placeholder={englishValue('plceholderNameOpportunity')}
                                    style={{ marginRight: '2.2%', width: '320px' }}
                                    onChange={this.handleChange}
                                    value={this.state.UserEstimates.opportunityName}
                                    disabled={this.state.UserEstimatesDisabled.opportunityNameDisable}
                                />
                                <TextInput
                                    id="client-name"
                                    maxLength="50"
                                    labelText={clientName}
                                    placeholder={englishValue('plceholderNameClient')}
                                    name='clientName'
                                    style={{ width: '306px' }}
                                    onChange={this.handleChange}
                                    value={this.state.UserEstimates.clientName}
                                    disabled={this.state.UserEstimatesDisabled.clientNameDisable}
                                />
                            </div>
                            <div className='SelectBoxesManually'>
                                <Select id="saleStage"
                                   labelText={saleStage}
                                    style={{ marginRight: '2.2%', width: '320px' }}                                
                                    defaultValue="placeholder-item"
                                    name='saleStage'
                                    onChange={this.handleChange}
                                    value={this.state.UserEstimates.saleStage}
                                    disabled={this.state.UserEstimatesDisabled.saleStageDisable}
                                    helperText={this.state.UserEstimatesWarning.saleStageWarning}
                                >
                                    <SelectItem
                                        disabled
                                        hidden
                                        value="placeholder-item"
                                        text={englishValue('ChooseOption')}
                                    />
                                    {saleStageOptions}
                                </Select>
                                {this.state.UserEstimatesWarning.saleStageWarning.length > 0 ?
                                    <div className='saleStageIconDiv'>
                                        {WarningAltFilled14('saleStageIcon')}
                                    </div>
                                    : null
                                }


                                <Select id="industry"
                                    labelText={industry}
                                    defaultValue="placeholder-item"
                                    value={this.state.UserEstimates.industry}
                                    name='industry'
                                    style={{ width: '306px' }}
                                    onChange={this.handleChange}
                                    disabled={this.state.UserEstimatesDisabled.industryDisable}
                                >
                                    <SelectItem
                                        disabled
                                        hidden
                                        value="placeholder-item"
                                        text={englishValue('ChooseOption')}
                                    />
                                    {industryOptions}
                                </Select>
                            </div>
                            <TextInput
                                id="Short-description"
                                labelText="Short Description"
                                placeholder={englishValue('placeHolderOpportunity')}
                                name='ShortDescription'
                                value={this.state.UserEstimates.ShortDescription}
                                onChange={this.handleChange}
                                className='textInputBottom'
                                disabled={this.state.UserEstimatesDisabled.ShortDescriptionDisable}
                            />
                        </div>
                    </div>
                   

                </div>
                <div className='buttonTags'>
                        <Button className='cancelStyle' onClick={this.cancelHandlerButton}>{englishValue('Cancel')}</Button>
                        <Button className='startStyle' disabled={!StartEstimateBtnDisable} onClick={this.StartHandlerEstimate}>{englishValue('StartEstimate')}</Button>
                    </div>

            </>
        );
    }
}

export default NewEstimate;