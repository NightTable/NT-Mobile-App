import { ActivityIndicator, Dimensions, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { colors } from '../../../theme';

const { height, width } = Dimensions.get('screen');

const ActivityIndicatorLoader = () => {
  return (
    <>
      <View
        style={{
          height: height,
          width: width,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <ActivityIndicator size={30} color={colors.white.white1} />
      </View>
    </>
  );
};

export const enableLoader = () => {
  let obj = {
    headingColor: 'transparent',
    Heading: '',
    img: '', // cross img
    renderfn: <ActivityIndicatorLoader />,
    closingTime: 2000000000000,
    closeBtnEnable: false
  };
  EventRegister.emit('popupTriggerd', obj);
};

export const disableLoader = () => {
  EventRegister.emit('popupTriggerd', '');
};
