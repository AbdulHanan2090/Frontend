import React, { useState, useEffect, Component, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Animated,
    Linking,
    Alert,
    Button,
    SafeAreaView
  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
function Mainscreen() {
    const navigation = useNavigation(); 
    const removeData = async () => {
        await AsyncStorage.removeItem('@Data_Key');
        navigation.navigate("Home")
    }
    return (
        <View style={{ flex: 1, marginLeft: 70,marginRight:100, marginTop: 200 }}>
            <TouchableOpacity
                style={styles.buttonWithIcon}
                onPress={() => removeData()}
            >

                <Text style={styles.buttonText}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
   
    buttonWithIcon: { 
      paddingHorizontal: 10,
      marginTop:15, 
      elevation: 4,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FC140B', 
      paddingVertical: 10,
      borderRadius: 8,
      shadowColor: '#000', 
      shadowOffset: {
      width: 2,
      height: 2,
    }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.5,
    
    }, 
    buttonText: {
        fontSize: 20,
        marginLeft:78,
        marginHorizontal: 12, 
        color: '#fff',
        fontWeight: '400',
    
    }, 
    button: {
      marginTop: 20
  },

    })
export default Mainscreen;