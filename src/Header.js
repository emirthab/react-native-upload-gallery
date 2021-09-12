import React,{ useState,useEffect } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

function Header(props) {    
    const [width, setWidth] = useState(Dimensions.get("window").width)

    useEffect(() => {
        Dimensions.addEventListener('change', () => {
            setWidth(Dimensions.get("window").width)
        });
    }, [])

    const styleMain = () => {
        var _json = {};
        for(key in Styles.mainWindow){
            _json[key] = Styles.mainWindow[key];
        }
        _json["width"] = width - width/10;
        return _json;
       }

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={props.selectFile}>
                <View style={styleMain()}>
                    <Image
                        source={require("../img/upload_icon.png")}
                        style={Styles.uploadIcon} />
                    <View style={Styles.uploadButton}>
                        <Text style={Styles.buttonText}>Upload Images</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )   
}

const Styles = StyleSheet.create({
    uploadIcon: {
        width: 70,
        height: 70,
        marginTop: 10
    },

    container: {
        alignItems: "center",
        justifyContent: "center"
    },

    mainWindow: {
        height: 150,
        borderWidth: 4,
        borderColor: "black",
        borderRadius: 5,
        alignItems: "center",
        marginTop:10,
    },

    uploadButton: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#0275d8",
        borderRadius: 3,
        width: 170,
        height: 35,
        justifyContent: "center"

    },
    buttonText: {
        fontSize:15,
        color: "white",
        textAlign: "center"
    },
});    



export default Header;