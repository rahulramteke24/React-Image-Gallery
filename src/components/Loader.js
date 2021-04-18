import React from 'react';
import './UnsplashImage.css';

const Loader = () => {
  return(
    <div className="Loader">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loader;