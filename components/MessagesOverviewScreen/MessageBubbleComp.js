import { 
    View, 
    Text,
    TouchableOpacity,
    Image} from 'react-native';

import { heightRatioNorm, heightRatioProMax, widthRatioNorm } from '../../dimensions/Dimensions';
import { Fonts } from '../../fonts/Fonts';
import { Colors } from '../../colors/Colors';


const MessageBubbleComp = (props) => {


    return (   
        <TouchableOpacity style={[{
            borderColor: Colors.purple,
            borderWidth: 0.7*widthRatioNorm,
            justifyContent: 'space-between',
            marginTop: 5 * heightRatioProMax,
            flexDirection: 'row',
            borderRadius: 10 * heightRatioNorm,
            backgroundColor: (props.isNew?Colors.faintOrange:Colors.white),
            marginLeft: 15*widthRatioNorm,
            marginRight: 15*widthRatioNorm,
            height: 70 * heightRatioNorm,
            marginBottom: 5 * heightRatioNorm,
                    

        }, {
            shadowColor: Colors.black,
                shadowOffset: {width: 0, height: 0},
                shadowRadius: 2,
                shadowOpacity: 0.5,
                elevation: 5
        }]}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image style={{
                    marginLeft: 15 * widthRatioNorm,
                    marginRight: 15 * widthRatioNorm,
                    width: 40 * heightRatioNorm,
                    height: 40 * heightRatioNorm,
                    borderRadius: 20 * heightRatioNorm
                }} source={{uri: props.image}}></Image>
                <View style={{flexDirection: 'column', width: 200*widthRatioNorm}}>
                    <Text style={{
                        fontSize: 13 * heightRatioNorm,
                        fontFamily: Fonts.mainFontBold,
                        color: Colors.black
                    }}>{props.name}</Text>
                    <Text style={{
                        fontSize: 14 * heightRatioNorm,
                        fontFamily: Fonts.mainFontBold,
                        textAlign: props.sentMessage?'right':'left',
                        color: props.isNew?Colors.purple:(props.sentMessage?Colors.greyDark:Colors.pink)
                    }}>{props.messagePrev}
                    </Text>
                </View>
                <View style={{
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    width: 80 * widthRatioNorm,
                    height: '100%'
                }}>
                    <View style={{
                        marginTop: 5 * heightRatioProMax,
                        height: props.isNew ? 20 * heightRatioProMax : 0,
                        width: props.isNew ? 20 * heightRatioProMax : 0,
                        borderRadius: 10 * heightRatioProMax,
                        backgroundColor: Colors.purple
                    }}>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};



export default MessageBubbleComp;