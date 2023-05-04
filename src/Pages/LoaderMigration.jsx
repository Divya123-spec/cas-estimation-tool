import React, { useEffect } from 'react';
import './LoaderApp.scss';
import { englishValue } from '../Utils/CommonFunc';
//AMS Estimates Data 
const LoaderMigration = (props) => {
    let getMessageString = () => {
         return (<div className="LoaderDiv">{englishValue('SpinnerMigration')} </div>)
    }

    return (
        <>
            {/* <Loading active={loaderBtn} className="Loader" ></Loading> */}
            {props.loaderBtn ?
                <div class="bx--loading-overlay">
                    <div aria-atomic="true" aria-labelledby="loading-id-6" aria-live="assertive" class="Loader bx--loading"
                    ><label id="loading-id-6" class="bx--visually-hidden">Active loading indicator</label><svg class="bx--loading__svg" viewBox="0 0 100 100"><title>Active loading indicator</title><circle class="bx--loading__stroke" cx="50%" cy="50%" r="44"></circle></svg></div>
                    {/* <div className="LoaderDiv">Please wait while we calculate the output </div> */}

                    {getMessageString()}
                </div> : ''
            }

        </>
    );
}
export default LoaderMigration;