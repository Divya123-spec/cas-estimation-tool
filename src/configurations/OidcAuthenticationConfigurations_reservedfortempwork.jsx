let basePort = window.location.origin;

export const authenticationTokenConfiguration = {
  authority: 'x',
  client_id: `${process.env.REACT_APP_CILENTID_KEY}`, //Replace this property with your own client_id taken from provisioner tool
  redirect_uri: `${basePort}/TermsConditions`, //You can use this uri, but you have to add it in your w3id sso configuration, if you want to use a different one, you must replace it
  response_type: "token",
  scope: "openid",
  loadUserInfo: true,
  metadata: {
    issuer: 'https://preprod.login.w3.ibm.com/oidc/endpoint/default', //Change for production url if you are planning to use it in a production environment.
    authorization_endpoint: 'https://preprod.login.w3.ibm.com/oidc/endpoint/default/authorize' //Change for production url if you are planning to use it in a production environment.
  }
};


