import {
    View, 
    ScrollView, 
    Pressable, 
    Text, 
    Image, 
    BackHandler, 
    Platform, 
    FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import IngredientsTile from './IngredientsTile';
import dishList from "../json/dish.json";


let isAndroid = Platform.OS == 'android';

BackHandler.addEventListener('hardwareBackPress', ()=> {
    setCurrentScreen('home');
    return true
})

export default function SelectedDishScreen ({styles}) {
    let selectedDish = findSelectedDish();

    function findSelectedDish(id=selectedDishID) {
        for (let dish of dishList) {
            if (dish.id == id) {
                return dish;
            }
        }
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {!isAndroid && <Pressable onPress={() => setCurrentScreen('home')}><Icon name="chevron-left" size={25} color="rgba(28,28,28,1)" paddingHorizontal={10} /></Pressable>}
            <Text style={[styles.header2, {textAlign: 'center', paddingBottom: 10}]}>{selectedDish.name}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    selectedDish.images.map(image => {
                        return (
                            <View style={[styles.image_box, styles.dish_preview]}>
                                <Image source={{uri: image}} style={styles.img} />
                            </View>
                        )
                    })
                }
            </ScrollView>
            <View style={[{padding: 10, marginTop: 20}]}>
                <Text style={[styles.lv2_label]}>Ingredients</Text>
                <View style={{paddingVertical: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10}}>
                    {
                        selectedDish.ingredients.map(data => {
                            return <IngredientsTile description={data.description} img_url={data.image} />
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}