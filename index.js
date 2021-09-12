import React, { useEffect, useState } from 'react'
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';
import { launchImageLibrary } from "react-native-image-picker"

import Header from "./src/Header"
import Images from "./src/Images"

export default function Gallery(props) {
    const [scrolling, setScrolling] = useState(true)

    const [gallery, setGallery] = useState([])
    const [unique, setUnique] = useState(0)

    useEffect(() => {
        var initialData = []
        props.initialState.map((init,i)=>{
            init["key"] = String(i)
            initialData.push(init)
            setUnique(i+1)
        });
        setGallery(initialData)
    }, [])

    useEffect(() => {
        props.onChangeState(gallery)
    }, [gallery])

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const selectFile = async () => {

        try {
            launchImageLibrary({ mediaType: "photo", allowsMultiple: true }, (response) => {
                var a = []
                gallery.map((img,i)=>{
                    a.push(img)
                });
                if (!response.didCancel && !response.error && !response.customButton) {
                    var res = response.assets[0]
                    var imageData = {
                        uri: res.uri,
                        name: res.fileName,
                        size: formatBytes(res.fileSize),
                        key: String(unique),
                    }
                    a.push(imageData)
                    setGallery(a)
                    setUnique(unique + 1)                
                }
            })
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <SafeAreaView>
            <Header selectFile={selectFile} />
            <ScrollView
                style={{ marginTop: 20, }}
                scrollEnabled={scrolling}>
                <Images handlerUnique={setUnique} handleScroll={setScrolling} data={gallery} unique={unique} setData={setGallery} />
                <View style={{ height: 170 }}></View>
            </ScrollView>
        </SafeAreaView>
    )
}
