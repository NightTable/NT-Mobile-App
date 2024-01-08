/* eslint-disable no-underscore-dangle */
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Modal
} from 'react-native';
import axios from 'axios';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';


const TableViewScreen = ({ route, navigation }) => {

  const btnArray = [
    {
      id: 1,
      name: 'Menu',
      backgroundColor: 'transparent',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 2,
      name: 'Floor Plan',
      backgroundColor: 'transparent',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 3,
      name: 'Add Participants',
      backgroundColor: '#516D65',
      borderColor: colors.gold.gold100,
      textColor: 'white'
    },
    {
      id: 4,
      name: 'Remove Participants',
      backgroundColor: '#D08714',
      borderColor: colors.gold.gold100,
      textColor: 'white'
    },
    {
      id: 5,
      name: 'Leave Group',
      backgroundColor: '#8C0322',
      borderColor: colors.gold.gold100,
      textColor: colors.gold.gold100
    },
    {
      id: 6,
      name: route.params.data.tableType === 'Active Organized' || route.params.data.tableType === 'Active Invited' ? 'End Outing' : 'Approve Request',
      backgroundColor: colors.gold.gold100,
      borderColor: colors.gold.gold100,
      textColor: 'black'
    },
    /* {
      id: 7,
      name: 'View Cart',
      backgroundColor: colors.gold.gold200,
      borderColor: colors.gold.gold200,
      textColor: 'black'
    }, */
    {
      id: 8,
      name: 'Add to General Tab',
      backgroundColor: colors.gold.gold200,
      borderColor: colors.gold.gold200,
      textColor: 'black'
    }
  ];

  const etaDate = new Date(route.params.data.eta);
  const hours = etaDate.getUTCHours().toString().padStart(2, '0');
  const minutes = etaDate.getUTCMinutes().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`; // Time in hh:mm format

  const [partCount, setPartCount] = useState(0);
  const [orgFee, setOrgFee] = useState(0);
  const [pendingParticipants, setPendingParticipants] = useState([]);
  const [activeParts, setActiveParts] = useState([]);
  const [activePartsTrial, setActivePartsTrial] = useState([{"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}, {"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}, {"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}]);
  const [showActive, setShowActive] = useState(false);
  const [clubMenu, setClubMenu] = useState([]);
  const [isMenuModalVisible, setMenuModalVisible] = useState(false);
  const [isFloorPlanPopupVisible, setFloorPlanPopupVisible] = useState(false);
  
  const toggleShowActivePending = () => {
    setShowActive(!showActive); // This will toggle the state between true and false
  };

  const onButtonPress = (id) => {
    switch(id) {
      case 1: // 'Menu'
        setMenuModalVisible(true);
        break;
      case 2: // 'Floor Plan'
        setFloorPlanPopupVisible(true);
        break;
    }
  };
  
  const getClubMenu = async() => {
    const clubid = route.params.data.clubId;
    let menu = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}menu/club/${clubid}`);
    menu = menu.data.data;
    clubMenu(menu);
  };

  const getPendingParticipantsData = async() => {
    const trID = route.params.data.tableRequestId;
    const trpms = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}tableRequestParticipantMapping/tableRequest/${trID}`);
  
    const organizer = trpms.data.data.find(participant => participant.isRequestOrganizer);
    const organizerMinimumPrice = organizer ? organizer.minimumPrice : null;
    setOrgFee(organizerMinimumPrice);
  
    // Function to get the full name or phone number
    const getNameOrPhone = (participant) => {
      if (participant.userId && participant.userId.firstName && participant.userId.lastName) {
        return `${participant.userId.firstName} ${participant.userId.lastName}`;
      }
      return participant.phoneNumber.toString();
    };
  
    // Create lists of active and inactive participants, excluding the organizer
    const activeParticipants = [];
    const inactiveParticipants = [];
  
    trpms.data.data.forEach(participant => {
      if (!participant.isRequestOrganizer) {
        const participantInfo = {
          nameOrPhone: getNameOrPhone(participant.participantId),
          minimumPrice: participant.minimumPrice
        };
  
        if (participant.isActiveParticipant) {
          activeParticipants.push(participantInfo);
        } else {
          inactiveParticipants.push(participantInfo);
        }
      }
    });
  
    setPartCount(inactiveParticipants.length); // Assuming you want the count of inactive participants
    setPendingParticipants(inactiveParticipants);
    setActiveParts(activeParticipants);

    console.log('Active participants:', activeParticipants);
    console.log('Inactive participants:', inactiveParticipants);
  
    // Perform any additional logic with activeParticipants and inactiveParticipants as needed
  };
  
  console.log(route.params.data, 'route params');

  useEffect( async() => {

    await getPendingParticipantsData();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuModalVisible}
        onRequestClose={() => {
          setMenuModalVisible(!isMenuModalVisible);
        }}>
        <View style={styles.modalView}>
          {/* Your menu content here */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuModalVisible(false)}>
            <Text>Close Menu</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isFloorPlanPopupVisible}
        onRequestClose={() => {
          setFloorPlanPopupVisible(!isFloorPlanPopupVisible);
        }}>
        <View style={styles.centeredView}>
          {/* Your floor plan content here */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setFloorPlanPopupVisible(false)}>
            <Text>Close Floor Plan</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <HeaderWithLeftIcon
        title='Polling Room'
        icon='arrowleft'
        iconDirectory='AntDesign'
        onSubmit={() => {
          navigation.navigate('Home');
        }}
      />

      <ScrollView>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFydHl8ZW58MHx8MHx8fDA%3D'
          }}
          resizeMode='cover'
          style={{ height: 200, width: '100%' }}>
          <View style={{ alignItems: 'flex-end', paddingTop: 20 }}>
            <View style={{ backgroundColor: 'black', height: 60, width: 160, justifyContent: 'center' }}>
              <Text style={{ color: colors.gold.gold100, paddingLeft: 4 }}>
                Table request organized by {route.params.data.name}
              </Text>
            </View>
          </View>
          <View style={{ backgroundColor: 'black', height: 80, width: 140 }}>
            <Text style={{ color: colors.gold.gold100 }}>Waiting for {partCount} more people</Text>
            <Text style={{ color: colors.gold.gold100 }}>Tables : {route.params.data.tables.join(', ')}</Text>
            <Text style={{ color: colors.gold.gold100 }}>Time: {formattedTime}</Text>
          </View>
        </ImageBackground>
      </View>
      {/* Current Cost Breakdown */}
      <View style={{ padding: 12 }}>
        <Text style={styles.heading}>Current Cost Breakdown:</Text>
        <View style={{ height: 180, borderWidth: 1, borderColor: colors.gold.gold100, borderRadius: 12 }}>
          <Text style={[styles.heading, { padding: 10 }]}>Your Share: ${orgFee}</Text>

          {/* Button to toggle between active and pending participants */}
          <TouchableOpacity onPress={toggleShowActivePending} style={styles.toggleButton}>
            <Text style={styles.toggleButtonText}>
              {showActive ? 'Show Pending Participants' : 'Show Active Participants'}
            </Text>
          </TouchableOpacity>

          {/* List of participants */}
          <FlatList
            data={showActive ? activePartsTrial : pendingParticipants}
            keyExtractor={(item, index) => item.nameOrPhone + index}
            renderItem={({ item }) => (
              <View style={styles.participantBox}>
                <Text style={[typography.regular.regular14, { color: colors.black.black800 }]}>
                  {isNaN(item.nameOrPhone) ? item.nameOrPhone : `+${item.nameOrPhone}`}
                </Text>
                <Text style={[typography.regular.regular14, { color: colors.black.black800 }]}>
                  ${item.minimumPrice}
                </Text>
              </View>
            )}
          />
        </View>
      </View>

        <View>
          <FlatList
            data={btnArray}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View style={index === btnArray.length - 1 ? styles.lastBtnContainer : styles.btnBox}>
                <TouchableOpacity
                  onPress={() => {
                    onButtonPress(item.id);
                  }}
                  style={[styles.btnStyling, { backgroundColor: item.backgroundColor, borderColor: item.borderColor }]}>
                  <Text style={[typography.medium.medium14, { color: item.textColor }]}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.black800
  },
  mainBox: {
    paddingHorizontal: 18
  },
  heading: {
    ...typography.regular.regular16,
    color: colors.gold.gold100,
    paddingBottom: 10
  },
  subtitle: {
    fontSize: 24,
    paddingTop: 18,
    color: colors.gold.gold100
  },
  btnStyling: {
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10, // Make sure this matches the padding of the other buttons
    minWidth: '45%'
  },
  lastBtnContainer: {
    width: '100%', // Take the full width
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    paddingVertical: 6,
    paddingHorizontal: 20
  },

  // Update btnBox to handle non-last buttons
  btnBox: {
    width: '50%',
    justifyContent: 'space-evenly',
    paddingVertical: 6,
    paddingHorizontal: 10
  },
  toggleButton: {
    // Style for the button
    backgroundColor: colors.gold.gold200,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    maxWidth: 300,
    alignSelf: 'center' // Center button horizontally
  },
  toggleButtonText: {
    ...typography.regular.regular16, // Ensure this object exists and contains the font settings you want
    color: colors.black.black800
  },
  participantBox: {
    // Style for each participant box
    flexDirection: 'row',
    justifyContent: 'space-between', 
    backgroundColor: colors.gold.gold200, // or any color you want for the box
    borderRadius: 4, // if you want rounded corners for each box
    padding: 8, // padding inside each box
    marginBottom: 8, // space between boxes
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  closeButton: {
    backgroundColor: colors.gold.gold100,
    padding: 10,
    elevation: 2,
  },
});

export default TableViewScreen;
