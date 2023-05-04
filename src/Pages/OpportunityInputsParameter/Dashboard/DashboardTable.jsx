import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/actions/ActionCreator";
import { FormulaVersion } from "../../../Components/CommonFuncs/formula/FormulaVersionChange";

import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableContainer,
  DataTable,
  Pagination,
  TableToolbarSearch
} from 'carbon-components-react';
import { englishValue } from "../../../Utils/CommonFunc"
import "./DashboardTable.scss"
import EstimateModal from "../../Dashboard/UserEstimates/EstimateModal";
import { Delete16 } from "@carbon/icons-react";
import inputService from "../../../services/InputService";
import DashboardDeleteModal from "./DashboardDeleteModal";
import LoaderApp from "../../LoaderApp";
import { tickStep } from "d3";
import MigrationModal from "../../Versoning/MigrationModal";
import RecalculationModal from "../../Versoning/RecalculationModal";
import MigrationModalApproved from "../../Versoning/MigrationModalApproved";
import MigrationModalInReview from "../../Versoning/MigrationModalInReview";
import ReworkVersionModal from "../../Versoning/ReworkVersionModal";
import MigrationPdf from "../../Versoning/MigrationPdf";
import LoaderMigration from "../../LoaderMigration";
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
  return {
    userSavedEstimate: state.userSavedEstimate,
    userSessionData: state.userSessionData,
  };
}
let dashboardValue = '/dashboard'
class DashboardTable extends React.Component {
  constructor(props) {
    super(props)
    this.userData = window.localStorage.getItem('userData');
    if (this.userData) {
      this.userData = JSON.parse(this.userData)
    }
    //order of the header Data to be disaplayed in dashboard for review and owner Tab
    this.headerDataSet = {
      "ownerTab": [
        { key: "estimationTitle", header: englishValue("Title") },
        { key: "clientName", header: englishValue("Client Name") },
        { key: "opportunityId", header: englishValue("Opportunity Id") },
        { key: "lastUpdatedTimeStamp", header: englishValue("Last Update") },
        { key: "state", header: englishValue("Status") },
        { key: "saleStage", header: englishValue("Sale-Stage") },
        { key: "reviewerName", header: englishValue("Reviewer") },
      ], "reviewTab": [
        { key: "estimationTitle", header: englishValue("Title") },
        { key: "clientName", header: englishValue("Client Name") },
        { key: "opportunityId", header: englishValue("Opportunity Id") },
        { key: "lastUpdatedTimeStamp", header: englishValue("Last Update") },
        { key: "state", header: englishValue("Status") },
        { key: "saleStage", header: englishValue("Sale-Stage") },
        { key: "ownerName", header: englishValue("Owner") }
      ]
    }
    this.state = {
      rowEntries: [],
      dashBoardData: this.getDashBoardEstimates(),
      paginationRecords: [],
      headerData: this.headerDataSet[this.props.toggle],
      pageLoaded: false,
      open: false,
      estimateId: "",
      searchValue: ''

    }
  }
  //getting dashboard data values from redux
  getDashBoardEstimates = () => {
    let estimates = []
    if (this.props.userSessionData.dashBoardData !== undefined && Object.keys(this.props.userSessionData.dashBoardData).length !== 0) {
      estimates = this.props.userSessionData.dashBoardData.estimates
    }
    return estimates;
  }

