// import "./global.css"
// import { Text, View, SafeAreaView, Switch, StatusBar} from "react-native";
// import { use, useState } from "react";
 
// export default function App() {

//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [bgColor, setBgColor] = useState("bg-blue-100");
//   const [primaryColor, setPrimaryColor] = useState("bg-blue-800");
//   const [primaryColorText, setPrimaryColorText] = useState("text-blue-100");
//   const [barStyle, setBarStyle] = useState("dark-content");

//   function onToggleDarkMode(newValue){
//     setIsDarkMode(newValue);
//     setBgColor(isDarkMode? "bg-blue-100" : "bg-black");
//     setPrimaryColor(isDarkMode? "bg-blue-800": "bg-blue-300");
//     setPrimaryColorText(isDarkMode? "text-blue-300": "text-blue-800");
//     setBarStyle(isDarkMode? "dark-content": "light-content");
//   }


//   return (
//     <View className={`flex-1 items-center justify-center ${bgColor}`}>
//       <StatusBar barStyle={barStyle} />
//       <SafeAreaView className="flex-1 w-full p">
//         <View className=" flex-1 p-4 ">
//           <View className={`${primaryColor} justify-between flex-row rounded-full p-4`}>
//             <Text className={`text-2xl font-bold ${primaryColorText}`}>Dark Mode</Text>
//            <Switch 
//             value={isDarkMode}
//             onValueChange={onToggleDarkMode}
//             trackColor={{true: "blue"}}
//             thumbColor={isDarkMode? "lightblue": "white"}
//             ios_backgroundColor="lightblue"
//            />
//           </View>
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// }




import "./global.css"
import { Text, View, SafeAreaView, TextInput, Switch, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import { useState } from "react";
import Login from "./components/Login.js";
 
export default function App() {

  return (
    <KeyboardAvoidingView 
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === "ios"? 100 : 0} 
          style={{flex: 1, padding: 16}} >
    <SafeAreaView className="flex-1 p-4">
      <ScrollView>
         <Login />
      </ScrollView>
     
    </SafeAreaView>
    </KeyboardAvoidingView>
    
  );
}
