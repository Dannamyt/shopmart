// CustomArrows.js
import React from 'react';
import leftArrow from './images/prevArrow.png';
import rightArrow from './images/nextArrow.png';

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'none', zIndex: 1 }}
            onClick={onClick}
        >
            <img src={leftArrow} alt="Previous" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'none', zIndex: 1 }}
            onClick={onClick}
        >
            <img src={rightArrow} alt="Next" style={{ width: '30px', height: '30px' }} />
        </div>
    );
};

export { CustomPrevArrow, CustomNextArrow };
