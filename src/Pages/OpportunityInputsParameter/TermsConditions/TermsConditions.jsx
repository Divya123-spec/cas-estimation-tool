import { Button, Checkbox, Loading } from 'carbon-components-react'
import { englishValue } from "../../../Utils/CommonFunc"
import "./TermsConditions.scss"
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ErrorAuthorization from './ErrorAuthorization';
import inputService from './../../../services/InputService'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/ActionCreator';
import LoaderApp from '../../LoaderApp';
import TermsCondition2 from './TermsCondition2';
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// this  page is re -routed after the sso login or '/'
function TermsConditions(props) {
  let TokenAcess;
  const [disableBtn, setDisableBtn] = useState(true);
  const [redirectProp, setredirectProp] = useState(false)
  const [errorDisplay, seterrorDisplay] = useState(false);
  const [fetched, setFetched] = useState(false);
  let hashValue = window.location.hash;
 
  // the query paramter which comes  from sso we need to extract the access token
  if (hashValue) {
    let finalValue;

    const result = {};
    hashValue.split('#').forEach(item => {
      result[item.split('=')[0]] = (item.split('=')[1]);
    });
    hashValue.split('&').forEach(item => {
      result[item.split('=')[0]] = (item.split('=')[1]);
    });
    finalValue = result.access_token.split('&')[0];
    TokenAcess = finalValue;
  }
  
  useEffect(() => {
    setFetched(true)
    // API call to send token to backened and get user deatails needed in the Appilcation
    props.userLoginAuthorization(TokenAcess).then((res) => {
      if (res.status === 'SUCCESS') {
        window.localStorage.setItem('auth2', res.response.token);
        window.localStorage.setItem('userData', JSON.stringify(res.response.user));
        setFetched(false);

      }
      else {
        seterrorDisplay(true);
        setFetched(false)
      }

    }).catch((err) => {
      alert(englishValue('TechnicalError'));
      seterrorDisplay(true);
    });
   
  }, []);



  const HandlerDahboard = () => {
    setredirectProp(true)
  }
  const onCheckChange = (name, event) => {
    if (event) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }
  return (
    <>
      {errorDisplay ? <ErrorAuthorization></ErrorAuthorization> :
        <>
          {fetched ? <LoaderApp loaderBtn={true}></LoaderApp> :
            <>
              <LoaderApp loaderBtn={false}></LoaderApp>
            <TermsCondition2></TermsCondition2>

            </>
          }
        </>
      }
    </>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(TermsConditions);