import { View, Button, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'
import { AntDesign, Entypo, Ionicons} from "@expo/vector-icons"
import Swiper from "react-native-deck-swiper"

const DUMMY_DATA = [
  {
    id:1,
    firstName: 'Sonny',
    lastName: 'Sangha',
    job: 'Software Developer',
    photoURL: 'https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg',
    age:27
  },
  {
    id:2,
    firstName: 'Elon',
    lastName: 'Musk',
    job: 'Software Developer',
    photoURL: 'https://www.magyarszo.rs/get_img?ImageId=258850',
    age:40
  },
  {
    id:3,
    firstName: 'P-Holl',
    lastName: 'Ákos',
    job: 'Frontend Developer',
    photoURL: 'https://scontent.fbud6-3.fna.fbcdn.net/v/t1.6435-9/199716171_3812342788894365_6007568025747142072_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8OcKQ2hcqqAAX8tU5Ax&_nc_ht=scontent.fbud6-3.fna&oh=00_AT-iFQkMq1NY7W2SYafO1a1s5aJmGE4vfPFA7Df7gSoGeA&oe=62F3D546',
    age:24
  }
]

const HomeScreen = () => {
    const navigation = useNavigation()
    const { user, logout } = useAuth()
    const swipeRef = useRef()

    return (
      <SafeAreaView className="flex-1">
          {/* Header */}
          <View className="flex-row items-center relative justify-between px-5">
            <TouchableOpacity onPress={logout}>
                <Image source={{ uri: user.photoURL }} className="h-10 w-10 rounded-full"/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require("./../assets/tinder-logo.png")} className="h-14 w-14"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
              <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864"/>
            </TouchableOpacity>
          </View>

          {/* Cards */}
          <View className="flex-1 -mt-6">
            <Swiper
              ref={swipeRef}
              containerStyle={{ backgroundColor: "transparent" }}
              cards={DUMMY_DATA}
              disableBottomSwipe={true}
              disableTopSwipe={true}
              stackSize={5}
              cardIndex={0}
              onSwipedLeft={()=>{
                console.log("swiped left")
              }}
              onSwipedRight={()=>{
                console.log("swiped right")
              }}
              backgroundColor={"4FD0E9"}
              overlayLabels={{
                left:{
                  title: "NOPE",
                  style:{
                    label:{
                      textAlign: "right",
                      color:"red",
                    }
                  }
                },
                right:{
                  title: "MATCH",
                  style:{
                    label:{
                      textAlign: "left",
                      color:"#4DED30",
                    }
                  }
                }
              }}
              renderCard={(card)=>(
                <View
                  key={card.id}
                  className="bg-white rounded-xl h-3/4 relative shadow-md">
                  <Image source={{uri:card.photoURL}} className="h-full w-full rounded-xl absolute top-0"/>

                  <View className="flex-row bg-white w-full h-20 absolute bottom-0 justify-between items-center rounded-b-xl px-6 py-2">
                    <View>
                      <Text className="text-xl font-bold">
                        {card.firstName} {card.lastName}
                      </Text>
                      <Text>{card.job}</Text>
                    </View>
                    <Text className="text-2xl font-bold">{card.age}</Text>
                  </View>
                </View>
              )}
            />
          </View>

          <View className="flex-row justify-evenly flex">
            <TouchableOpacity onPress={()=>swipeRef.current.swipeLeft()} className="p-5 bg-red-200 rounded-full">
              <Entypo name="cross" size={30} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>swipeRef.current.swipeRight()} className="p-5 bg-green-200 rounded-full">
              <Entypo name="heart" size={30} color="green"/>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    )
}

export default HomeScreen