
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import element from "/element.png"

import {  Pagination } from 'swiper/modules';

import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


const Review = () => {
    return (
        <div className='py-16'>
            <div className="max-w-screen-xl mx-auto  flex gap-x-3">
                <div className="">
                    <img className='text-center' src={element} alt="" />
                    <h1 className='font-extrabold text-5xl mt-8'>Client Review</h1>
                    <p className='w-[331px] font-paprika text-[18px] mt-8 '>people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  </p>
                    <div className="flex text-6xl mt-5 gap-x-5 text-orange-500 cursor-pointer">
                        <FaCircleArrowLeft />
                        <FaCircleArrowRight />

                    </div>
                </div>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-[#D8EAFF] px-[40px] py-[25px]  relative ">
                            <p className='w-[270px] text-[18px] font-paprika text-[#6C7D93] '>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <p className='mt-4 flex gap-x-4 '>
                                <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
                                <p><p className='font-semibold text-orange-500 text-[18px]' >Jane Cooper</p>
                                    <p>Fashion Designer</p></p>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#D8EAFF] px-[40px] py-[25px]  relative ">
                            <p className='w-[270px] text-[18px] font-paprika text-[#6C7D93] '>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <p className='mt-4 flex gap-x-4 '>
                                <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
                                <p><p className='font-semibold text-orange-500 text-[18px]' >Jane Cooper</p>
                                    <p>Fashion Designer</p></p>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#D8EAFF] px-[40px] py-[25px]  relative ">
                            <p className='w-[270px] text-[18px] font-paprika text-[#6C7D93] '>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <p className='mt-4 flex gap-x-4 '>
                                <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
                                <p><p className='font-semibold text-orange-500 text-[18px]' >Jane Cooper</p>
                                    <p>Fashion Designer</p></p>
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[#D8EAFF] px-[40px] py-[25px]  relative ">
                            <p className='w-[270px] text-[18px] font-paprika text-[#6C7D93] '>Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. </p>
                            <p className='mt-4 flex gap-x-4'>
                                <img className='w-[100px]' src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="" />
                                <p><p className='font-semibold text-orange-500 text-[18px]' >Jane Cooper</p>
                                    <p>Fashion Designer</p></p>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>



            </div>
        </div>
    )
}

export default Review