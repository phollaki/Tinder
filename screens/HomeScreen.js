import { View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const { logout } = useAuth()

    return (
      <View className="">
              <Button title="Go to chat" onPress={()=>navigation.navigate("Chat")}/>
              <Button title="Logout" onPress={logout}/>
      </View>
    )
}

export default HomeScreen