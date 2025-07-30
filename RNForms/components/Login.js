
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react"; 

export default function Login() {
 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    function validationForm(){
      let newError = {}

      if(!username){
        newError.username = "Username is required"
      }
      if(!password){
        newError.password = "Password is required"
      }

      setError(newError);

      return Object.keys(newError).length === 0;
    }

    function handleSubmit(){
      if(validationForm()){
        // runs if no error
        // If validation fails, this block is skipped, and error messages will appear.
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);
        setUsername("");
        setPassword("");
        setError({});
      }
    }


  return (
    <View
      className={`w-full border border-blue-500 p-4 rounded-lg `}>

      <Image source={require("../assets/icon.png")} 
        style={{
              width: 200,
              height: 400,
              alignSelf: "center",
              marginBottom: 50,
            }}
      />


      <View className="mb-4">
        <Text className="font-bold text-2xl mb-4 text-gray-400">Username</Text>
        <TextInput 
            className="border border-blue-500 rounded-lg p-4" 
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
        />
      </View>

      {/* Required part */}
      {
        error.username? <Text className={`${styles.errorText}`}>{error.username}</Text>: null
      }

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

      {/* Required part */}
      {
        error.password? <Text className={`${styles.errorText}`}>{error.password}</Text>: null
      }

      <TouchableOpacity className="items-center" onPress={() => handleSubmit()}>
        <View className="bg-blue-100 rounded-lg p-4 w-full items-center">
            <Text className="font-bold text-blue-500">Login</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}


const styles = {
  errorText: 'text-red-500 font-bold mb-4'
}