import React from 'react'
import { UnauthorizedUserAccess } from '@carbon/pictograms-react';
import  './Error.scss'

const ErrorAuthorization = () =>
  <div  className='errorPage'>
    <UnauthorizedUserAccess />
    <div>
    <p>You do not have access to the application.</p>
    <p>Please contact adminstrator</p>
    </div>
  </div>

export default ErrorAuthorization;