  getcorrectData = (arrRecord, valueSearch) => {
    //jira 763--search on dashboard
    
    //regex for replacing Unique charters
    let xy = valueSearch.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    //regex for searching the dashboad table items for the search filter
    let regex = new RegExp(`${xy}`, 'i');
    return arrRecord.sort().filter((item) => {
      if (this.props.toggle == 'reviewTab') {
        return (
          regex.test(item.clientName) || regex.test(item.estimationTitle)
          || regex.test(item.opportunityId) || regex.test(item.saleStage) || regex.test(item.state)
          || regex.test(item.ownerName))
      } else {
        return (
          regex.test(item.clientName) || regex.test(item.estimationTitle)
          || regex.test(item.opportunityId) || regex.test(item.saleStage) || regex.test(item.state)
          || regex.test(item.reviewerName))
      }
    }
    );


  }
  getSearchValue = (e) => {

    let valueSearch = e.target.value;
    let searchBoxValue = this.state.paginationRecords;
    if (valueSearch.length == 0) {
      this.setState({
        ...this.state,
        searchValue: '',
        rowEntries: searchBoxValue.slice(0, 10)
      })
    } else {
      searchBoxValue = this.getcorrectData(this.state.paginationRecords, e.target.value)
      this.setState({
        ...this.state,
        searchValue: e.target.value,
        rowEntries: searchBoxValue.slice(0, 10)
      })
    }

  }
  handleTabToggle = () => {
    let pdata;
    let data = this.getDashBoardEstimates()
    data.forEach((ele) => ele.id = ele._id);
    data.sort((a, b) => new Date(b.lastUpdatedTimeStamp).getTime() - new Date(a.lastUpdatedTimeStamp).getTime());
    //get reviwer data estimates
    if ("reviewTab" === this.props.toggle) {
      pdata = data.filter((ele) => {
        if (ele.reviewerEmail === this.userData.email)
          return ele;
      });
      //paginationRecords contains whole dashboard data of either reviewr tab or owner depending on toggle
      this.setState({
        ...this.state,
        headerData: this.headerDataSet[this.props.toggle],
        paginationRecords: pdata,
        rowEntries: pdata.slice(0, 10),
        pageLoaded: true
      })
    } else {
      pdata = data.filter((ele) => {
        if (ele.ownerEmail === this.userData.email)
          return ele;
      });
      this.setState({
        ...this.state,
        headerData: this.headerDataSet[this.props.toggle],
        paginationRecords: pdata,
        rowEntries: pdata.slice(0, 10),
        pageLoaded: true
      })
    }
  }
  componentDidMount() {
    this.paginateData({ page: 1, pageSize: 10 })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.history.location.pathname === "/dashboard") {
      //IMP CONDITION WHEN WE HAVE TO SET COLUMNS FOR  DATA TABLE
      if (this.props.toggle !== prevProps.toggle) {
        this.handleTabToggle()
      } else {
        if (this.state.dashboardData !== prevState.dashboardData || !this.state.pageLoaded) {
          this.setState({ dashboardData: this.state.dashBoardData, pageLoaded: false })
          this.handleTabToggle()
          return true;
        }
        return false;
      }
      if (this.state.dashboardData === prevState.dashboardData && !this.state.pageLoaded) {
        this.paginateData({ pageSize: 10, page: 1 });
        return true;
      }
    }
    return false;
  }
  paginateData = (e) => {
    let start = (e.page - 1) * e.pageSize;
    let end = (e.page) * e.pageSize;
    let searchBoxValue = this.getcorrectData(this.state.paginationRecords, this.state.searchValue)
    this.setState({ rowEntries: searchBoxValue.slice(start, end) })
  }
  // function for New Estimate Btn in Application
  getEstimateString = () => {
    if (this.state != null)
      return (<EstimateModal toggle={this.state.toggle} {...this.props}></EstimateModal>)
    else
      return (<div></div>)
  }

  deleteEstimate = (deleteId) => {
    this.props.userMyEstimateDataDelete(deleteId).then((res) => {
      if (res.status === 'SUCCESS') {
        this.setState({ estimateId: "" });
        let userData = window.localStorage.getItem('userData');
        userData = JSON.parse(userData);
        let InputData = { "data": { "userInfo": { "email": userData.email } } }
        this.props.userMyEstimateData(InputData).then((res) => {
          if (res.status === 'SUCCESS') {
            this.props.userinputStatus({
              RestButton: false, EstimateButton: true,
              SaveButton: false,
              CalculateButton: false,
              SendForReivewButton: false,
              Export: false,
              outputButton: false,
              inputButton: false,
              calculateModal: false,
              saveModal: false
            });
            this.props.history.push(dashboardValue);
            this.props.hideScreenDashLoader();
          }
          else {
            if (res.errorCode === 'ERRCAS401B') {
              this.props.history.push('/');
            } else {
              alert(englishValue('TechnicalError'))
            }
            this.props.hideScreenDashLoader();
          }

        }).catch((err) => {
          alert(englishValue('TechnicalError'))
          this.props.hideScreenDashLoader();
        });


      }
      else {
        if (res.errorCode === 'ERRCAS401B') {
          this.props.history.push('/');
        } else {
          alert(englishValue('TechnicalError'))
        }
        this.props.hideScreenDashLoader();
      }
    }).catch((err) => {
      alert(englishValue('TechnicalError'))
      this.props.hideScreenDashLoader();

    });

  }

  close = () => {
    this.setState({ open: false });
  }
  //display totalItems in pagination
  searchedItemLength() {
    if (this.state.searchValue) {
      return (this.getcorrectData(this.state.paginationRecords, this.state.searchValue).length)
    }
    else {
      return this.state.paginationRecords.length
    }

  }
  render() {
    //Normal Flow In Versioning JIRA 787
    let normalFlowData = (estimateId, response) => {
      this.props.showScreenDashLoader(this.props.toggle);
      this.props.getSavedEstimate(estimateId, response.estimateData).then((res) => {
        if (res.status === 'SUCCESS') {
          this.props.hideScreenDashLoader();
          if (this.props.history.location.pathname !== "/mainOutput")
            this.props.history.push('/mainOutput');
        }
        else {
          this.props.hideScreenDashLoader();
          if (res.errorCode === 'ERRCAS401B') {
            this.props.history.push('/');
          } else {
            alert(englishValue('TechnicalError'))
          }
        }
      }).catch((err) => {
        this.props.hideScreenDashLoader();
        alert(englishValue('TechnicalError'))
      });
    }
    //Recalculate Flow In Versioning JIRA 787 
    let recalculationFlowData = (estimateId, response, idDataStatus, email) => {
      this.props.showScreenPopupVersion('Recalculation', idDataStatus, email);
      this.props.getSavedEstimate(estimateId, response.estimateData).then((res) => {
        // if(idDataStatus == 'Approved'){
        //   this.props.showSendForPDFApprovalPopup();
        // }

        if (res.status === 'SUCCESS') {
          this.props.hideScreenDashLoader();
          if (this.props.history.location.pathname !== "/mainOutput")
            this.props.history.push('/mainOutput');
        }
        else {
          this.props.hideScreenDashLoader();
          if (res.errorCode === 'ERRCAS401B') {
            this.props.history.push('/');
          } else {
            alert(englishValue('TechnicalError'))
          }
        }
      }).catch((err) => {
        this.props.hideScreenDashLoader();
        alert(englishValue('TechnicalError'))
      });
    }

    //pdf dashoard- fecthning the data from api and sendig calling the pdf container
    const startEstimateHandler = () => {
      let estimateId = window.localStorage.getItem('estimateId');
      estimateId = JSON.parse(estimateId)
      this.props.hideScreenPopupVersion();
      this.props.showScreenDashLoader(this.props.toggle);
      this.props.usergetpdfdashboarddata(estimateId).then((res) => {
        if (res.status == 'SUCCESS') {
          this.props.showSendForPDFApprovalPopup();
          this.props.hideScreenDashLoader();
        }
        else {
          alert(englishValue('TechnicalError'))
          this.props.hideScreenDashLoader();
        }

      });
    }
    //migration flow work on click of button in Migration Modal OK
    let MigrationFlowOK = () => {
      let estimateId = window.localStorage.getItem('estimateId');
      estimateId = JSON.parse(estimateId)
      this.props.getSavedEstimateMigrationFlow(estimateId).then((res) => {
        if (res.status === 'SUCCESS') {
          this.props = {
            ...this.props,
            userDropDownData: {
              defaultDropDown: res.data.dropdowndata
            },
            userInpuData: {
              defaultInputData: {
                response: {
                  estimate: res.data.inputData.response.estimate
                }
              }
            },
            userCalculateTicketPercentage: res.data.ticketDistribution,
            userNonLabourStub: {
              response: {
                nonLaborCostStub: res.data.labourData.response.nonLaborCostStub
              }
            },
            userYearOneBaselineTestingFTEs: res.data.calculateMinEnhWtHrs
          }

          FormulaVersion(this.props).then((res) => {
            this.props.hideScreenDashLoaderMigration();
            if (res == 'success') {
              this.props.hideScreenDashLoaderMigration();
              if (this.props.history.location.pathname !== "/OppParamter") {
                this.props.showMigrationPopup();
                this.props.history.push('/OppParamter');
              }
            } else {
              this.props.hideScreenDashLoaderMigration();
              alert(englishValue('TechnicalError'))
            }
          });

        }
        else {
          this.props.hideScreenDashLoaderMigration();
          if (res.errorCode === 'ERRCAS401B') {
            this.props.history.push('/');
          } else {
            alert(englishValue('TechnicalError'))
          }
        }
      }).catch((err) => {
        this.props.hideScreenDashLoaderMigration();
        alert(englishValue('TechnicalError'))
      });
    }
    //Migration Flow In Versioning JIRA 787
    let MigrationFlowData = (estimateId, idDataStatus, email) => {
      // this.props.showScreenPopupVersion('Migration', idDataStatus, email);
      this.props.showScreenDashLoaderMigration('migrationNew_rework');
      MigrationFlowOK();
    }
    //Function runs onClick of the estimATE anchor tag
    let HandlerDashboard = (estimateId) => {
      let userData = window.localStorage.getItem('userData');
      userData = JSON.parse(userData);
      //Fetching Data from Dashboard Fetch Estimates
      let idData = this.props.userSessionData.dashBoardData.estimates?.reduce((prev, current) => current.id === estimateId ? {
        ...prev,
        id: current['id'],
        ownerEmail: current['ownerEmail'],
        ownerName: current['ownerName'],
        reviewerEmail: current['reviewerEmail'],
        reviewerName: current['reviewerName'],
        state: current['state'],
        approvalComment:current['approvalComment']
      } : prev, {})

      window.localStorage.setItem('estimateId', JSON.stringify(estimateId));
      // window.localStorage.setItem('Rev_ID', JSON.stringify(estimateId));
      window.localStorage.setItem('approvalComment', JSON.stringify(idData['approvalComment']));
      this.props.showScreenDashLoader(this.props.toggle);
      this.props.getSavedEstimateMigration(estimateId).then((response) => {
        this.props.hideScreenDashLoader();
        // NORMAL FLOW 
        if (response.messageAlert == 'Normal Flow') {
          normalFlowData(estimateId, response)
        }

        //Recalculation Flow  Opening the Modal recalculate Modal and  calling the detail screen
        if (response.messageAlert == 'Recalculation') {
          recalculationFlowData(estimateId, response, idData.state, idData.ownerEmail)
        }

        //Migration Flow Opening the Modal recalculate Modal and  calling the formula and  detail screen
        else if (response.messageAlert == 'MIGRATION') {
          if (idData.state == 'New' || (idData.state == 'Rework' && idData.ownerEmail == userData.email)) {
            MigrationFlowData(estimateId, idData.state, idData.ownerEmail)
          } else if (idData.state == 'Rework' && idData.ownerEmail !== userData.email) {
            this.props.showScreenPopupVersion('Migration', idData.state, idData.ownerEmail);
          } else if (idData.state == 'Approved') {
            this.props.showScreenPopupVersion('Migration', idData.state, idData.ownerEmail);
          } else if (idData.state == 'InReview') {
            this.props.showScreenPopupVersion('Migration', idData.state, idData.ownerEmail);
          }
        }

      }).catch((err) => {
        this.props.hideScreenDashLoader();
        alert(englishValue('TechnicalError'))
      })


    }


    function getCellValue(cell) {
      let arr = cell.id.split(":")
      let id = arr[0] + ":" + arr[1]
      if (cell.id.includes("estimationTitle")) {
        return <a href="#" className="href" onClick={() => { HandlerDashboard(id) }}> {cell.value}</a>
      } else if (cell.id.includes("saleStage")) {
        return (cell.value).toUpperCase()
      }
      else {
        return cell.value;
      }
    }
    return (
      <>
        {/* Migration modal opening based on Approve flow */}
        {this.props.userSessionData.reworkPopup ?
          <ReworkVersionModal  {...this.props} ></ReworkVersionModal>
          : ''}
        {this.props.AppScreenLoader.flagVersion ?
          <>
            {this.props.AppScreenLoader.labelVersion == 'Migration' ?
              <>
                {this.props.AppScreenLoader.labelVersionStatus == 'Approved' ?
                  <>
                    <MigrationModalApproved  {...this.props} startEstimateHandler={startEstimateHandler}></MigrationModalApproved>
                  </>

                  :
                  <>
                    {this.props.AppScreenLoader.labelVersionStatus == 'InReview' ?
                      <MigrationModalInReview {...this.props} ></MigrationModalInReview>
                      : <MigrationModal MigrationFlowOKData={MigrationFlowOK} {...this.props} ></MigrationModal>}
                  </>

                }
              </>
              : <RecalculationModal {...this.props}></RecalculationModal>}
          </>
          : <>
            {this.props.userSessionData.pdfapprovalPopup ? <MigrationPdf  {...this.props} ></MigrationPdf> :
              ''}
          </>}
        {/* end */}
        {this.props.AppScreenLoader.labelMigration == 'migrationNew_rework' ?
          <LoaderMigration loaderBtn={this.props.AppScreenLoader.flagMigration} labelLoader={this.props.AppScreenLoader.labelMigration} /> :
          <LoaderApp loaderBtn={this.props.AppScreenLoader.flag} labelLoader={this.props.AppScreenLoader.label} />
        }

        <div className="table">
          <DataTable rows={this.state.rowEntries} headers={this.state.
            headerData} isSortable >
            {({ rows, headers, getHeaderProps, getTableProps, getRowProps, getBatchActionProps, onInputChange, modalOpenFetch }) => (
              <TableContainer >
                <div className="tableparent">
                  {/* search funcnality to be added later */}

                  <TableToolbarSearch
                    persistent="true"
                    className="SearchPlaceholder"
                    // persistent="true"
                    tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                    onChange={this.getSearchValue}
                  />
                  {this.getEstimateString()}
                </div>
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow >
                      {headers.map((header) => (
                        <TableHeader key={header.key} {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                      <TableHeader></TableHeader>
                    </TableRow>
                  </TableHead>
                  <TableBody className="tableBody">
                    {rows.map((row) => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        {row.cells.map((cell) => (
                          <TableCell key={cell.id}>
                            {getCellValue(cell)}</TableCell>
                        ))}
                        {("reviewTab" !== this.props.toggle) ? <TableCell>{(row.cells[4].value === 'New' || row.cells[4].value === 'Rework') ? <Delete16 onClick={() => {
                          this.setState({ open: true, estimateId: row.id })
                        }} /> : <></>}</TableCell> : <></>}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DataTable>
          <div className="pagination">
            <Pagination onChange={this.paginateData}
              backwardText="Previous page"
              forwardText="Next page"
              itemsPerPageText="Items per page:"
              page={1}
              pageNumberText="Page Number"
              pageSize={10}
              pageSizes={[
                10,
                20,
                30,
                40,
                50
              ]}
              totalItems={this.searchedItemLength()}
            />
          </div>
        </div>
        {/* Deleteicon Modal */}
        {this.state.open ? <DashboardDeleteModal  {...this.props} open={this.state.open}
          close={this.close} estimateId={this.state.estimateId}
          deleteEstimate={this.deleteEstimate} /> : <></>}
      </>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardTable);






