import { ToastNotification } from 'carbon-components-react';
import React from 'react'
import { useState } from 'react';

function FeedbackNotification({notificationOpen,cancelHandler}) {
  
    return (
        <div className='saveModal2'>
            <ToastNotification
                iconDescription="Feedback Submitted!"
                subtitle={<span>Feedback has been submitted succesfully.</span>}
                kind="success"
                title="Feedback Submitted!"
                caption=""
                lowContrast={true}
                timeout={1800}
                onClose={cancelHandler}
            />

        </div>
    );
}

export default FeedbackNotification