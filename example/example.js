import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import UploadGallery from "react-native-upload-gallery"

const App: () => Node = () => {
  return (
    <UploadGallery
    initialState={demodata}
    onChangeState={(state) => {
      console.log(state)
    }}/>
  );
};

export default App;

const demodata = [
  {
    uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    name: "example1.jpg",
    size: "1.34 MB"
  },
  {
    uri: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg",
    name: "example2.png",
    size: "1256 KB"
  },
  {
    uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "example3.png",
    size: "101 KB"
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdYQsYA_eaMqQMw6xIOaOpqghrpngTHqdZNyym5M-J8kgV3e9GBH1vJEULh-BsI4rGqA&usqp=CAU",
    name: "example4.png",
    size: "1.42 MB"
  }
]