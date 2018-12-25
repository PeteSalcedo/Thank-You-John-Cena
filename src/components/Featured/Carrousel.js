import React from 'react';
import Slider from 'react-slick'

import image_1 from '../../resources/images/image_1.jpeg'
import image_2 from '../../resources/images/image_2.jpg'
import image4 from '../../resources/images/image4.jpg'

const Carrousel = () => {

    const settings = {
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    }
    return (
        <div className="carrousel_wrapper"
        style={{
                
               height:'${window.innerHeight}px',
               overflow:'hidden' 
            }}
            > 
           <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${image_1})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${image_2})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${image4})`,
                            height:`${window.innerHeight}px`
                        }}
                   ></div>
                </div>
            </Slider>       
            
     </div>
    );
};

export default Carrousel;