import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'

export default function AboutPet({ pet }) {
  const [readMore, setReadMore] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>About {pet?.name}</Text>
      <Pressable onPress={() => setReadMore(true)}>
        <Text
          numberOfLines={readMore ? 2 : 20}
          style={styles.aboutText}
        >
          {pet?.about}
        </Text>
      </Pressable>
      {readMore && (
        <Pressable onPress={() => setReadMore(false)}>
          <Text style={styles.readMoreText}>Read More</Text>
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,                       // Consistent padding across devices
  },
  headerText: {
    fontFamily: 'outfit-medium',
    fontSize: 20,                      // Responsive font size
    marginBottom: 10,                  // Margin between header and text
  },
  aboutText: {
    fontFamily: 'outfit-regular',
    fontSize: 14,                      // Size adjusts well across devices
    lineHeight: 20,                    // Improves readability
  },
  readMoreText: {
    color: Colors.SECONDARY,
    marginTop: 5,                      // Space between text and "Read More"
    fontSize: 14,                      // Responsive font size for "Read More"
  },
})
