import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import anime from 'animejs/lib/anime.es.js';
import "../style.css"

function Slider() {

useEffect(()=>{
    const animateImage= ()=>{
      anime({
        targets: '.sliderchild',
        translateX:  ['0%', '25%'],
        translateY:  ['5%', '15%'],
        duration: 4000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };

    const animateImage2= ()=>{
      anime({
        targets: '.sliderbg',
        scale:  [1, 1.3],
        duration: 8000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };


    animateImage();
    animateImage2();

  },[]);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{ backgroundImage: "url('img/slider/1.jpg')" }}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
              <div className='lg:w-1/2'>
                <h2 className='text-2xl lg:text-5xl font-poppins text-white font-semibold'>Lorem ipsum dolor sit.</h2>
                <p className='text-white mt-1 lg:mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus, ab ipsam omnis consectetur ea libero voluptates, harum nesciunt assumenda, aperiam sapiente. Perspiciatis quisquam fuga, blanditiis non iste cupiditate unde!</p>
              </div>
              <div className='lg:w-1/2 '>
                <img src="img/slider/1.png" alt="" className='w-full h-auto sliderchild' />
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{ backgroundImage: "url('img/slider/3.jpg')" }}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
              <div className='lg:w-1/2'>
                <h2 className='text-2xl lg:text-5xl font-poppins text-white font-semibold'>Lorem ipsum dolor sit.</h2>
                <p className='text-white mt-1 lg:mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus, ab ipsam omnis consectetur ea libero voluptates, harum nesciunt assumenda, aperiam sapiente. Perspiciatis quisquam fuga, blanditiis non iste cupiditate unde!</p>
              </div>
              <div className='lg:w-1/2 '>
                <img src="img/slider/5.png" alt="" className='w-full h-auto sliderchild' />
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{ backgroundImage: "url('img/slider/2.jpg')" }}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
              <div className='lg:w-1/2'>
                <h2 className='text-2xl lg:text-5xl font-poppins text-white font-semibold'>Lorem ipsum dolor sit.</h2>
                <p className='text-white mt-1 lg:mt-5 font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus, ab ipsam omnis consectetur ea libero voluptates, harum nesciunt assumenda, aperiam sapiente. Perspiciatis quisquam fuga, blanditiis non iste cupiditate unde!</p>
              </div>
              <div className='lg:w-1/2 '>
                <img src="img/slider/2.png" alt="" className='w-full h-auto sliderchild' />
              </div>
            </div>
          </section>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Slider;
