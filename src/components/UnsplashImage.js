import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import './UnsplashImage.css';



const UnsplashImage = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState("");

    const onClick = (e) => {
        const index = e.target.name;
        setOpenModal(true);
        setCurrentIndex(index);

    }
    
    const previous = () => {
        if(currentIndex > 0) {
            const prevIndex = parseInt(currentIndex)-1;
            setCurrentIndex(prevIndex)
        }
    };

    const next = () => {
        const nextIndex = parseInt(currentIndex)+1; 
        setCurrentIndex(nextIndex)
    };

    const closeImage = () => {
        setOpenModal(false);
    };

    return (
    <div>

    {!openModal ? 
        <div className="Gallery">
            <img className="img-screen" src={props.url} key={props.key} alt="" onClick={(e) => onClick(e)} name={props.index} />
        </div> : 
        <div className="Modal">
            <span className={currentIndex > 0 ? "Left-arrow" : "Unselected"}><ArrowBackIosIcon onClick={previous} /></span>
            <img className="fullImage" src={props.images[currentIndex].urls.regular} alt="" />
            <span className="Right-arrow"><ArrowForwardIosIcon onClick={next} /></span>
            <span className="Close-icon"><CloseIcon onClick={closeImage} /></span>
        </div>
    }
    </div>
    );
}

export default UnsplashImage;
