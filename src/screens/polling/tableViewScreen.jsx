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
  Modal,
  TextInput
} from 'react-native';
import axios from 'axios';
import { HeaderWithLeftIcon } from '../../components/Header';
import { colors, typography } from '../../theme';
import * as SMS from 'expo-sms';


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
      id: 7,
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

  const [phoneNumber, setPhoneNumber] = useState('');
  const [joiningFee, setJoiningFee] = useState('');
  const [partCount, setPartCount] = useState(0);
  const [orgFee, setOrgFee] = useState(0);
  const [pendingParticipants, setPendingParticipants] = useState([]);
  const [activeParts, setActiveParts] = useState([]);
  const [activePartsTrial, setActivePartsTrial] = useState([{"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}, {"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}, {"minimumPrice": 500, "nameOrPhone": "Jason Strauss"}, {"minimumPrice": 500, "nameOrPhone": "16175300464"}]);
  const [showActive, setShowActive] = useState(false);
  const [clubMenu, setClubMenu] = useState([]);
  const [isMenuModalVisible, setMenuModalVisible] = useState(false);
  const [addParticipantsModal, setAddParticipantsModal] = useState(false);
  const [isFloorPlanPopupVisible, setFloorPlanPopupVisible] = useState(false);
  
  const toggleShowActivePending = () => {
    console.log(pendingParticipants, "pending parts");
    console.log(activeParts, "active parts");
    setShowActive(!showActive); // This will toggle the state between true and false
  };

  const handleSendInvite = () => {
    // Construct the participant object
    const participant = {
      minimumPrice: joiningFee,
      nameOrPhone: phoneNumber
    };
    
    // Add the new participant to the pendingParticipants array
    setPendingParticipants([...pendingParticipants, participant]);
    sendSMS(`+${phoneNumber}`)
    // Clear the input fields
    setPhoneNumber('');
    setJoiningFee('');
    console.log("Sending invites");
    // Close the modal or perform other actions as needed
    setAddParticipantsModal(false);

  };

  const sendSMS = async (number) => {
    setIsSending(true);
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      try {
        const inviteMessage = `Hey!\n
        I'm inviting you to a table at the club.\n 
        Download NightTable on the App Store: ${appStoreLink}\n
        or Play Store: ${playStoreLink},\n
        make sure to sign up using the phone number on which you've recieved this message,\n
        and join the table for a fun night!`; // need club name and event
        const { result } = await SMS.sendSMSAsync([number], inviteMessage);
        setIsSending(false);
        return result === 'sent' ? 'sent' : 'error'; // Ensure a consistent return value
      } catch (error) {
        console.log(error);
        setIsSending(false); // Resetting the isSending flag in the catch block
        return 'error'; // Ensure a return value
      }
    } else {
      Alert.alert('Your device does not support SMS');
      setIsSending(false);
      return 'error'; // Ensure a return value
    }
  };

  const onButtonPress = (id) => {
    if (id === 1) {
      setMenuModalVisible(true);
    } else if (id === 2) {
      // Handle floor plan button press
      setFloorPlanPopupVisible(true);
    } else if (id === 3 ) {
      setAddParticipantsModal(true);
      console.log ("Button 3 is pressed");
      console.log(addParticipantsModal);
    } 
    else if (id === 4){
      console.log("Button 4 pressed");
    }
    else if (id === 5){
      console.log("Button 5 pressed");
    }
    else if (id === 6){
      console.log("Button 6 pressed");
    }
    else if (id === 7){
      console.log("Button 7 pressed");
    }
  };
  
  const getClubMenu = async() => {
    const clubid = route.params.data.clubId;
    let menu = await axios.get(`${process.env.AMIYA_HOME_SSBOSNET}menu/club/${clubid}`);
    menu = menu.data.data;
    setClubMenu(menu);
    console.log(clubMenu);
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
      
      if (!participant.isDeleted) {
        // Continue with your existing logic
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
    await getClubMenu();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuModalVisible}
        onRequestClose={() => setMenuModalVisible(!isMenuModalVisible)}
      >
        <View style={styles.modalView}>
          <ScrollView>
            {clubMenu.map((category, index) => (
              <View key={category._id} style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>{category.category}</Text>
                {category.items.map((item) => (
                  <View key={item._id} style={styles.itemContainer}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>${item.price}</Text>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={addParticipantsModal}
        onRequestClose={() => setAddParticipantsModal(!addParticipantsModal)}
      >
        <View style={styles.modalView}>
          <Text style={styles.categoryTitle}>Send an invite text</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.categoryTitle}>Include country code: +</Text>
            <TextInput 
              style={styles.textInputStyle}
              placeholder="Phone Number"
              placeholderTextColor={colors.gold.gold100}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.categoryTitle}>Joining Fee: $</Text>
            <TextInput 
              style={styles.textInputStyle}
              placeholder="Amount"
              placeholderTextColor={colors.gold.gold100}
              keyboardType="numeric"
              value={joiningFee}
              onChangeText={setJoiningFee}
            />
          </View>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleSendInvite}>
            <Text style={styles.closeButtonText}>Send invite</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setAddParticipantsModal(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType='slide'
        transparent={true}
        visible={isFloorPlanPopupVisible}
        onRequestClose={() => {
          setFloorPlanPopupVisible(!isFloorPlanPopupVisible);
        }}>
        <View style={styles.modalView}>
          {/* Your floor plan content here */}
            <Text style={styles.categoryTitle}>We are working on uploading the floor plan to the mobile app. For now, please ask your promoter / VIP for a floor plan</Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setFloorPlanPopupVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
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
    borderWidth: 5,
    borderColor: colors.gold.gold100,
    bottom: 0,
    width: '100%',
    height: '50%', // Change this to 50% to make the modal take up half the screen
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'space-between', // Add this to space out the content
    borderTopLeftRadius: 30, // Rounded top left corner
    borderTopRightRadius: 30, // Rounded top right corner
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  categoryContainer: {
    width: '100%',
    marginBottom: 20
  },
  categoryTitle: {
    ...typography.regular.regular24,
    color: colors.gold.gold100,
    marginBottom: 10,
    alignSelf: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  categoryName: {
    color: colors.gold.gold100,
    ...typography.regular.regular24,
    fontWeight: 'bold',
    marginBottom: 10
    // ... other styling ...
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.gold.gold100,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5
  },
  itemName: {
    ...typography.regular.regular18,
    color: colors.black.black800
  },
  itemPrice: {
    ...typography.regular.regular18,
    color: colors.black.black800
  },
  closeButtonText: {
    ...typography.regular.regular18,
    color: colors.gold.gold100,
    textAlign: 'center'
  },
  textInputStyle: {
    backgroundColor: colors.black.black800, // Black background
    color: colors.gold.gold100, // Gold text
    borderColor: colors.gold.gold100, // Gold border
    borderWidth: 1, // Set the border width
    borderRadius: 10, // Round the corners
    height: 40, // Adjust the height as necessary
    marginVertical: 10, // Add some vertical spacing
    paddingHorizontal: 10, // Add some horizontal padding
    fontSize: 16, // Adjust the font size as necessary
    marginLeft: 5
  },
  priceBox: {
    backgroundColor: colors.gold.gold100,
    paddingVertical: 5, // Vertical padding for the price
    paddingHorizontal: 10, // Horizontal padding for the price
    borderTopRightRadius: 10, // Rounded top right corner
    borderBottomRightRadius: 10 // Rounded bottom right corner
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: colors.red.red950,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gold.gold100
  }
});

export default TableViewScreen;
