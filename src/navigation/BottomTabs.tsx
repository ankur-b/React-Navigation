import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GoldScreen from "../screens/GoldScreen";
import TomatoScreen from "../screens/TomatoScreen";
import PurpleScreen from "../screens/PurpleScreen";
import { Ionicons,AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:'dodgerblue',
                tabBarInactiveTintColor:'#A7CCF6',
                tabBarStyle:{
                    backgroundColor:'#fff'
                },
                tabBarLabelStyle:{
                    fontSize:15,
                    fontWeight:"bold"
                }
            }}
        >
            <Tab.Screen options={{title:"Gold",tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />}} name="GoldScreen" component={GoldScreen} />
            <Tab.Screen options={{title:"Tomato",tabBarIcon:({color})=><AntDesign name="profile" size={24} color={color} />}} name="TomatoScreen" component={TomatoScreen} />
            <Tab.Screen options={{title:"Purple",tabBarIcon:({color})=><AntDesign name="setting" size={24} color={color} />}} name="PurpleScreen" component={PurpleScreen} />
        </Tab.Navigator>
    )
}

export default MyTabs