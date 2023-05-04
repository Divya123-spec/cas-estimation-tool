import React, { useState } from 'react';
import { Header, HeaderName, Button, TooltipIcon } from 'carbon-components-react';
import { Help32, UserAvatarFilledAlt16, UserAvatarFilledAlt32 } from '@carbon/icons-react';
import './HeaderUser.scss'
import LoaderApp from "../../../Pages/LoaderApp"
import { englishValue } from '../../../Utils/CommonFunc';
import DeleteHeaderEstimate from '../../../Pages/OpportunityInputsParameter/DeleteHeaderEstimate';

//Carbon components Headers
const HeaderUser = (props) => {
    const [imageError, setImageError] = useState(false);
    let userData = window.localStorage.getItem('userData');
    userData = JSON.parse(userData);
    let username = ''
    let email = ''
    let image = ''
    if (userData || email) {
        username = userData.name
        email = userData.email
        image = `https://w3-unifiedprofile-api.dal1a.cirrus.ibm.com/v3/image/${email}`
    }
    function onImageError(e) {
        setImageError(true)
    }
    return (
        <Header aria-label="IBM Platform Name">
            <HeaderName href="javascript:void(0)" prefix="">
                <DeleteHeaderEstimate {...props}></DeleteHeaderEstimate>
            </HeaderName>
            {
               userData ? <div className="iconclass">
                    <TooltipIcon
                        className='HeaderBtnHelp32'
                        tooltipText='Have a question ?'
                        direction='bottom'>
                        <Help32 className="help32" onClick={()=> window.open("https://w3.ibm.com/w3publisher/cas-m4c-custom-ams-estimation-model/faqs", "_blank")} />
                    </TooltipIcon>
                    <TooltipIcon
                        className='HeaderBtn'
                        tooltipText={username}
                        direction='bottom'>
                        {
                            !imageError && image ?
                                <img
                                    src={image}
                                    className="img-class"
                                    width="30"
                                    height="30"
                                    onError={onImageError} />
                                :
                                <UserAvatarFilledAlt32 />
                        }
                    </TooltipIcon>
                </div> : ''
            }
        </Header>
    )
}
export default (HeaderUser);