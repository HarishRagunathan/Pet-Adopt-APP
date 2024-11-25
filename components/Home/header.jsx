import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '../../constants/Colors';

const { width } = Dimensions.get('screen'); // Get screen width for responsiveness

export default function Header() {
  const { user } = useUser();

  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.userName}>{user?.fullName}</Text>
      </View>
      <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: width * 0.02, // Dynamic horizontal padding based on screen width
  },
  welcomeText: {
    fontSize: width * 0.045, // Dynamic font size for "Welcome" text
    fontFamily: 'outfit',
  },
  userName: {
    fontSize: width * 0.07, // Dynamic font size for the user's name
    fontFamily: 'outfit-medium',
  },
  profileImage: {
    width: width * 0.1, // Image width is 10% of the screen width
    height: width * 0.1, // Image height is equal to the width to keep it square
    borderRadius: (width * 0.1) / 2, // Make the image circular
  },
});
