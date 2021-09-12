import React, { useRef,useEffect } from 'react'
import {
    Animated,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

export default function _Image(props) {
    const opacity = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing(
            opacity,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    useEffect(() => {
        setTimeout(function () {
            fadeIn()
          }, 300)    
    }, [])

    return (
        <Animated.View style={{ opacity: opacity }}>
            <View style={Styles.areaWrapper}>
                <Text
                    numberOfLines={1}
                    style={Styles.nameText}>
                    {props.name + "\n"}
                </Text>
                <Text
                    style={Styles.sizeText}>
                    {props.size}
                </Text>
                <View style={Styles.area}>
                    <Image
                        style={Styles.gradient}
                        source={require("../img/gradient.png")} />
                    <Image
                        style={Styles.image}
                        source={{ uri: props.uri }} />
                    <TouchableOpacity onPress={() => { fadeOut(); props.removeHandler(props.id); }}>
                        <Image
                            style={Styles.delete}
                            source={require("../img/delete.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
}


const Styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },

    image: {
        borderRadius: 10,
        width: "100%",
        height: "100%",
    },
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: "center",
    },

    area: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.73,
        shadowRadius: 1.62,
        elevation: 4,

        width: 160,
        height: 160,
    },

    areaWrapper: {
        padding: 15,
    },

    nameText: {
        color: "white",
        position: "absolute",
        zIndex: 2,
        marginTop: 20,
        marginLeft: 20,
        fontSize: 12,
    },

    sizeText: {
        position: "absolute",
        zIndex: 2,
        marginTop: 35,
        marginLeft: 20,
        flex: 1,
        color: "#C0C0C0",
        fontSize: 11
    },

    gradient: {
        width: 160,
        height: 60,
        position: "absolute",
        zIndex: 2,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },

    delete: {
        width: 26,
        height: 26,
        opacity: 0.8,
        position: "absolute",
        bottom: 5,
        right: 8,
    }

});