import React, { useRef } from 'react'
import './HomeBanner.css'
import HomeOffers from '../HomeOffers/HomeOffers';



const HomeBanner = () => {
  const mainImgRef = useRef(null);

  const handleScroll = (direction) => {
    if (mainImgRef.current) {
      const scrollAmount = direction * mainImgRef.current.clientWidth;
      mainImgRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <div className="main">
      <div className="main-imgs">
        <div className="left_img_button" id="slideButton" onClick={() => handleScroll(-1)}>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div className="main-img" ref={mainImgRef}>

          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3A_GW_PC_EventHero_NTA_2x._CB545056695_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Skincare_2._CB545116036_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jupiter/P3/3A_PC_Hero_3000x1200-trimmer-2x._CB545100078_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3A_GW_PC_EventHero_NTA_2x._CB545056695_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jupiter/KSD/PEA/Updated/Phase3/Skincare_2._CB545116036_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jupiter/P3/3A_PC_Hero_3000x1200-trimmer-2x._CB545100078_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_P3A_GW_PC_EventHero_NTA_2x._CB545056695_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/jup3/399_3A_PC_Hero_3000x1200._CB545061107_.jpg" alt="Amazon-Banner" className="homeBannerImg" />
        
        </div>
        <div className="right_img_button" id="slideButton" onClick={() => handleScroll(1)}>
          <i className="fa-solid fa-angle-right"></i>
        </div>
        <div className="blur_img"></div>
      </div>
      <HomeOffers />


    </div>
  )
}

export default HomeBanner