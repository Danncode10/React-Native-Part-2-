import "./global.css"
import { Text, View, SafeAreaView, Switch, StatusBar} from "react-native";
import { use, useState } from "react";
 
export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bgColor, setBgColor] = useState("bg-blue-100");
  const [primaryColor, setPrimaryColor] = useState("bg-blue-800");
  const [primaryColorText, setPrimaryColorText] = useState("text-blue-100");
  const [barStyle, setBarStyle] = useState("dark-content");

  function onToggleDarkMode(newValue){
    setIsDarkMode(newValue);
    setBgColor(isDarkMode? "bg-blue-100" : "bg-black");
    setPrimaryColor(isDarkMode? "bg-blue-800": "bg-blue-300");
    setPrimaryColorText(isDarkMode? "text-blue-300": "text-blue-800");
    setBarStyle(isDarkMode? "dark-content": "light-content");
  }


  return (
    <View className={`flex-1 items-center justify-center ${bgColor}`}>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView className="flex-1 w-full p">
        <View className=" flex-1 p-4 ">
          <View className={`${primaryColor} justify-between flex-row rounded-full p-4`}>
            <Text className={`text-2xl font-bold ${primaryColorText}`}>Dark Mode</Text>
           <Switch 
            value={isDarkMode}
            onValueChange={onToggleDarkMode}
            trackColor={{true: "blue"}}
            thumbColor={isDarkMode? "lightblue": "white"}
            ios_backgroundColor="lightblue"
            
           />
          </View>
           
        </View>
        
      </SafeAreaView>
     
    </View>
  );
}



























// import "./global.css"
// import { Text, View, SafeAreaView, TextInput, Switch} from "react-native";
// import { use, useState } from "react";
 
// export default function App() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [bgColor, setBgColor] = useState("bg-white");

//   function toggleDarkMode(newValue){
//     setIsDarkMode(newValue);
//     setBgColor(isDarkMode? "bg-white" : "bg-black")
//   }

//   return (
//     <View className={`flex-1 ${bgColor}`}>
//     <SafeAreaView className="flex-1">
//       <View className="flex-1 items-center p-4">
//         <TextInput 
//             className={`${styles.textInput}`}
//             value={name}
//             onChangeText={setName}
//             placeholder="Enter Name"
//         />
//         <TextInput 
//             className={`${styles.textInput}`}
//             value={email}
//             onChangeText={setEmail}
//             placeholder="yourname@email.com"
//             keyboardType="email-address"
//         />
//         <TextInput 
//             className={`${styles.textInput}`}
//             value={number}
//             onChangeText={setNumber}
//             placeholder="Enter Number"
//             keyboardType="numeric"
//         />
       
//         <Text className="text-2xl color-blue-800">Your name is <Text className="text-red-500">{name}</Text></Text>
//         <Text className="text-2xl color-blue-800">Your email is {email}</Text>
//         <Text className="text-2xl color-blue-800">Your number is {number}</Text>

//         <TextInput 
//           className={`${styles.textInput} ${styles.multiLine}`}
//           placeholder="Message"
//           multiline
//           style={{textAlign: 'center'}}
//         />

//         <View className={`${styles.switchComponent}`} style={{justifyContent: 'space-between'}}>
//           <Text className={`${styles.textStyle}`}>Dark Mode</Text>
//           {/* <Switch 
//             value={isDarkMode}
//             onValueChange={(newValue) => setIsDarkMode(newValue)}
//             trackColor={{false: "red", true: "blue"}}
//             thumbColor={isDarkMode: "#26eeebff" ? "#ff0000ff"}
//           /> */}

//           <Switch
//             value={isDarkMode}
//             onValueChange={toggleDarkMode}
//             trackColor={{ false: "#f2ff00ff", true: "#0000ff" }}
//             thumbColor={isDarkMode ? "white" : "red"}
//           />
//         </View>

        


//       </View>
//     </SafeAreaView>
//     </View>
    
//   );
// }

// const styles = {
//   textInput: 'border border-blue-500 w-full p-4 rounded-full mb-4',
//   multiLine: 'min-h-[200px] rounded-lg mt-4',
//   textStyle: 'text-2xl color-blue-800',
//   switchComponent: 'flex-row items-center justify-between w-full',
// }