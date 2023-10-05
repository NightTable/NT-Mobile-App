import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/dashboard/Dashboard';
//CLUBS SCRREN
import Club from '../screens/club/Club';
//EVENT
import UpcomingEvents from '../screens/event/UpcomingEvents';
import EventDetail from '../screens/event/EventDetail';
//TABLE CONFIGURATIONS
import TableConfigurations from '../screens/tableConfig/TableConfigurations';
//STACKS
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//THEME
import { typography, colors } from '../theme';
import Profile from '../screens/profile/Profile';
import PromoterAppl from '../screens/promoter/PromoterAppl';
import InfluencerAppl from '../screens/promoter/InfluencerAppl';
import Hostsandpromoters from '../screens/tableRequest/Hostsandpromoter';
import TableReqCont from '../screens/tableRequest/TableReqConfiramation';
import NewTableReq from '../screens/tableRequest/NewTableReq';
import TableInvites from '../screens/tableInvites/tableInvites';
import TableInvitesOverView from '../screens/tableInvites/tableInvitesOverview';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderWidth: 2,
          borderColor: colors.gold.gold200,
          paddingVertical: 20,
          borderLeftColor: 'transparent',
          backgroundColor: colors.black.black800,
        },
        drawerActiveBackgroundColor: colors.grey.grey600,
        drawerLabelStyle: [
          typography.bold.bold24,
          {
            marginLeft: 20,
            fontSize: 15,
            color: colors.gold.gold200,
          },
        ],
      }}
      // drawerContent={props => {
      //   <>
      //   </>
      // }}
    >
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="TableInvites" component={TableInvites} />
      <Drawer.Screen
        name="TableInvitesOverView"
        component={TableInvitesOverView}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        initialParams={{
          InfluencerPromoter: true,
        }}
        name="Apply to be a Promoter"
        component={PromoterAppl}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        initialParams={{
          InfluencerPromoter: false,
        }}
        name="Apply to be an Influencer"
        component={InfluencerAppl}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="Club"
        component={Club}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="UpcomingEvents"
        component={UpcomingEvents}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="TableConfigurations"
        component={TableConfigurations}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="Hostsandpromoters"
        component={Hostsandpromoters}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="NewTableReq"
        component={NewTableReq}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="TableReqCont"
        component={TableReqCont}
        options={{
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
