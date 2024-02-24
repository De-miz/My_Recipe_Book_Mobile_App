import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet, 
    SafeAreaView, 
    Dimensions, 
    Platform
} from "react-native";
import HomeScreen from "./components/HomeScreen";
import SelectedDishScreen from "./components/SelectedDishScreen";


let screenDimensions = Dimensions.get('screen'),
screenWidth = screenDimensions.width,
screenHeight = screenDimensions.height, 
isAndroid = (Platform.OS == 'android');

export default function App () {
    [currentScreen, setCurrentScreen] = useState('home');
    [selectedDishID, setSelectedDishID] = useState();

    return (
        <SafeAreaView style={styles.body}>
            {
                currentScreen == 'home' && <HomeScreen styles={styles} />
            }

            {
                currentScreen == 'selected-dish' && <SelectedDishScreen styles={styles} />
            }
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1, 
        // backgroundColor: 'green',
        paddingTop: isAndroid ? 60: 0, 
    }, 
    header1: {
        fontSize: 35, 
        fontWeight: 'bold'
    }, 
    header2: {
        fontSize: 28, 
        fontWeight: '700'
    },
    lv2_label: {
        fontSize: 18, 
        fontWeight: '600',
    },
    search_field: {
        backgroundColor: 'rgba(217,217,217,1)', 
        height: 50, 
        width: '90%',
        paddingHorizontal: 20, 
        paddingVertical: 10,
        borderRadius: 40, 
        marginTop: 30, 
        fontSize: 18
    }, 
    center_item_in_view: {
        display: 'flex', 
        alignItems: 'center', 
        paddingBottom: 15
    }, 
    image_box: {
        height: 150, 
        width: '100%', 
        maxWidth: 500,
        backgroundColor: 'white', 
        borderRadius: 40, 
        overflow: 'hidden', 
        marginTop: 20, 
        borderWidth: 1, 
        borderColor: 'rgba(184,184,184,0.3)'
    },
    dish_preview: {
        height: 270, 
        width: screenWidth - 60, 
        marginTop: 0, 
        marginHorizontal: 10, 
    },
    img: {
        flex: 1, 
        height: '100%', 
        width: '100%', 
        resizeMode: 'cover'
    }, 
    dish_label_container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: 'rgba(0,0,0,0.5)', 
        paddingHorizontal: 30, 
        paddingVertical: 15
    },
    dish_label: {
        fontSize: 20, 
        color: 'white', 
        fontWeight: '600', 
    }, 
})