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
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
function TermsConditions2(props) {
  let TokenAcess;
  const [disableBtn, setDisableBtn] = useState(true);
  const [redirectProp, setredirectProp] = useState(false)
  const [errorDisplay, seterrorDisplay] = useState(false);
  const [fetched, setFetched] = useState(false);
 



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
       {redirectProp ? <Redirect to='/dashboard'></Redirect> :
               <div className="main termsConditionmain">
                  <h1 className="title">{englishValue('termsConditions')}</h1>

                  <div className="TermsofuseClass">{englishValue('TermsUse')}</div>
                  <div>
                    <p className="termsContent">
                      {englishValue('TermsContent1')}</p>
                    <p className="termsContent">{englishValue('TermsContent2')}</p>
                  </div>

                  <div className="ibmprivacyClass">{englishValue('IBMPrivacyPolicy')}</div>
                  <div>
                    <a target="_blank" href='https://w3.ibm.com/w3publisher/w3-privacy-notice' >
                      https://w3.ibm.com/w3publisher/w3-privacy-notice</a>
                  </div>

                  <div className="disclaimerClass">{englishValue('DataDisclaimer')}</div>


                  <div >
                    <p className="contentClass">
                      {englishValue('TermsDiscription')}
                    </p>
                  </div>

                  <div>
                    <p className="contentClass2">
                      {englishValue('contentClass2')}
                    </p>
                  </div>


                  <div className="infolink">
                    {englishValue('InfoLink1')}:  <a target="_blank" 
                    href='https://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/%28PE%29+Human+Resources'>
                      https://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/%28PE%29+Human+Resources</a>
                  </div>

                  <div className="infolink2">
                    {englishValue('InfoLink2')} : <a target="_blank"
                      href="http://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/Corporate+Policy+130">
                      http://w3-03.ibm.com/ibm/documents/corpdocweb.nsf/ContentDocsByTitle/Corporate+Policy+130</a>
                  </div>

                  <div className="infolink2">{englishValue('InfoLink3')}: <a target="_blank"
                    href="http://w3-03.ibm.com/ibm/privacy/practices_guidance.html">
                    http://w3-03.ibm.com/ibm/privacy/practices_guidance.html</a></div>


                  <div className="infolink2">
                    {englishValue('InfoLink4')}:  <a target="_blank" 
                    href="http://w3-03.ibm.com/ibm/privacy/contact.html">
                      http://w3-03.ibm.com/ibm/privacy/contact.html</a>
                  </div>



                  <div className="businessclass">{englishValue('BusinessConductGuidelines')}</div>
                  <div className="businessLink">
                    <a target="_blank" href="https://w3.ibm.com/w3publisher/trust-compliance/bcgs">
                      https://w3.ibm.com/w3publisher/trust-compliance/bcgs</a>
                  </div>
                  <div className="checkbox-class">
                    <Checkbox labelText={`I agree to the Terms and Conditions, Privacy Statement `} id="tick"
                      onChange={(event) => onCheckChange('tick', event)}>
                    </Checkbox>
                  </div>
                  <div className="button">
                    <Button kind='primary' disabled={disableBtn} onClick={() => HandlerDahboard()}>Continue
        </Button>
                  </div>
                </div>
              }
    </>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(TermsConditions2);