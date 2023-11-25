import { Platform, View } from 'react-native';
//import Constants from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInforScreen';
import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#563700' }
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
};
 const AboutNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='About'
                component={AboutScreen}
            ></Stack.Screen>
        </Stack.Navigator>
    )
 }

 const ContactNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact Us'}}
            ></Stack.Screen>
        </Stack.Navigator>
    )
 }

const DirectoryNavigator = () => {
    
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    );
};

//Constants.statusBarHeight
const Main = () => {

    return (
        <View style={{
            flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 20

        }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
                <Drawer.Screen
                    name='About'
                    component={AboutNavigator}
                    options={{ title: 'About' }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact Us' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;