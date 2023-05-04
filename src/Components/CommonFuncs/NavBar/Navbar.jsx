import React, { useEffect } from 'react';
import { SideNav, SideNavMenu, SideNavItems, SideNavMenuItem, SideNavLink, } from 'carbon-components-react';
import './Navbar.scss';
import { Edit16, Information16, CheckmarkFilled16, WarningFilled16, ErrorFilled16, Link16 }
    from '@carbon/icons-react';

import { englishValue } from '../../../Utils/CommonFunc';
import OutPutNavBar from './OutPutNavBar';
const NavBar = (props) => {
    useEffect(() => {
        let text = document.getElementById(props.title);
        if (text) {
            text.classList.add('active22');
        }
    })

    const iconDisplayHandler = (inputParameter) => {
        return (
            props.userNavBar.userInputs[inputParameter].uiStatus.iconStatus.ok ?
                <span className="tickmark-class"><CheckmarkFilled16 /></span>
                :
                <>
                    {props.userNavBar.userInputs[inputParameter].uiStatus.iconStatus.warning ?
                        <span className="warning-class"> <WarningFilled16 /></span>
                        :
                        <span className="error-class"><ErrorFilled16 /></span>
                    }
                </>

        )
    }
    const iconDisplayHandlerProductivity = (inputParameter) => {
        return (
            props.userNavBar.userInputs['productivity'][inputParameter].uiStatus.iconStatus.ok ?
                <span className="tickmark-class"><CheckmarkFilled16 /></span>
                :
                <>
                    {props.userNavBar.userInputs['productivity'][inputParameter].uiStatus.iconStatus.warning ?
                        <span className="warning-class"> <WarningFilled16 /></span>
                        :
                        <span className="error-class"><ErrorFilled16 /></span>
                    }
                </>

        )
    }
    const outputClass = props.userinputStatusData.outputButton ? 'enableClass' : 'disabledClass';

    const HandlerDahboard = (param, event) => {
        if (outputClass === "disabledClass" && param === "ProductivityCalculation") {
            return;
        }
        event.stopPropagation();
        const x = '/' + param;
        props.history.push(x)
    }


    const navbarHandler = () => {
        props.navigationInputToggle();
    }
    const navbarHandlerInput = () => {
        props.navigationInputToggleInputProductivity();
    }
    const navbarHandlerCalculationProductivity = () => {
        props.navigationInputToggleOutputProductivity();
    }
    return (
        <SideNav className='navInput'
            isFixedNav
            expanded={true}
            isChildOfHeader={false}
            isSideNavExpanded={true}
            aria-label="Side navigation">
            <SideNavItems>
                <div className="input">{englishValue('INPUT')} </div>
                <SideNavLink renderIcon={Edit16} href="#" id='OpportunityParameter'
                    onClick={(event) => HandlerDahboard('OppParamter', event)}>{englishValue('Opportunity Parameters')}</SideNavLink>
                <div onClick={navbarHandler} className='ddddd' style={{ width: "268px" }}>
                    <SideNavMenu
                        renderIcon={Edit16}
                        defaultExpanded={props.userNavbarToggle.NavbarToggle}
                        title={englishValue('Opportunity Inputs')} >
                        <SideNavMenuItem className="anchor-class" id='general' href="#" onClick={(event) => HandlerDahboard('general', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('General')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('general')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class" id='AMSInput' href="#"
                            onClick={(event) => HandlerDahboard('AMSInput', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('AMS Input')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('ams')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class" href="#" id='cloudApps'
                            onClick={(event) => HandlerDahboard('cloudApps', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('Cloud + AppOps')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('cloudAppOps')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class" href="#" id='automation'
                            onClick={(event) => HandlerDahboard('automation', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('Automation')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('automation')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class" href="#" id='testing'
                            onClick={(event) => HandlerDahboard('testing', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('Testing')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('testing')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class" href="#" id='security'
                            onClick={(event) => HandlerDahboard('security', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('Security')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('security')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class " href="#" id='transition'
                            onClick={(event) => HandlerDahboard('transition', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('Transition')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('transition')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem className="anchor-class " href="#" id='nonLabour'
                            onClick={(event) => HandlerDahboard('nonLabour', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Non Labour')}</span>
                                <span className="icondisplay-class">{iconDisplayHandler('nonLabour')}</span>
                            </div>
                        </SideNavMenuItem>
                    </SideNavMenu>
                </div>
                <div onClick={navbarHandlerInput} className='productivity'>
                    <SideNavMenu
                        renderIcon={Edit16}
                        defaultExpanded={props.userNavbarToggle.NavbarToggleInputProd}
                        title={`${englishValue('ProductivityInput')}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('devsecops_1')) ? "active22" : ""}`}
                            href={`#${englishValue('devsecops_1')}`}
                            onClick={(event) => HandlerDahboard('ProductivityInput', event)}>
                            <div className="linkwithIcon-class">
                                <span>{englishValue('DevSecOps')}</span>
                                <span className="icondisplay-class1">{iconDisplayHandlerProductivity('devSecOps')}</span>
                            </div>

                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Automation_1')) ? "active22" : ""}`}
                            href={`#${englishValue("Automation_1")}`}
                            onClick={(event) => HandlerDahboard('ProductivityInput', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Automation1')} </span>
                                <span className="icondisplay-class1">{iconDisplayHandlerProductivity('automation')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Cloud_1')) ? "active22" : ""}`}
                            href={`#${englishValue("Cloud_1")}`}
                            onClick={(event) => HandlerDahboard('ProductivityInput', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Cloud')} </span>
                                <span className="icondisplay-class1">{iconDisplayHandlerProductivity('cloud')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Testing_1')) ? "active22" : ""}`}
                            href={`#${englishValue("Testing_1")}`}
                            onClick={(event) => HandlerDahboard('ProductivityInput', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Testing1')} </span>
                                <span className="icondisplay-class1">{iconDisplayHandlerProductivity('testing')}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Efficiency_1')) ? "active22" : ""}`}
                            href={`#${englishValue("Efficiency_1")}`}
                            onClick={(event) => HandlerDahboard('ProductivityInput', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Efficiency')} </span>
                                <span className="icondisplay-class1">{iconDisplayHandlerProductivity('efficiency')}</span>
                            </div>
                        </SideNavMenuItem>



                    </SideNavMenu>
                </div>
                <div onClick={navbarHandlerCalculationProductivity} className='ddddd'>
                    <SideNavMenu
                        renderIcon={Information16}
                        defaultExpanded={props.userNavbarToggle.NavbarToggleOutputProd}
                        isSideNavExpanded={props.userinputStatusData.outputButton ? props.userNavbarToggle.NavbarToggleOutputProd : false}  //for disable productivity output dropdown
                        title={englishValue('Productivity Calculation')}

                        className={outputClass === "disabledClass" ? "pc_disabledClass" : ""}>

                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Summary')) ? "active22" : ""}`}
                            id='summary'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue('Summary')}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Summary')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y1Productivity')) ? "active22" : ""}`}
                            id='y1_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y1Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y1 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>

                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y2Productivity')) ? "active22" : ""}`}
                            id='y2_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y2Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y2 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y3Productivity')) ? "active22" : ""}`}
                            id='y3_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y3Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y3 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y4Productivity')) ? "active22" : ""}`}
                            id='y4_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y4Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y4 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y5Productivity')) ? "active22" : ""}`}
                            id='y5_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y5Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y5 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>

                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y6Productivity')) ? "active22" : ""}`}
                            id='y6_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y6Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y6 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            className={`anchor-class ${props.location.hash.includes(englishValue('Y7Productivity')) ? "active22" : ""}`}
                            id='y7_productivity'
                            href={outputClass === "disabledClass" ? "javascript:void(0)" : `#${englishValue("Y7Productivity")}`}
                            onClick={(event) => HandlerDahboard('ProductivityCalculation', event)}>
                            <div className="linkwithIcon-class">
                                <span> {englishValue('Y7 Productivity')}</span>
                                <span className="icondisplay-class1">{<Link16 />}</span>
                            </div>
                        </SideNavMenuItem>
                    </SideNavMenu>
                </div>

                {/* <SideNavLink
                    renderIcon={Information16} href="#"
                    onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('ProductivityCalculation', event)
                        }
                    }} 
                    id='ProductivityCalculation' 
                    className={outputClass} >{englishValue('Productivity Calculation')} </SideNavLink> */}


                <SideNavLink
                    renderIcon={Information16}
                    href="javascript:void(0)"
                    className="disabledClass">{englishValue('Non Labour Calculation')}</SideNavLink>
                <SideNavLink
                    renderIcon={Information16}
                    href="javascript:void(0)"
                    onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('CloudCalculation', event)
                        }

                    }} className={outputClass} id='CloudCalculation'  >{englishValue('Complexity & Cloud Calculation')}</SideNavLink>

                <SideNavLink
                    renderIcon={Information16}
                    className={outputClass}
                    href="javascript:void(0)"
                    id='AMSCalculation'
                    onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('AMSCalculation', event)
                        }
                    }}>{englishValue('AMS Calculation')} </SideNavLink>

                <SideNavLink renderIcon={Information16} className={outputClass} href="javascript:void(0)" id='EffortBaselinePerTech' onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        HandlerDahboard('EffortBaselinePerTech', event)
                    }
                }}>{englishValue('EffortBaselinePerTech')} </SideNavLink>

                <SideNavLink renderIcon={Information16} className={outputClass} href="javascript:void(0)" id='TestingCalculation' onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        HandlerDahboard('TestingCalculation', event)
                    }
                }}>{englishValue('TestingCalculation')} </SideNavLink>

                <SideNavLink renderIcon={Information16} className={outputClass} href="javascript:void(0)" id='SecurityCalculation' onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        HandlerDahboard('SecurityCalculation', event)
                    }
                }}>{englishValue('SecurityCalculation')} </SideNavLink>


                <SideNavLink renderIcon={Information16} className={outputClass} href="javascript:void(0)" id='AutomationCalculation' onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        HandlerDahboard('AutomationCalculation', event)
                    }
                }}>{englishValue('AutomationCalculation')} </SideNavLink>

                <div className="output-class">
                    <p className="OutputHeading">{englishValue('MainOutput')}</p>
                    <SideNavLink className={outputClass} renderIcon={Information16} href="javascript:void(0)" id='mainOutput' onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('mainOutput', event)
                        }
                    }}>{englishValue('EffortOutput')}</SideNavLink>
                    <SideNavLink className={outputClass} renderIcon={Information16} href="javascript:void(0)" id='YearROMCost' onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('YearROMCost', event)
                        }
                    }}>{englishValue('YearROMCost')}</SideNavLink>
                    <SideNavLink className={outputClass} renderIcon={Information16} href="javascript:void(0)" id='mainOutputCharts' onClick={(event) => {
                        if (props.userinputStatusData.outputButton) {
                            HandlerDahboard('mainOutputCharts', event)
                        }
                        else return (<div className="LoaderDiv">{englishValue('Spinner')} </div>)
                    }}>{englishValue('DataVisualization')}</SideNavLink>
                </div>



            </SideNavItems>
        </SideNav>
    );
};
export default NavBar;
