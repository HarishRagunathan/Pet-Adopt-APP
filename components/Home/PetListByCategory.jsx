import { View, Text,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import { db } from './../../config/FirebaseConfig';
import { collection, getDocs, query ,where } from 'firebase/firestore'
import PetListitem from './PetListitem';

export default function PetListByCategory() {
  useEffect(()=>{
    GetPetlist('Dogs')
  },[])
  const [petList,setPetList]=useState([])
  const [loader,setLoader]=useState(false)
  const GetPetlist =async(category)=>{
    setLoader(true)
    setPetList([])
    const q=query(collection(db,'Pets'),where('category','==',category))
    const querySnapShot=await getDocs(q)
    querySnapShot.forEach(doc=>{
      setPetList(petList=>[...petList,doc.data()])
    })
    setLoader(false

      
    )
  }
  return (
    <View >
      <Category category={(value)=>GetPetlist(value)}/>
      <FlatList
      data={petList}
      horizontal={true}
      refreshing={loader}
      onRefresh={()=>GetPetlist('Dogs')}
      showsHorizontalScrollIndicator={false}
      style={{marginTop:15}}
      renderItem={({item,index})=>(
        <PetListitem pet={item}/>
      )} />
    </View>
  )
}