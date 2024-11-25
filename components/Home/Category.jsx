import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';
import Colors from './../../constants/Colors';

const { width } = Dimensions.get('screen'); // Get screen width for responsiveness

export default function Category({ category }) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Dogs');

  useEffect(() => {
    GetCategories();
  }, []);

  const GetCategories = async () => {
    setCategoryList([]);
    const snapshot = await getDocs(collection(db, 'Category'));
    snapshot.forEach((doc) => {
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'outfit-medium' }}>Category</Text>
      <FlatList
        data={categoryList}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => { setSelectedCategory(item.name); category(item.name); }}
            >
              <View style={[styles.container, selectedCategory == item.name && styles.selectedCategoryContainer]}>
                <Image
                  source={{ uri: item?.imageUrl }}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>{item?.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_PRIMARY,
    padding: width * 0.04, 
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    margin: width * 0.02, 
  },
  selectedCategoryContainer: {
    backgroundColor: Colors.SECONDARY,
    borderColor: Colors.SECONDARY,
  },
  categoryImage: {
    width: width * 0.1, // Responsive width for image (10% of screen width)
    height: width * 0.1, // Responsive height for image (10% of screen width)
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'outfit-medium',
    fontSize: width * 0.04, // Responsive font size based on screen width
  },
});
