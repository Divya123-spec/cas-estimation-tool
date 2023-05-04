import React, { useState } from 'react';
import NavBar from '../../Components/CommonFuncs/NavBar/Navbar';
import { Content, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from 'carbon-components-react';
import HeaderInputs from '../OpportunityInputsParameter/HeaderInputs';
import './MainOutput.scss';
import { currencyCoverter, englishValue } from '../../Utils/CommonFunc';
import LoaderApp from '../LoaderApp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Information12 } from '../../Components/CommonFuncs/Icons'
import { actionCreators } from '../../store/actions/ActionCreator';
import Feedback from '../Feedback/Feedback';
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
  return {
    userDropDownData: state.userDropDown,
    userInpuData: state.userInputData,
    userOutputData: state.userOutputData,
    userSessionData: state.userSessionData,
    userApiIbmWeightedUtilize: state.ApiIbmWeightedUtilize,
    userCalculateTicketPercentage: state.CalculateTicketPercentage,
    userYearOneBaselineTestingFTEs: state.YearOneBaselineTestingFTEs,
    userinputStatusData: state.inputStatus,
    userestimateState: state.userEstimateState,
    userNavbarToggle: state.userNavbarReducer,
    userAppScreenLoader: state.userScreenLoaderApp
  };
};

const arrCoversionOrder = (originalArr, orderArr) => {
  let newOrderedArr = [];
  orderArr.forEach((ele) => {
    originalArr.forEach((e) => {
      if (ele == e[0]) {
        newOrderedArr.push(e);
      }
    });
  });
  return newOrderedArr;
};
const headerData = [englishValue('output'), englishValue('PriceperUnit'), englishValue('simpleapplications'),
englishValue('moderateapplications'), englishValue('complexapplications'), englishValue('scuritytotal'),]
const inScopeSecurity = (item, name) => {
  return (<>
    <TableRow>
      <TableCell>{englishValue(`${name}_row1`)}</TableCell>
      <TableCell></TableCell>
      <TableCell>{item.simple}</TableCell>
      <TableCell>{item.medium}</TableCell>
      <TableCell>{item.complex}</TableCell>
      <TableCell>{item.total}</TableCell>
    </TableRow>
  </>

  )
}

const penetrationTest = (item, name) => {
  let pentrationMap = Object.entries(item)
  // arrange the objects in a format JIRA 519
  let pentrationMapinfo = arrCoversionOrder(pentrationMap, [
    "penTestGuidelinesForSecurity",
    "appDistributionCalculationBasic",
    "appDistributionCalculationStandard",
    "appDistributionCalculationAdvanced",
    "totalPriceForPENTestInUSD"

  ]);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell colSpan={headerData.length}>
          <strong>{englishValue(name)}</strong>
        </TableCell>
      </TableRow>
      {
        pentrationMapinfo.map(i => {
          if (i[0] !== "penTestGuidelinesForSecurity") {
            if (i[0] == "totalPriceForPENTestInUSD") {
              return (<TableRow className="table-no-border">
                <TableCell className="tableBold">{englishValue(i[0])}</TableCell>
                <TableCell className="tableBold"></TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].simple)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].medium)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].complex)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].total)}</TableCell>

              </TableRow>)
            }
            else {
              let price = i[0].replace('appDistributionCalculation', '').toLowerCase()
              return (<TableRow className="table-no-border">
                <TableCell >{englishValue(i[0])}</TableCell>
                <TableCell >{currencyCoverter(item['penTestGuidelinesForSecurity']['penTestAnnualPriceInUSD'][price])}</TableCell>
                <TableCell >{currencyCoverter(i[1].simple)}</TableCell>
                <TableCell >{currencyCoverter(i[1].medium)}</TableCell>
                <TableCell >{currencyCoverter(i[1].complex)}</TableCell>
                <TableCell >{currencyCoverter(i[1].total)}</TableCell>

              </TableRow>)
            }
          }


        }

        )
      }

    </React.Fragment>


  )
}

