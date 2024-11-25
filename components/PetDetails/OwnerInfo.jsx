import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function OwnerInfo({pet}) {
  return (
    <View style={styles.container}>
      <View style={styles.ownerDetails}>
        <Image
          source={{uri:pet?.userimage}}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.ownerName}>{pet?.username}</Text>
          <Text style={styles.ownerRole}>Pet Owner</Text>
        </View>
      </View>
      <Ionicons name="send-sharp" size={24} color={Colors.PRIMARY} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',           // Flexbox for horizontal layout
    alignItems: 'center',           // Center content vertically
    gap: 20,                        // Gap between elements
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,                    // Padding inside the container
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
    justifyContent: 'space-between', // Distribute items across the space
  },
  ownerDetails: {
    flexDirection: 'row',           // Owner image and details in a row
    alignItems: 'center',           // Align vertically in the center
    gap: 20,                        // Gap between image and text
  },
  profileImage: {
    width: 50,                      // Fixed width for the image
    height: 50,                     // Fixed height for the image
    borderRadius: 25,               // Circle image (borderRadius half of width/height)
  },
  ownerName: {
    fontFamily: 'outfit-medium',
    fontSize: 17,                   // Responsive font size
  },
  ownerRole: {
    fontFamily: 'outfit-regular',
    color: Colors.GRAY,
    fontSize: 14,                   // Slightly smaller for the role
  },
})
