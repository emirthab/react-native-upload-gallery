import { transform } from '@babel/core';
import React, { useRef, useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import _Image from "./Image"
import { DraggableGrid } from "react-native-draggable-grid"

export default function Images(props) {

  const removeHandler = (key) => {
    var a = []
    setTimeout(function () {
      props.data.map((dat,i)=>{        
        if (dat["key"] != key){          
          a.push(dat)
        }        
      });
      props.setData(a)
    }, 300)
  }

  const render_item = (item: { uri: string, name: string, key: string, size: string }) => {
    return (
      <View>
        <_Image id={item.key} removeHandler={removeHandler} uri={item.uri} name={item.name} size={item.size} />
      </View>
    );
  }

  return (
    <View style={{marginTop: 20,
      justifyContent: "center",}}>
        <DraggableGrid
          numColumns={2}
          renderItem={render_item}
          data={props.data}
          onDragRelease={(data) => {
            props.handleScroll(true);
            props.setData(data);
          }}
          onDragStart={() => {
            props.handleScroll(false);
          }}
        />
    </View >
  )
}
