import { SafeAreaView, ImageBackground, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const {signInWithGoogle} = useAuth()
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <View className="flex-1">
      <ImageBackground resizeMode="cover" className="flex-1" source={{ uri:"https://tinder.com/static/tinder.png" }}>
        <TouchableOpacity
          onPress={() => {signInWithGoogle()}}
          className="absolute bottom-40 w-52 bg-white rounded-full py-3"
          style={{ marginHorizontal: "25%"}}>
          <Text className="text-center font-semibold">Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default LoginScreen