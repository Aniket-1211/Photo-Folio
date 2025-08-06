import Navbar from "./Components/Navbar/Navbar";
import AlbumList from "./Components/Album/AlbumList/AlbumList";
import ImageForm from "./Components/Image/ImageForm/ImageForm";
import ImageList from "./Components/Image/ImageList/ImageList";
import { useState,useEffect } from "react";
function App() {
  
  return (
    <>
    <Navbar></Navbar>
    {/* <ImageForm></ImageForm> */}
    <AlbumList></AlbumList>
    {/* <ImageList></ImageList>  */}
    </>
  );
}

export default App;
