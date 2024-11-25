import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import MarkFav from '../MarkFav'

// Get screen width dynamically for responsive design
const screenWidth = Dimensions.get('window').width;

export default function PetInfo({ pet }) {
  return (
    <View>
      {/* Responsive Image */}
      <Image
        source={{ uri: pet?.imageUrl }}
        style={[styles.image, { height: screenWidth * 1.2 }]}  // Dynamic height based on screen width
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.petName}>{pet?.name}</Text>
          <Text style={styles.petAddress}>{pet?.address}</Text>
        </View>
        <MarkFav pet={pet}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',            // Full width image
    objectFit: 'cover',        // Ensures image maintains aspect ratio
  },
  infoContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  petName: {
    fontFamily: 'outfit-bold',
    fontSize: 24,              // Slightly smaller for more scalability on small devices
  },
  petAddress: {
    fontFamily: 'outfit-regular',
    fontSize: 16,
    color: Colors.GRAY,
    marginTop: 5,
  },
})
