//fonts bold, light, medium , regular, semiBold+ size (16,14,12 , 10)

//How to use (USAGE)
//Step:1>>> import {typography} from "_folder_directory";
//Step:2>>>  typography.light.light10 ( for light and fontsize 10)
//Step:3>>> style={[styles.text3,typography.light.light10,{color:red}]}

export const typography = {
    //Bold font
    bold: {
      bold8: {fontFamily: 'OpenSans-Bold', fontSize: 8},
      bold10: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 10,
      },
      bold12: {fontFamily: 'OpenSans-Bold', fontSize: 12},
      bold14: {fontFamily: 'OpenSans-Bold', fontSize: 14},
      bold16: {fontFamily: 'OpenSans-Bold', fontSize: 16},
    },
    //Semi-Bold
    semBold: {
      semBold8: {fontFamily: 'OpenSans-SemiBold', fontSize: 8},
      semBold10: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 10,
      },
      semBold12: {fontFamily: 'OpenSans-SemiBold', fontSize: 12},
      semBold14: {fontFamily: 'OpenSans-SemiBold', fontSize: 14},
      semBold16: {fontFamily: 'OpenSans-SemiBold', fontSize: 16},
    },
    //Medium font
    medium: {
      medium8: {fontFamily: 'OpenSans-Medium', fontSize: 8},
      medium10: {
        fontFamily: 'OpenSans-Medium',
        fontSize: 10,
      },
      medium12: {fontFamily: 'OpenSans-Medium', fontSize: 12},
      medium14: {fontFamily: 'OpenSans-Medium', fontSize: 14},
      medium16: {fontFamily: 'OpenSans-Medium', fontSize: 16},
    },
  
    //Regular font
    regular: {
      regular8: {fontFamily: 'OpenSans-Regular', fontSize: 8},
  
      regular10: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 10,
      },
      regular12: {fontFamily: 'OpenSans-Regular', fontSize: 12},
      regular14: {fontFamily: 'OpenSans-Regular', fontSize: 14},
      regular16: {fontFamily: 'OpenSans-Regular', fontSize: 16},
    },
  
    light: {
      light8: {fontFamily: 'OpenSans-Light', fontSize: 10},
      light10: {
        fontFamily: 'OpenSans-Light',
        fontSize: 10,
      },
      light12: {fontFamily: 'OpenSans-Light', fontSize: 12},
      light14: {fontFamily: 'OpenSans-Light', fontSize: 14},
      light16: {fontFamily: 'OpenSans-Light', fontSize: 16},
    },
  };
  