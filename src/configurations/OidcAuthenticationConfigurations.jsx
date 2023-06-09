//For both configurations, you can not use the discovery endpoint, you must set all needed urls manually within metadata object

/*
You can use token response type directly. This response type doesn't need to validate the returned token with 
OIDC provider's JWKs. 
if you want to use this configuration for production, then you'll have to use the production urls.
*/


// https://localhost:3000/TermsConditions    //for local redirect uri
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
/*
If you prefer to use id_token response type instead of token, you have to add an extra configuration:
You must add a property called signingKeys, this porperty must include the JWKs information found at
https://preprod.login.w3.ibm.com/oidc/endpoint/default/jwks as shown in the following configuration. if you want 
to use this configurations for production, then you'll have to use the production urls.
*/
// export const authenticationIdTokenConfiguration = {
//     authority: 'x',
//     client_id: 'NWM3ZmIxNDMtNTM2Mi00', //Replace this property with your own client_id taken from provisioner tool
//     redirect_uri: 'https://mfcestimationqa.wdc1a.ciocloud.nonprod.intranet.ibm.com/TermsConditions', //You can use this uri, but you have to add it in your w3id sso configuration, if you want to use a different one, you must replace it
//     response_type: "id_token",
//     scope: "openid",
//     loadUserInfo: true,
//     revokeAccessTokenOnSignout: true,
    
