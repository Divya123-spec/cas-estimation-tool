import { Route, Redirect } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import AuthenticationService from "../../services/AuthenticationService";

/**
 * This component routes to another component when its path prop matches the current URL,
 * but before routing, asks for authentication. It must be used to request authentication to the components that you want to protect.
 */
class Authentication extends Route {
  static authenticationService = new AuthenticationService();
  static propTypes = {
    /**
     * This prop is used to specify the component that will be in charge of handling the response from w3id.
     * This component's path prop must match with the redirect URI registered previously in the w3id SSO provisioner tool.
     */
    isCallback: PropTypes.bool,
  };

  static defaultProps = {
    isCallBack: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasFinishedAuthentication: false,
    };
  }

  async componentDidMount() {
    if (this.props.isCallBack) {
      await Authentication.authenticationService.completeAuthentication();
      this.setState({ hasFinishedAuthentication: true });
    }
  }

  render() {
    let componentContent;

    if (!this.props.isCallBack) {
      if (Authentication.authenticationService.isLoggedIn()) {
        componentContent = super.render();
      } else {
        Authentication.authenticationService.setOriginalUrl(this.props.path);
        Authentication.authenticationService.startAuthentication();
        componentContent = null;
      }
    } else {
      componentContent = this.state.hasFinishedAuthentication ? (
        <Redirect to={Authentication.authenticationService.getOriginalUrl()} />
      ) : (
        super.render()
      );
    }

    return componentContent;
  }
}

export default Authentication;
