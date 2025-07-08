import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className='header-bg'>
      <img className='header-icon' src="https://res.cloudinary.com/dp6mcbgji/image/upload/v1751996540/5fc7ad2ded1767b08813a7b5_logo_ito29x.png" />
        <div className='header-profile-bg'>
            <Link to="/profile"><span className='header-profile-pic'>EH</span></Link>
            <p className='header-profile-name'>Ervin Howell</p>
        </div>
    </div>
  );
};

export default Header;
