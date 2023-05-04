import React, { Component } from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { englishValue } from '../../../Utils/CommonFunc';

//while login check the user exist or not
function AuthenticationRouter({ component: Component, ...rest }) {
    var dataUser = { ...rest };
    let userData = window.localStorage.getItem('userData');
    return (
        <Route {...rest} component={(props) => {
            if (!userData) {
                return (<Redirect to="/" />)
            }
            else {
                return (<Component  {...dataUser} />)
            }
        }} />
    )
}

export default withRouter(AuthenticationRouter);