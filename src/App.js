import React, {useState, useEffect} from 'react';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';

import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './components/UnsplashImage.css';


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
     .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=8`)
     .then(res => setImages([...images, ...res.data]))
  }

  return (
    <div className="App">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <section className="WrapperImage">
          {images.map((image, index) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} image={image} index={index} images={images} />
          ))}
        </section>
      </InfiniteScroll>
    </div>
  );
}

export default App;
