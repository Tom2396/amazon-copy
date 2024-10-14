import React from 'react';
import './navbarBelt.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavbarBelt = () => {
  return (
    <div className='navbarBelt'>

      <div className='leftNavBelt'>

        <div className='leftNavBeltLogo'>
          <img className='amazonLogoNavbar' src={require('../../../assets/logo.png')} alt='amazonLogo' />
          <span className='navbar_inLogo'>.in</span>
        </div>

        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
            <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' fontSize={"medium"} />
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBeltLocationTop'> Delivering to Kolkata 700088 </div>
            <div className='navbarBeltLocationBottom'> Update Location </div>
          </div>
        </div>

      </div>

      <div className='navbarBeltSearchBox'>

        <div className='navbarBeltSearchDiv'>

          <div className='navbarBeltSearchBoxAll'>

            <div className='navbarBeltSearchBoxAllText'>All</div>
            <ArrowDropDownOutlinedIcon sx={{fontSize:"24px"}} />
          </div>

          <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />

          <div className='searchIconNavbarBelt'>
            <SearchIcon sx={{fontSize:"24px"}} className='searchIconNavbarBeltIcon'/>
          </div>

        </div>
      </div>

      <div className='rightSideNavbarBelt'>

          <div className='indianFlagCode'>

            <img src={require('../../../assets/flag.png')} className='indianFlag' alt='In'/>
            <div className='indiaCodeNavbarBelt'>EN <ArrowDropDownOutlinedIcon sx={{fontSize:"16px"}} className='indiaCodeNavbarBeltDrp'/></div>
          
          </div>

          <div className='helloSignInNavbarBelt'>
            <div className='helloTopNavbarBelt'>Hello, User</div>
            <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
          </div>

          <div className='helloSignInNavbarBelt'>
            <div className='helloTopNavbarBelt'>Returns</div>
            <div className='indiaCodeNavbarBelt'>& Orders</div>
          </div>

          <div className='cartSection'>
            <div className='cartIconContainer'>
              <ShoppingCartOutlinedIcon className='cartIcon' />
              <span className='cartItemNumberNavbarBelt'>0</span>
            </div>
            <span className='cartTitle'>Cart</span>
          </div>
      </div>
    </div>
  )
}

export default NavbarBelt;
