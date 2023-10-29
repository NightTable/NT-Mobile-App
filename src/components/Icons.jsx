/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// MaterialCommunityIcons
// Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';
// Foundation
import Foundation from 'react-native-vector-icons/Foundation';

export const MaterialCommunityIcon = ({ name, color, size }) => (
  <MaterialCommunityIcons name={name} color={color} size={size} />
);

export const AntDesignIcon = ({ name, color, size }) => <AntDesign name={name} color={color} size={size} />;

export const EntypoIcon = ({ name, color, size }) => <Entypo name={name} color={color} size={size} />;

export const FeatherIcon = ({ name, color, size }) => <Feather name={name} color={color} size={size} />;

export const FontAwesomeIcon = ({ name, color, size }) => <FontAwesome name={name} color={color} size={size} />;

export const FontAwesome5Icon = ({ name, color, size }) => <FontAwesome5 name={name} color={color} size={size} />;

export const FontAwesome5BrandsIcon = ({ name, color, size }) => (
  <FontAwesome5Brands name={name} color={color} size={size} />
);

export const FontistoIcon = ({ name, color, size }) => <Fontisto name={name} color={color} size={size} />;

export const EvilIcon = ({ name, color, size }) => <EvilIcons name={name} color={color} size={size} />;

export const MaterialIcon = ({ name, color, size }) => <MaterialIcons name={name} color={color} size={size} />;

export const IoniconsIcon = ({ name, color, size }) => <Ionicons name={name} color={color} size={size} />;

export const FoundationIcon = ({ name, color, size }) => <Foundation name={name} color={color} size={size} />;
