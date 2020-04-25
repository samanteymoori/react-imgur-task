import React, { Component } from 'react';
import Header from "./../components/common/header"
import GalleryGrid from '../components/gallery/galleryGrid';
class Gallery extends Component {
    state = {  }
    render() { 
        return (
        <div className="text-white">
            <Header/>
            <GalleryGrid/>
        </div> );
    }
}
 
export default Gallery;