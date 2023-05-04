import React, { useState } from 'react';
import { Information12 } from './Icons';
import "../../Pages/OpportunityInputsParameter/CloudAppOpsInput/MultipleAccoridon.scss"
//Table to display Data

const HelperText = (props) => {
    const [shown, setShown] = useState(true);
    const linkName = shown ? 'More ' : 'less  '
    let helperText = props.helperTextVal
    let fullArr = helperText.split(' ');
    let partialArr = fullArr.slice(0, 5)
    return (
        <div className='helpertextVal'>
            {helperText.includes('IGNITE') ? <p className='igniteInfo'><Information12 /> {helperText}</p> :
                <>
                    <p><Information12 /> {shown ?
                        <>
                            {partialArr.join(' ')}... </>  : helperText }</p>
                    <a className="read-more-link" onClick={() => { setShown(!shown) }}>{linkName}</a>
                </>
            }

        </div>
    );
}
export default HelperText;