# React Native Upload Gallery <img src="https://belenyasin.com/wp-content/uploads/2019/07/react-icon.png" width="70"></img>
[![npm](https://img.shields.io/npm/v/react-native-upload-gallery.svg)](https://www.npmjs.com/package/react-native-upload-gallery)
[![license](https://img.shields.io/npm/l/react-native-upload-gallery.svg)](LICENSE)
[![Build Status](https://travis-ci.org/emirthab/react-native-upload-gallery.svg?branch=master)](https://travis-ci.org/m-inan/react-upload-gallery)
[![Open Issues](https://img.shields.io/github/issues/emirthab/react-native-upload-gallery.svg)](https://github.com/m-inan/react-upload-gallery/issues)

 <br />

### [Watch Demo Video! ](https://www.youtube.com/watch?v=wAd9v5HzVLk)
 <p align="left">
   <a href="https://www.youtube.com/watch?v=wAd9v5HzVLk">
    <img src="https://github.com/emirthab/react-native-upload-gallery/blob/main/example/media/youtube.png?raw=true" width="450">
  </a>
</p>


## Introduction:
:large_blue_circle: An image upload component for react native that works with drag and drop mechanics.

|Drag-Drop|Delete  | Upload|
|:--------|:----|:------|
|<img src="https://github.com/emirthab/react-native-upload-gallery/blob/main/example/media/drag.gif?raw=true" width="200">|<img src="https://github.com/emirthab/react-native-upload-gallery/blob/main/example/media/delete.gif?raw=true" width="200">|<img src="https://github.com/emirthab/react-native-upload-gallery/blob/main/example/media/upload.gif?raw=true" width="200">|


## Installation:
```
npm install react-native-upload-gallery
```
or
```
yarn add react-native-upload-gallery
```

## Props

| parameter  | type   | required | description |
| :--------  | :----  | :------- | :---------- |
| initialState | array | yes | image gallery initial value.|
| onChangeState| function  | no | The function that is triggered when the sequence changes.|

## Usage
```javascript
const App: () => Node = () => {
  return (
    <UploadGallery
    initialState={demodata}
    onChangeState={(state) => {
      console.log(state)
    }}/>
  );
};
```

## Dependencies
```
  "dependencies": {
    "react": "17.0.2",
    "react-native": "0.65.1",
    "react-native-draggable-grid": "^2.1.3",
    "react-native-image-picker": "^4.0.6"
  },
```
