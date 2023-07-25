import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import TabNavigation from '../../Navigation/TabNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Purchase = () => {
  return (
    <SafeAreaView style={styles.container}>

      <TabNavigation />

      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.8}
        onPress={() => {
          console.log('search pressed')
        }}
      >
        <View>
          <Ionicons name="search-outline" size={25} color="red" />
        </View>

      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50, // Adjust the value to set the distance from the bottom
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});

export default Purchase;
