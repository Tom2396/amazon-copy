import React from 'react'
import './navbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
const NavbarBanner = () => {
  const options = [
    { "name": "Fresh" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Today's Deals" }, { "name": "Mobiles" }, { "name": "Electronics" }, { "name": "Prime" }, { "name": "Fashion" }, { "name": "Home & Kitchen" }
  ]
  return (
    <div className='navbarBanner'>

      <div className='navbarBannerOptionsLeft'>

        <div className='optionsNavberBanner'>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        {
          options.map((item, index) => {
            return (
              <div className='optionsNavberBanner' key={index}>
                <div className='allOptionsNavbarBanner'>{item.name}</div>
              </div>);
          })
        }

      </div>

      <div className='navbarBannerOptionsRight'>
        <img src="https://m.media-amazon.com/images/G/31/Events/img24/Jupiter24/Phase2/J24_P2_SWM_ShopNow._CB544503925_.jpg" alt='amazonPrime Logo' className='imgRight' />
      </div>
    </div>

  )
}

export default NavbarBanner