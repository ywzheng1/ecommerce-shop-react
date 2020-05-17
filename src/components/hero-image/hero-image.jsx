import React from 'react';

import './hero-image.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const HeroImage = () => {
    return(
        <div className='hero-cover'>
            <img 
                src='https://i.ibb.co/8B6vdBf/photo-1490481651871-ab68de25d43d.jpg' 
                alt='hero-homepage-cover'
            />
            <div className='center-action'>
                <h1>Summer Season Collection</h1>
                <CustomButton>SHOP -> </CustomButton>
            </div>
        </div>
    )
}

export default HeroImage;