//     metadata: {
//         issuer: 'https://preprod.login.w3.ibm.com/oidc/endpoint/default', //Change for production url if you are planning to use it in a production environment.
//         authorization_endpoint: 'https://preprod.login.w3.ibm.com/oidc/endpoint/default/authorize' //Change for production url if you are planning to use it in a production environment.
//     },
//     //Change this certificates for production  ones if you are planning to use it in a production environment.
//     signingKeys:[{
//         kty: "RSA",
//         kid: "server",
//         use: "sig",
//         alg: "RS256",
//         n: "ul2TrFWH1h-0ReRRwT2EsCsS6EXFd6zsWm51f2VfqJnt3tswO5UgjmReLKAJc5T-nritP8fbfDc8I-i3B1ITeYrcH24Ho8crfJGj34TNkGW_rDjB2q3YGy05-Vw3LXuqTwkiaoKAjkrf4wj4EFfcNT6G3xYlw2cg9ThCWptpWPjMBTINbpIwtjM7k0PoAqsjiooVDuW6dmiAkzhxX_tnxQda0jmp9VWU1DxnGbSSHcAqVB7ea2jmG5P6hZcR7jCh7TXRGazgcZmNhgzx6AyqE2Ae0S8dyXcADrTeXefmbgpTxvsC21kVx43i9KkIBnPNqr8hdwTUwZZLIYOS2s9b2Q",
//         e: "AQAB",
//         x5c: ["MIIDUDCCAjgCCQDPNT2FaAHozzANBgkqhkiG9w0BAQsFADBqMQswCQYDVQQGEwJVUzELMAkGA1UECAwCTlkxDzANBgNVBAcMBkFybW9uazEMMAoGA1UECgwDSUJNMQwwCgYDVQQLDANDSU8xITAfBgNVBAMMGHByZXByb2QubG9naW4udzMuaWJtLmNvbTAeFw0xOTEwMTAxMjA1NDRaFw0yNDEwMDgxMjA1NDRaMGoxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJOWTEPMA0GA1UEBwwGQXJtb25rMQwwCgYDVQQKDANJQk0xDDAKBgNVBAsMA0NJTzEhMB8GA1UEAwwYcHJlcHJvZC5sb2dpbi53My5pYm0uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAul2TrFWH1h+0ReRRwT2EsCsS6EXFd6zsWm51f2VfqJnt3tswO5UgjmReLKAJc5T+nritP8fbfDc8I+i3B1ITeYrcH24Ho8crfJGj34TNkGW/rDjB2q3YGy05+Vw3LXuqTwkiaoKAjkrf4wj4EFfcNT6G3xYlw2cg9ThCWptpWPjMBTINbpIwtjM7k0PoAqsjiooVDuW6dmiAkzhxX/tnxQda0jmp9VWU1DxnGbSSHcAqVB7ea2jmG5P6hZcR7jCh7TXRGazgcZmNhgzx6AyqE2Ae0S8dyXcADrTeXefmbgpTxvsC21kVx43i9KkIBnPNqr8hdwTUwZZLIYOS2s9b2QIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQA5DByy7f6pgwT+ZaRW5Hz5JS1jCpoEz9GrZIE1I4/i/OoGw+1L+5PnctsRMcYP/7TzyyQjM9Aouzk4TJCqVff3BFFFNsBFYmkgmGTKNLiCF9rtRILEATtF5C6rcb/DU8bbc9gTIpIj4M0QzlQcHvL5Aj1lVNYHMb5jNYNQpzqbniG1IuUXx9jcjwyDF/KsQUsIexGVXMfwYnSeXBEIJ9+EPiSzTdh6Da9wyK8I1PdiQ/iqhlBxJfbv0qPHLpj/ftgrxOiYLKuDcD4P6AmD5hDClk/fMBhinVZwb33DFObubIMLZOA7e1k+qTDaM5kiOcARFYLl59iWQXj/cnxJX5d/"],
//         "x5t#S256": "nPxjjoLCKrX0rGQOz5temCaztGrJY4leiq9a3QrcN1w"
//       }, {
//         kty: "RSA",
//         kid: "oidc-signing-cert",
//         use: "sig",
//         alg: "RS256",
//         n: "53UEEmA9HrQyHz3a1MCw1DPORo0ZQqaQ1gkxFXaQ6uQ1kMyI8ozkKRZzXTgZ9FTdxgh8VRrafgCQaQNhuNPLSh0SEIMYutkHMR0hDOCkndEiWkDUEWbdV4JwvXmbmyM9RECkYtPfdk8NfIGAQqAI7pL2GPthfOcY5l7G_jXCo-2vDKncjs4qdYPscNF4gUeY2HwDKCc4HwC6l_TGQNABXg-2QNOAyd5WyTsNAKeerQ3Md61OoF94vmD_y0CVoGUzJ5dQdz1m7Qsklj9G9xr3DNeXKRqnhHWU4wrzjvcBk7w70u4J04UmIDwrxN9SO_ZpWblytxnsRbH1MlP__8pJIQ",
//         e: "AQAB",
//         x5c: ["MIIDUDCCAjgCCQDCbo3IiRiT3zANBgkqhkiG9w0BAQsFADBqMQswCQYDVQQGEwJVUzELMAkGA1UECAwCTlkxDzANBgNVBAcMBkFybW9uazEMMAoGA1UECgwDSUJNMQwwCgYDVQQLDANDSU8xITAfBgNVBAMMGHByZXByb2QubG9naW4udzMuaWJtLmNvbTAeFw0xOTEwMTAxMjA2NDVaFw0yMzEwMDkxMjA2NDVaMGoxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJOWTEPMA0GA1UEBwwGQXJtb25rMQwwCgYDVQQKDANJQk0xDDAKBgNVBAsMA0NJTzEhMB8GA1UEAwwYcHJlcHJvZC5sb2dpbi53My5pYm0uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA53UEEmA9HrQyHz3a1MCw1DPORo0ZQqaQ1gkxFXaQ6uQ1kMyI8ozkKRZzXTgZ9FTdxgh8VRrafgCQaQNhuNPLSh0SEIMYutkHMR0hDOCkndEiWkDUEWbdV4JwvXmbmyM9RECkYtPfdk8NfIGAQqAI7pL2GPthfOcY5l7G/jXCo+2vDKncjs4qdYPscNF4gUeY2HwDKCc4HwC6l/TGQNABXg+2QNOAyd5WyTsNAKeerQ3Md61OoF94vmD/y0CVoGUzJ5dQdz1m7Qsklj9G9xr3DNeXKRqnhHWU4wrzjvcBk7w70u4J04UmIDwrxN9SO/ZpWblytxnsRbH1MlP//8pJIQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQAQGpQauqLbOMtDLW48G6AQgD6p/MpMSOBnhfMAbc5eU3mP++yZzolt33AvgtK1eTumU1czlB7TdK27L7aWka8n4LIXSALl1dp7Xlv7UcFFARmnxRM0gfFdeiUxXUfUad6enOmZMhzXz4pF92n/e7X8i4xA7X5cwJLLElZIDf4RnG4go3o7z32NpCIMc4dci2J+Wxch2CVLCL2D5xUuT7/4auIbr0Lt+Gj5z7gHUUPtWdk4m+ypWusPemwNZCBidWkTj+pJ7OXVXCAtCkzUq/tU1NJS7QyCDnAz3fJ4UMpClGyGnJ3vlvuTnz/q3xICNUgHQVHL9IrTh52NND1y86n4"],
//         "x5t#S256": "5LkYCWCjLm_BKkqQLjHe_cDde5kkU6WUatwk4GB1978"
//       }]
// }