const devopsPrice = (item, name) => {
  return (<>
    <TableRow>
      <TableCell colSpan={headerData.length}>
        <strong>{englishValue(`${name}_devname`)}</strong>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>{englishValue(`${name}_devname`)}</TableCell>
      <TableCell></TableCell>
      <TableCell>{currencyCoverter(item.simple)}</TableCell>
      <TableCell>{currencyCoverter(item.medium)}</TableCell>
      <TableCell>{currencyCoverter(item.complex)}</TableCell>
      <TableCell>{currencyCoverter(item.total)}</TableCell>
    </TableRow>
  </>

  )
}

const vulnerabilityPrice = (item, name) => {
  return (<>
    <TableRow>
      <TableCell colSpan={headerData.length}>
        <strong>{englishValue(`${name}`)}</strong>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>{englishValue(`${name}`)}</TableCell>
      <TableCell>{currencyCoverter(item['vulnerabilityScanGuidelinesForSecurity']['vulnerabilityScanPricePerReleasePerYearInUSD'])}</TableCell>
      <TableCell>{currencyCoverter(item['totalPriceForVulnerabilityScanForSecurityInUSD'].simple)}</TableCell>
      <TableCell>{currencyCoverter(item['totalPriceForVulnerabilityScanForSecurityInUSD'].medium)}</TableCell>
      <TableCell>{currencyCoverter(item['totalPriceForVulnerabilityScanForSecurityInUSD'].complex)}</TableCell>
      <TableCell>{currencyCoverter(item['totalPriceForVulnerabilityScanForSecurityInUSD'].total)}</TableCell>
    </TableRow>
  </>

  )
}

const consultingXforceTeamPrice = (item, name) => {
  let consultingMap = Object.entries(item);
  let consultingMapinfo = arrCoversionOrder(consultingMap, [
    "totalOneTimePriceForConsultingForSecurityInUSD",
    "totalAnnuallyRecurringPriceForConsultingForSecurityInUSD"

  ]);

  return (<>
    <TableRow>
      <TableCell colSpan={headerData.length}>
        <strong>{englishValue(`${name}`)}</strong>
      </TableCell>
    </TableRow>
    {
      consultingMapinfo.map(i => {
        if (i[0] !== 'consultingGuidelinesForSecurity') {
          return (<TableRow className="table-no-border">
            <TableCell className="rowbold">
              <p> {englishValue(i[0])}</p>
              <p className="infoClasss"><Information12 />{englishValue(`${i[0]}_info`)}</p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="tableBold">{currencyCoverter(i[1].small)}</TableCell>
            <TableCell className="tableBold">{currencyCoverter(i[1].sumMediumAndLarge)}</TableCell>
            <TableCell className="tableBold">{currencyCoverter(i[1].extraLarge)}</TableCell>
            <TableCell className="tableBold">{currencyCoverter(i[1].total)}</TableCell>
          </TableRow>)
        }


      })
    }
  </>
  )
}

