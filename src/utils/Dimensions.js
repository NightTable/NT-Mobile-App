// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const baseiPhoneWidthProMax = (1/428);
const baseiPhoneHeightProMax = (1/926);

const baseiPhoneWidthNorm = (1/390);
const baseiPhoneHeightNorm = (1/844);

export const widthRatioProMax = windowWidth * baseiPhoneWidthProMax;
export const heightRatioProMax = windowHeight * baseiPhoneHeightProMax;

export const widthRatioNorm = windowWidth * baseiPhoneWidthNorm;
export const heightRatioNorm = windowHeight * baseiPhoneHeightNorm;



