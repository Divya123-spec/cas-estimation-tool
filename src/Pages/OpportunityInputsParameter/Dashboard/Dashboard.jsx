import React from "react"
import { Tab, Tabs, Search, InlineNotification } from 'carbon-components-react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/actions/ActionCreator";
import "./Dashboard.scss"
import DashboardTable from "./DashboardTable";
import { englishValue } from "../../../Utils/CommonFunc"
import EstimateModal from "../../Dashboard/UserEstimates/EstimateModal";
import Feedback from "../../Feedback/Feedback";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
function mapStateToProps(state) {
  return {
    userSessionData: state.userSessionData,
    userDropDownData: state.userDropDown,
    userAppScreenLoader: state.screendashLoader,
  }
}

//dispalying /dashboard  in application
class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    let userData = window.localStorage.getItem('userData');
    let toggle = "ownerTab"
    if (this.props.userAppScreenLoader) {
      if (this.props.userAppScreenLoader.label == 'reviewTab') {
        toggle = 'reviewTab'
      }
    }



    if (Object.keys(userData).length !== 0) {
      userData = JSON.parse(userData)
      if (userData.roles.owner === false && userData.roles.reviewer === true) {
        toggle = "reviewTab";
        this.setToggle({ target: { id: toggle } })
      }
    }

    this.setState({
      toggle: toggle,
      dashboardData: [],
      userData: userData
    })
    this.render = this.render.bind(this);
  }
  //setting the toggle to reviewTab or ownerTab
  setToggle = (e) => {

    this.setState({ toggle: e.target.id })
  }
  getDashBoardDataLocal = () => {
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)

    //Ai call on conditionds to get dashboard data
    if (Object.keys(userData).length !== 0 && (Object.keys(this.props.history.location.pathname === "/dashboard") &&
      (this.props.userSessionData.dashBoardData === undefined || Object.keys(this.props.userSessionData.dashBoardData).length === 0))) {
      let inputData = {
        "data": {
          "userInfo": {
            "email": userData.email
          }
        }
      }
      this.props.showScreenDashLoader();
      this.props.getDashBoardData(inputData).then((res) => {
        if (res.status === 'SUCCESS') {
          // to display weather in our application is in maintance or not 
          window.localStorage.setItem('isMaintenancePlanned', JSON.stringify(res.isMaintenancePlanned));
          window.localStorage.setItem('isMaintenancePlannedMsg', JSON.stringify(res.maintenanceMessage));
          
          let userData = window.localStorage.getItem('userData');
          let toggle = "ownerTab"
          if (Object.keys(userData).length !== 0) {
            userData = JSON.parse(userData)
            if (userData.roles.owner === false && userData.roles.reviewer === true) {
              toggle = "reviewTab"
            }
          }

          this.props.hideScreenDashLoader();
          this.setState({ toggle: toggle })
        }
        else {
          if (res.errorCode === 'ERRCAS401B') {
            this.props.history.push('/');
          } else {
            alert(englishValue('TechnicalError'))
          }
          this.props.hideScreenLoader();
        }

      })
    }
  }
  getDashBoardTableString = () => {
    if (this.state != null) {
      if (this.props.userAppScreenLoader.flag) {
        return (<DashboardTable AppScreenLoader={this.props.userAppScreenLoader} key={Math.random()} toggle={this.props.userAppScreenLoader.label == 'reviewTab' ? 'reviewTab' : 'ownerTab'} {...this.props} />)
      } else {
        return (<DashboardTable AppScreenLoader={this.props.userAppScreenLoader} key={Math.random()} toggle={this.state.toggle} {...this.props} />)
      }
    }
    else
      return (<div></div>)
  }
  getTabsBasedOnRoles = () => {
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)


    let getOwnerTab = () => {

      if (userData.roles.owner) {
        // if(this.props.userAppScreenLoader.flag&&this.props.userAppScreenLoader.label=='reviewTab'){
        //   let c=document.getElementsByClassName('owner');
        //   c[0].classList.remove('bx--tabs--scrollable__nav-item--selected2');

        if (this.props.userAppScreenLoader.flag && this.props.userAppScreenLoader.label == 'reviewTab') {
          let cls = "bx--tabs--scrollable__nav-item--selected2";
          cls = "inner-tab " + cls;
          return (
            <Tab className={cls}
              onClick={this.setToggle}
              id="ownerTab"
              label={englishValue('MyEstimates')}
            >
            </Tab>)

        } else {
          return (
            <Tab className="inner-tab owner"
              onClick={this.setToggle}
              id="ownerTab"
              label={englishValue('MyEstimates')}
            >
            </Tab>)
        }

      } else {
        return (<div></div>)
      }
    }
    let getReviewTab = () => {
      if (this.props.userAppScreenLoader.flag && this.props.userAppScreenLoader.label == 'reviewTab') {
        let cls = "bx--tabs--scrollable__nav-item--selected";
        cls = "inner-tab " + cls;
        if (userData.roles.reviewer) {
          return (
            <Tab className={cls}
              onClick={this.setToggle}
              id="reviewTab"
              label={englishValue('ReviewEstimates')}
            />)
        }
      } else {
         /// if we have only reviewer tab to make to selected(Black) by default 
        let cls = (userData.roles.reviewer && !userData.roles.owner) ? "bx--tabs--scrollable__nav-item--selected" : "";
        cls = "inner-tab " + cls;
        if (userData.roles.reviewer) {
          return (
            <Tab className={cls}
              onClick={this.setToggle}
              id="reviewTab"
              label={englishValue('ReviewEstimates')}
            />)
        } else {
          return (<div></div>)
        }
      }

    }
    return (
      <Tabs scrollIntoView={false}
        type='container'>
        {getOwnerTab()}
        {getReviewTab()}
      </Tabs>
    )
  }
  componentDidMount() {
    if (this.props.history.location.pathname === "/dashboard") {
      this.getDashBoardDataLocal()
    }

    if (Object.keys(this.props.userSessionData).length !== 0) {
      let userData = window.localStorage.getItem('userData');
      userData = JSON.parse(userData);
      let toggle = 'ownerTab'
      if (userData.roles.owner === false && userData.roles.reviewer === true) {
        toggle = "reviewTab"
      }
      this.setState({ toggle: toggle });

    }

  }


  render() {

    const para = englishValue("HeadingPara")
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData)
    //check maintance flag
    //start
    let userDataMaintance = window.localStorage.getItem('isMaintenancePlanned');
    userDataMaintance = JSON.parse(userDataMaintance);
    let isMaintenancePlannedMsg = window.localStorage.getItem('isMaintenancePlannedMsg');
    isMaintenancePlannedMsg = JSON.parse(isMaintenancePlannedMsg);
    //let userDataMaintance=false;
    //end
    return (
      <>

        <div className="main">
          {userDataMaintance ? <div className="inlineNotificationdiv">
            <InlineNotification title='' subtitle={isMaintenancePlannedMsg} kind='info' />
          </div> : <></>}

          <h1 className="head">{englishValue('Welcome')} , {userData.name} <span className="name"></span></h1>
          <p className="paragraph">{para}</p>
        </div>
        <div className="tabs">
          {this.getTabsBasedOnRoles()}
        </div>
        <div className='display'>
        </div>

        {this.getDashBoardTableString()}
        <Feedback/>
      </>
      
    )


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)