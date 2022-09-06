// All information, source code contained in this document 
// is the property of StrynDev Solutions, LLC. It must not 
// be transmitted to others without the written consent of 
// StrynDev Solutions. It must be returned to StrynDev Solutions 
// when its authorized use is terminated.

import React from 'react';

import { View, Text, Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import * as mainActions from '../store/actions/main';


const DummyComponent = (props) => {


    const dispatch = useDispatch();
    const buttonCounter = useSelector(state => state.main.buttonCounter);
// this is a comment in Dummy Component
    const handlePressButton = () => {
        dispatch(mainActions.incrementButtonAction());
    };

//changed text to red
    return (<View style={{backgroundColor: 'blue'}}>
        <Text>This is a dummy component</Text>
        <Button 
        title="Fuck me german style, jaaaa"
        onPress={handlePressButton}></Button>
        <Text style = {{color: "red"}}>{buttonCounter}</Text>
    </View>);
};

export default DummyComponent;