import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'

export default function PetSubInfoCard({ title, icon, value }) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: 10,
    margin: 5,
    borderRadius: 8,
    gap: 10,                     // Gap between icon and text
    flex: 1,                     // Ensure flex grows to fill available space
    minWidth: '45%',             // Responsive minimum width for wrapping items in smaller screens
    maxWidth: '100%',
  },
  icon: {
    width: 40,                   // Fixed size for icons
    height: 40,
  },
  textContainer: {
    flex: 1,                     // Allow text to take up available space
  },
  title: {
    fontFamily: 'outfit-regular',
    fontSize: 16,                // Size adjusts well across devices
    color: Colors.GRAY,
  },
  value: {
    fontFamily: 'outfit-medium',
    fontSize: 16,
  }
});
