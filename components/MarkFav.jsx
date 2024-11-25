import { View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Shared from '../Shared/Shared';
import { useUser } from '@clerk/clerk-expo';

export default function MarkFav({ pet ,colors='black'}) {
    const { user } = useUser();
    const [favList, setFavList] = useState([]);

    useEffect(() => {
        if (user) {
            GetFav(); 
        }
    }, [user]);

    const GetFav = async () => {
        try {
            const result = await Shared.GetFavList(user);
            console.log(result);
            setFavList(result.favorites || []);  
        } catch (error) {
            console.error("Error fetching favorite list: ", error);
        }
    };

    const AddToFav = async () => {
        try {
            const updatedFavList = [...favList, pet.id];  // Copy and add the new favorite
            await Shared.UpdateFav(user, updatedFavList);
            GetFav();  // Refresh after update
        } catch (error) {
            console.error("Error adding to favorites: ", error);
        }
    };

    const removeFromFav = async () => {
        try {
            const updatedFavList = favList.filter(item => item !== pet.id);  // Fix: assign filtered result to updatedFavList
            await Shared.UpdateFav(user, updatedFavList);
            GetFav();  // Refresh after removal
        } catch (error) {
            console.error("Error removing from favorites: ", error);
        }
    };

    return (
        <View>
            {favList.includes(pet.id) ? 
                <Pressable onPress={removeFromFav}>
                    <Ionicons name="heart" size={24} color="red" />
                </Pressable>
                :
                <Pressable onPress={() => AddToFav()}>
                    <Ionicons name="heart-outline" size={24} color={colors} />
                </Pressable>
            }
        </View>
    );
}
