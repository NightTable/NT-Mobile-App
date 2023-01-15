import React,{useState} from "react";
import { Button as NBButton } from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityLoader } from "./Loaders";
import { screenWidth, screenHeight } from "../Utils/Dimensions";
import { Box } from "native-base";

//USEAGE
// Step 1:::> import {Button} from "_component_Directory_"
// Step 2:::> Use below code to render component and pass props according to requirement
{
  /* <Button
            text={'CLICdK ME'}
            onSubmit={() => {
              console.log('BUtton clicked....!');
            }}
            bgColor={'red.900'}
            textColor={'white'}
            variant={''}
            borderColor={'green.900'}
            fontweight={'bold'}
            iconName={'eye'}
          /> */
}

export const Button = (props) => {

  const [loader, setloader] = useState(true)
  return (
    <>
      <TouchableOpacity style={{width : screenWidth , height : 40, backgroundColor:'red'}}>
        <Box justifyContent={'center'} alignItem={'center'}
        // leftIcon={
        //   props.iconName == undefined || props.iconName.length < 0 ? null : (
        //     <Feather name={props.iconName} size={22} />
        //   )
        // }
        // fontSize="sm"
        // colorScheme={props.textColor}
        // variant={props?.variant}
        // bgColor={props.bgColor}
        // onPress={() => {
        //   props.onSubmit();
        // }}
        // _icon={{
        //   color: props.textColor,
        // }}
        // _text={{
        //   color: props.textColor,
        //   fontWeight: props.fontweight,
        // }}
        // borderColor={props.borderColor}
        >
          {loader === true ? <ActivityLoader /> : <Text> {props.text}</Text>}
        </Box>
      </TouchableOpacity>
    </>
  );
};
