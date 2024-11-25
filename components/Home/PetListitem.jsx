import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import MarkFav from '../MarkFav';

const { width } = Dimensions.get('screen'); // Get screen width for responsiveness

export default function PetListitem({ pet }) {
  const router=useRouter();
  return (
    <TouchableOpacity onPress={()=>router.push({
      pathname:'/pet-details',params:pet
    })} style={styles.container}>
      <View style={{
        position:'absolute',
        zIndex:10,
        right:10,
        top:10,
      }}>
        <MarkFav pet={pet} colors={Colors.WHITE}/>
      </View>
      <Image 
        source={{ uri: pet?.imageUrl }}
        style={styles.image}
      />
      <View style={{padding:5}}>
      <Text style={styles.name}>{pet?.name}</Text>
      <View style={styles.detailsRow }>
        <Text style={styles.breedText}>{pet?.breeds}</Text>
        <Text style={styles.ageText}>{pet?.age} YRS</Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: width * 0.01, 
    marginRight: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    width: width * 0.42, 
  },
  image: {
    width: '100%',
    height: width * 0.3, 
    objectFit: 'cover',
    borderRadius: 4,
  },
  name: {
    fontFamily: 'outfit-medium',
    fontSize: width * 0.045, 
    paddingTop: 5,
  },
  detailsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
  },
  breedText: {
    color: Colors.GRAY,
    fontFamily: 'outfit-regular',
    fontSize: width * 0.035, 
    flex:1
  },
  ageText: {
    color: Colors.PRIMARY,
    fontFamily: 'outfit-regular',
    backgroundColor: Colors.LIGHT_PRIMARY,
    paddingHorizontal: width * 0.02, 
    borderRadius: 10,
    fontSize: width * 0.03, 
  },
});
