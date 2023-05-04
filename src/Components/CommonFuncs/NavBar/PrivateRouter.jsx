import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { englishValue } from '../../../Utils/CommonFunc';
import { connect } from 'react-redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import { bindActionCreators } from 'redux';
function mapStateToProps(state) {
  return {
    userInpuData: state.userInputData,
    userOutputData: state.userOutputData,
    userDropDownData: state.userDropDown
    
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
//check weather the redux data is there if no then move to dashboard 
function PrivateRoute( {component: Component, ...rest} ) {
  var dataUser={...rest};
  let userData = window.localStorage.getItem('userData');
    return (
      <Route {...rest} render={(props) => {
        if (Object.keys(dataUser.userInpuData).length === 0 || Object.keys(dataUser.userDropDownData).length === 0) {
            
            if(userData){
              alert(englishValue('DashboardError'));
              return (<Redirect to="/dashboard" />)
            }else{
              return (<Redirect to="/" />)
            }
         
        }
        else{
          return (<Component {...dataUser}/>)
        }
      }} />
    )
  }
  
  export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));