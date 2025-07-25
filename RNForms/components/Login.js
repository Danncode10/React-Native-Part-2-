
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { use, useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


  return (
    <View className={`w-full border border-blue-500 p-4 rounded-lg`}>
      <View className="mb-4">
        <Text className="font-bold text-2xl mb-4 text-gray-400">Username</Text>
        <TextInput 
            className="border border-blue-500 rounded-lg p-4" 
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
        />
      </View>

      <View className="mb-4">
        <Text className="font-bold text-2xl mb-4 text-gray-400">Password</Text>
        <TextInput 
            className="border border-blue-500 rounded-lg p-4" 
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
      </View>

      <TouchableOpacity className="items-center" onPress={() => {}}>
        <View className="bg-blue-100 rounded-lg p-4 w-full items-center">
            <Text className="font-bold text-blue-500">Login</Text>
        </View>
      </TouchableOpacity>



      
    
    </View>
  );
}
