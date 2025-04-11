import React from 'react'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";



import list from "../../public/list.json"
import Laura from './Cards';


function freebook() {




    const filterData=list.filter((data)=>data.category==="Free");



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };




  return (
   <>
   <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 mt-8'
   
   style={{ borderTop: '2px solid black',  paddingTop:"20px"}}
   >
   
   <div>
   <h1 className='font-semi-bold text-xl pb-2'>Free courses offer</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolores cupiditate neque? Sequi error asperiores atque. Modi debitis totam doloremque quasi officiis tempore at itaque magni excepturi distinctio, dignissimos eligendi!</p>
   </div>


  

<div>

<Slider {...settings}>
   



{filterData.map((item)=>(
    <Laura item={item} key={item.id} />
))}

      </Slider>

      </div>
</div>

   </>
  );
}

export default freebook;
