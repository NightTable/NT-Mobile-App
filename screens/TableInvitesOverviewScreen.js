// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';


import { View, 
    StyleSheet,
 } from 'react-native';

import johnPic from '../assets/johnpic.jpeg';
import TableInvitesBubbleComp from '../components/TableInvitesOverviewScreen/TableInvitesBubbleComp';
import {
    heightRatioNorm
} from '../dimensions/Dimensions';
import { ScrollView } from 'react-native-gesture-handler';


const TableInvitesOverviewScreen = (props) => {

    const handleBubblePress = () => {
        if (props.route.name.includes("invNav")){
            props.navigation.push("invNav-TableInvitesDetailScreen")
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'column'}}>
                <ScrollView>
                    <TableInvitesBubbleComp
                        image={johnPic}
                        name={'Jake Tanner'}
                        date={'1-19-22'}
                        time={'3:08 PM'}
                        payType={'snpl'}
                        friends={'4 friends'}
                        tableName={'woohza'}
                        handlePress={handleBubblePress}>
                    </TableInvitesBubbleComp>
                </ScrollView>
            </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 40*heightRatioNorm
    },
  });

  
export default TableInvitesOverviewScreen;

