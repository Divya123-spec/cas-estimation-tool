import React, { Component } from "react";
import './Pages/Dashboard/UserEstimates/UserEstimate.scss';
import './Pages/Export/Export.css';
import { withRouter} from "react-router-dom";
import { englishValue } from "./Utils/CommonFunc";
import { RouteComponent } from "./Route";
import HeaderUser from "./Components/CommonFuncs/Header/HeaderUser";



export class App extends Component {
  render() {
    return (
      <div>
        <>
          <HeaderUser />
         <RouteComponent></RouteComponent>
        </>
      </div>
    );
  }
}
export default withRouter(App);
