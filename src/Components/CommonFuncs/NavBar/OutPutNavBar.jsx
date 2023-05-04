import React, { useEffect } from 'react';
import { SideNav, SideNavMenu, SideNavItems, SideNavMenuItem, SideNavLink, } from 'carbon-components-react';
import './Navbar.scss';
import { Edit16, Information16, CheckmarkFilled16, WarningFilled16, ErrorFilled16 }
    from '@carbon/icons-react';

import { englishValue } from '../../../Utils/CommonFunc';
const OutPutNavBar = (props) => {
    return (
        <>
            <SideNavLink renderIcon={Information16} href="javascript:void(0)"
                onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        props.HandlerDahboardNav('ProductivityCalculation', event)
                    }
                }} id='ProductivityCalculation' className={props.outputClassnav} >{englishValue('Productivity Calculation')} </SideNavLink>
            <SideNavLink renderIcon={Information16} href="javascript:void(0)" className="disabledClass">{englishValue('Non Labour Calculation')}</SideNavLink>
            <SideNavLink renderIcon={Information16} href="javascript:void(0)" onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('CloudCalculation', event)
                }

            }} className={props.outputClassnav} id='CloudCalculation'  >{englishValue('Complexity & Cloud Calculation')}</SideNavLink>
            <SideNavLink renderIcon={Information16} className={props.outputClassnav} href="javascript:void(0)" id='AMSCalculation' onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('AMSCalculation', event)
                }
            }}>{englishValue('AMS Calculation')} </SideNavLink>
            <SideNavLink renderIcon={Information16} className={props.outputClassnav} href="javascript:void(0)" id='EffortBaselinePerTech' onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('EffortBaselinePerTech', event)
                }
            }}>{englishValue('EffortBaselinePerTech')} </SideNavLink>

            <SideNavLink renderIcon={Information16} className={props.outputClassnav} href="javascript:void(0)" id='TestingCostSummary' onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('TestingCostSummary', event)
                }
            }}>{englishValue('TestingCostSummary')} </SideNavLink>



            <SideNavLink renderIcon={Information16} className={props.outputClassnav} href="javascript:void(0)" id='SecurityPriceSummary' onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('SecurityPriceSummary', event)
                }
            }}>{englishValue('SecurityPriceSummary')} </SideNavLink>

            <SideNavLink renderIcon={Information16} className={props.outputClassnav} href="javascript:void(0)" id='AutomationSummary' onClick={(event) => {
                if (props.userinputStatusData.outputButton) {
                    props.HandlerDahboardNav('AutomationSummary', event)
                }
            }}>{englishValue('AutomationSummary')} </SideNavLink>
            <div class="output-class">

                <p>OUTPUT</p>
                <SideNavLink className={props.outputClassnav} renderIcon={Information16} href="javascript:void(0)" id='mainOutput' onClick={(event) => {
                    if (props.userinputStatusData.outputButton) {
                        props.HandlerDahboardNav('mainOutput', event)
                    }
                }}>Effort Output</SideNavLink>

            </div>

        </>

    );
};
export default OutPutNavBar;
