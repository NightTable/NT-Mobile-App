// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React, { useState } from 'react';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigatorContainer = (props) => {

    const [isAuth, setIsAuth] = useState(true);

    return (
    <React.Fragment>
        {isAuth ? <MainNavigator></MainNavigator> : <AuthNavigator></AuthNavigator>}
    </React.Fragment>) 


};

export default AppNavigatorContainer;