const priceForSecurity = (item, name) => {
  let priceSecurity = Object.entries(item)
  let priceSecurityinfo = arrCoversionOrder(priceSecurity, [
    "yoyPriceCalculationGuidelinesForSecurity",
    "securityPriceInUSDY1",
    "securityPriceInUSDY2",
    "securityPriceInUSDY3",
    "securityPriceInUSDY4",
    "securityPriceInUSDY5",
    "securityPriceInUSDY6",
    "securityPriceInUSDY7",
    "totalSecurityPriceInUSDAllYears"
  ]);
  return (
    <React.Fragment>
      <TableRow>
        <TableCell colSpan={headerData.length}>
          <strong>{englishValue(name)}</strong>
        </TableCell>
      </TableRow>
      {
        priceSecurityinfo.map(i => {
          if (i[0] !== "yoyPriceCalculationGuidelinesForSecurity") {
            if (i[0] == "totalSecurityPriceInUSDAllYears") {
              return (<TableRow className="table-no-border">
                <TableCell className="tableBold">{englishValue(i[0])}</TableCell>
                {/* <TableCell className="tableBold" >${item['yoyPriceCalculationGuidelinesForSecurity'][price]}</TableCell> */}
                <TableCell className="tableBold"></TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].simple)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].medium)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].complex)}</TableCell>
                <TableCell className="tableBold">{currencyCoverter(i[1].total)}</TableCell>

              </TableRow>)
            }
            else {
              let price = i[0].replace('securityPriceInUSD', 'percentage')
              return (<TableRow className="table-no-border">
                {englishValue(i[0]) == "Total Price Y1" ? <TableCell>
                  <p> {englishValue(i[0])}</p>
                </TableCell> :
                  <TableCell>
                    <p> {englishValue(i[0])}</p>
                    <p className="infoClasss"><Information12 />{englishValue(`${i[0]}_info`)}</p>
                  </TableCell>}
                <TableCell >{item['yoyPriceCalculationGuidelinesForSecurity'][price]}%</TableCell>
                <TableCell >{currencyCoverter(i[1].simple)}</TableCell>
                <TableCell >{currencyCoverter(i[1].medium)}</TableCell>
                <TableCell >{currencyCoverter(i[1].complex)}</TableCell>
                <TableCell >{currencyCoverter(i[1].total)}</TableCell>
              </TableRow>)
            }
          }


        }

        )
      }

    </React.Fragment>


  )
}

const SecurityCalculation = (props) => {
  let securityOutputData = Object.entries(props.userOutputData.defaultOutputData.response.intermediateOutputs.securityOutput['securityPriceSummary']);
  let securityOutput = props.userOutputData.defaultOutputData.response.intermediateOutputs.securityOutput;
  return (
    <div className="inputName" id='SecurityPriceSummary'>
      <LoaderApp loaderBtn={props.userAppScreenLoader.flag} labelLoader={props.userAppScreenLoader.label} />
      <NavBar {...props} userNavBar={props.userInpuData.defaultInputData['response']['estimate']}
        title='SecurityCalculation'></NavBar>
      <Content>
        <HeaderInputs  {...props} userData1={props.userInpuData.defaultInputData['response']['estimate']}
          title='output'
        > </HeaderInputs>
        <div className='outputMainHead'>
          <div className='outputMain'>
            <div className='mainOutputs'>

              <DataTable
                rows={securityOutputData}
                headers={headerData}>
                {({ rows, headers, getHeaderProps }) => (
                  <TableContainer
                    title={englishValue('SecurityPriceSummary')}
                    description=''
                  >
                    <Table >
                      <TableHead>
                        <TableRow>
                          {headers.map((header) => (
                            <TableHeader >
                              {header}
                            </TableHeader>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {inScopeSecurity(securityOutput['securityPriceSummary']['appsInScopeForSecurityPercentage'], 'appsInScopeForSecurityPercentage')}
                        {penetrationTest(securityOutput['securityPriceSummary']['penTestPriceCalculation'], 'PenetrationTest')}
                        {devopsPrice(securityOutput['securityPriceSummary']['devOpsIntegrationPriceCalculation']['totalPriceForDevOpsSetupForSecurityInUSD'], 'totalPriceForDevOpsSetupForSecurityInUSD')}
                        {vulnerabilityPrice(securityOutput['securityPriceSummary']['vulnerabilityScanPriceCalculation'], 'VulnerabilityPrice')}
                        {consultingXforceTeamPrice(securityOutput['securityPriceSummary']['consultingPriceCalculation'], 'ConsultingXforceTeamPrice')}
                        {priceForSecurity(securityOutput['securityPriceSummary']['securityPriceFor7YearsCalculation'], 'PriceForSecurityFor7Years')}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </DataTable>

            </div>
          </div>
        </div>
        <Feedback/>
      </Content>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SecurityCalculation);