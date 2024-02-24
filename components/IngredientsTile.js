import {
    View, 
    ImageBackground, 
    Text, 
    StyleSheet
} from 'react-native';


export default function IngredientsTile ({description, img_url='https://pixlr.com/images/index/ai-image-generator-one.webp'}) {
    return (
        <View style={styles.ingredients_tile_container}>
            <ImageBackground source={{uri: img_url}} style={[styles.img, styles.ingredients_tile]}>
                <View style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.45)'}}></View>
                <Text style={[styles.ingredients_label, {textAlign: 'center'}]}>{description}</Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    ingredients_tile: {
        backgroundColor: 'white', 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    ingredients_tile_container: {
        backgroundColor: 'white', 
        width: '48%', 
        overflow: 'hidden', 
        borderRadius: 30, 
        minHeight: 90, 
    },
    ingredients_label: {
        color: 'white', 
        fontWeight: 'bold'
    },
    img: {
        flex: 1,
        height: '100%', 
        width: '100%', 
        resizeMode: 'cover'
    }, 
})