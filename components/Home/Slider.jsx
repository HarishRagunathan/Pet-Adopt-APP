import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';

const { width, height } = Dimensions.get('screen'); // Get screen dimensions

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);
  const sliderInterval = useRef(null);
  
  useEffect(() => {
    GetSliders();
    startAutoSlide();

    return () => {
      // Clear interval when component unmounts
      clearInterval(sliderInterval.current);
    };
  }, []);

  const GetSliders = async () => {
    setSliderList([]);
    const snapshot = await getDocs(collection(db, 'Sliders'));
    snapshot.forEach((doc) => {
      setSliderList((sliderList) => [...sliderList, doc.data()]);
    });
  };

  const startAutoSlide = () => {
    sliderInterval.current = setInterval(() => {
      currentIndex.current = currentIndex.current >= sliderList.length - 1 ? 0 : currentIndex.current + 1;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 3000); 
  };

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item?.imageUrl }} style={styles.sliderImage} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: width * 0.89, // Set the image width to 90% of the screen width
    height: height * 0.22, // Dynamically set height based on screen size (25% of height)
    borderRadius: 15,
    marginRight: 16,
  },
});
