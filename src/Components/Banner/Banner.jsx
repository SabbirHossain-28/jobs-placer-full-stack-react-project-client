import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Banner.css";
import bannerImage from "../../assets/images/pexels-olly-3760069.jpg";
import slideImg1 from "../../assets/images/slide1.jpg";
import slideImg2 from "../../assets/images/slide2.jpg";
import slideImg3 from "../../assets/images/slide3.jpg";
import slideImg4 from "../../assets/images/slide4.jpg";

import { Parallax, Pagination, Autoplay } from "swiper/modules";

const swiperSlideContent = [
  {
    title: "On-Site Job",
    sub_title: "Work In Excellent Office Environment",
    description:
      "Explore opportunities to work directly at office locations. Collaborate closely with colleagues, participate in team meetings, and immerse yourself in your company culture by joining your on-site team.",
    image:slideImg1,
  },
  {
    title: "Remote Job",
    sub_title: " Work From Anywhere You Want",
    description:
      "Discover remote job opportunities that offer the flexibility to work from the comfort of your home or any location with an internet connection. Experience the freedom to manage your work schedule while staying connected to our global team virtually.",
    image:slideImg2,
  },
  {
    title: "Hybrid",
    sub_title: "  Flexible Work Arrangements",
    description:
      "Find hybrid job roles that provide the perfect balance between remote work and on-site presence. Enjoy the freedom to choose when and where you work while maintaining regular interactions with our team members and benefiting from the best of both worlds.",
    image:slideImg3,
  },
  {
    title: "Part-Time",
    sub_title: "   Flexible Hours And Environment",
    description:
      "Discover part-time job opportunities tailored to fit your schedule and lifestyle. Whether you're a student, a parent, or seeking additional income, explore flexible part-time roles that allow you to pursue other commitments while gaining valuable professional experience.",
    image:slideImg4,
  },
];

export default function Banner() {
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage": `url(${bannerImage})`,
            backgroundPosition: "center",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {
            swiperSlideContent.map((contentData,idx)=>(<SwiperSlide key={idx}>
                <div className="flex flex-col text-center lg:text-left text-[#41b943] items-center lg:flex-row ">
                  <div className="lg:w-1/2">
                    <div className="title font-lora font-bold" data-swiper-parallax="-300">
                      {contentData.title}
                    </div>
                    <div className="subtitle font-inter mb-2" data-swiper-parallax="-200">
                      {contentData.sub_title}
                    </div>
                    <div className="text  font-inter" data-swiper-parallax="-100">
                      <p>
                        {contentData.description}
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img className="rounded-full h-96 w-full" src={contentData.image} alt="" />
                  </div>
                </div>
              </SwiperSlide>))
        }
      </Swiper>
    </div>
  );
}
