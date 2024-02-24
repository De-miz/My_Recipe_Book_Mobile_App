import {
    View, 
    Text, 
    ScrollView, 
    TextInput, 
    FlatList, 
    Pressable, 
    Image, 
    Dimensions, 
    StyleSheet, 
    PressableAndroidRippleConfig
} from 'react-native';
import dishList from "../json/dish.json";
import { useState } from 'react';


let screenDimensions = Dimensions.get('screen'),
screenWidth = screenDimensions.width;

export default function HomeScreen ({styles}) {
    let [searchInput, setSearchInput] = useState('');
    let [showSearchResultsBox, $showSearchResultsBox] = useState(false);
    let dishNames = [];
    let dishIds = [];
    for (let dish of dishList) {
        dishNames.push(dish.name);
        dishIds.push(dish.id);
    }
    return (
        <Pressable style={{flex: 1, paddingHorizontal: 10}} onPress={() => {console.log('outside touched'); $showSearchResultsBox(false)}}>
            {/* <Text style={styles.header1}>My Recipe Book</Text> */}
            <View style={styles.center_item_in_view}>
                <TextInput style={styles.search_field} placeholder="Search" onFocus={() => $showSearchResultsBox(true)} onChangeText={(value) => {setSearchInput(value); $showSearchResultsBox(true)}} value={searchInput} />
            </View>
            <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, overflow: 'hidden', marginBottom: 90}}>
                <FlatList 
                data={dishList} 
                renderItem={({item}) => {
                    return (
                        <Pressable style={styles.image_box} onPress={() => {setCurrentScreen('selected-dish'); setSelectedDishID(item.id)}} >
                            <Image source={{uri: item.image}} style={styles.img} />
                            <View style={styles.dish_label_container}><Text style={styles.dish_label}>{item.name}</Text></View>
                        </Pressable>
                    )
                }} 
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{height: 10}}></View>} 
                />
            </View>
            {
                (searchInput && showSearchResultsBox) && (
                    <View style={_styles.search_result_container}>
                        {
                            dishNames.slice(0, 7).map(dishName => {
                                if (searchInput != ' ' && dishName.toLowerCase().includes(searchInput.toLowerCase())) {
                                    return (
                                        <Pressable onPress={() => {setCurrentScreen('selected-dish'); setSelectedDishID(dishIds[dishNames.indexOf(dishName)])}} >
                                            <Text style={_styles.search_results}>{dishName}</Text>
                                        </Pressable>
                                    )
                                }
                            })
                        }
                    </View>
                )
            }
        </Pressable>
    )
}


const _styles = StyleSheet.create(
    {
        search_result_container: {
            // display: 'none',
            position: 'absolute',
            backgroundColor: 'white',
            width: '90%', 
            borderRadius: 15,
            marginTop: 5,
            left: `${screenWidth/54}%`,
            top: 80, 
            elevation: 5, 
            paddingHorizontal: 15, 
        }, 
        search_results: {
            marginVertical: 5,
        }
    }
)