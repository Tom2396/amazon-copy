import React from 'react'
import './HomeOffers.css'
import homeBannerItemProduct from '../../../homeProduct.json'

const HomeOffers = () => {
    return (
        
        <div className="boxs">

        <div className="box1">

          <div className="box boxIn2">
            <div>
              <h2>Keep shopping for</h2>
              <div>
                <a href="#">
                  <div>
                    <img src={require("../../../assets/box111.jpg")} alt="" />
                  </div>
                  <div>
                    <span>Taped diapers</span>
                    <br />
                   
                  </div>
                </a>
                <a href="#">
                  <div>
                    <img src={require("../../../assets/box112.jpg")} alt="" />
                  </div>
                  <div>
                    <span>Hi-fi & home audio speakers</span>
                    <br />
                    
                  </div>
                </a>
              </div>
              <a className="seeOffer" href="#">
                view your browsing history
              </a>
            </div>
          </div>
      
          <div className="box boxIn4">
            <div>
              <h2>Smart Phones that suit your budget</h2>
              <div>
                <div>
                  <a href="#">
                    <div>
                      <img src={require("../../../assets/box121.jpg")} alt="" />
                    </div>
                    <div>
                      <span>Budget | Under ₹10,000</span>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <div>
                      <img src={require("../../../assets/box121.jpg")} alt="" />
                    </div>
                    <div>
                      <span>Mid range | ₹10,000 - ₹25,000</span>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <a href="#">
                    <div>
                      <img src={require("../../../assets/box121.jpg")} alt="" />
                    </div>
                    <div>
                      <span>Premium | ₹25,000 - 40,000</span>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <div>
                      <img src={require("../../../assets/box121.jpg")} alt="" />
                    </div>
                    <div>
                      <span>Ultra Premium | Above ₹40,000</span>
                    </div>
                  </a>
                </div>
              </div>
              <a className="seeOffer" href="#">
                See all offers
              </a>
            </div>
          </div>
      
          <div className="box boxIn1">
            <div>
              <h2>Great Freedom sale</h2>
              <div>
                <a href="#">
                  <div>
                    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/Phase3/J24_GW_PC_CC_SAD_1x._SY304_CB545060597_.jpg' alt="" />
                  </div>
                </a>
              </div>
              <a className="seeOffer" href="#">
                See all
              </a>
            </div>
          </div>
      
          <div className="box boxButton hidden">
            <div>
              <div className="last-sign-in">
                <h2>Sign in for your best experience</h2>
                <button>Sign in securely</button>
              </div>
              <hr className="hr_color" />
              <div>
                <a href="#">
                  <div>
                    <img src={require("../../../assets/box141.jpg")} alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <br />


        {
          homeBannerItemProduct.product.map((item, index) => {
            return( 
            <div className="box boxIn4" key={index}>
              <div>
                <h2>{item.itemTitle}</h2>
                <div>
                  <div>
                    <a href="#">
                      <div>
                        <img src={item.imgs[0].url} alt="" />
                      </div>
                      <div>
                        <span>{item.imgs[0].imgTitle}</span>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img src={item.imgs[1].url} alt="" />
                      </div>
                      <div>
                        <span>{item.imgs[1].imgTitle}</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <a href="#">
                      <div>
                        <img src={item.imgs[2].url} alt="" />
                      </div>
                      <div>
                        <span>{item.imgs[2].imgTitle}</span>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <div>
                        <img src={item.imgs[3].url} alt="" />
                      </div>
                      <div>
                        <span>{item.imgs[3].imgTitle}</span>
                      </div>
                    </a>
                  </div>
                </div>
                <a className="seeOffer" href="#">
                  See all offers
                </a>
              </div>
              <br />
             </div>)
          })

        }
         
         



          

        </div>
      </div>
      
    )
}

export default HomeOffers