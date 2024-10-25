import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import logoImg from "../assets/images/Logo1.png";
import '../css/InfoBar.css' // Assuming you'll add custom styles here

const InfoBar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center info-bar-container m-auto c-width-1">
      {/* Logo Section */}
      <div>
        <img src={logoImg} alt="Logo" style={{ width: '10vw' }} />
      </div>

      {/* Call Us Section */}
      <div className="d-flex align-items-center">
        <div className='icon-box'>
            <FaPhoneAlt size={20} className="icon" />
        </div>
        <div className="ms-2">
          <p className="mb-0">CALL US NOW :</p>
          <p className="mb-0">0321 4994240</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="d-flex align-items-center">
        <div className="icon-box">
            <FaEnvelope size={20} className="icon" />
        </div>
        <div className="ms-2">
          <p className="mb-0">MAILING ADDRESS :</p>
          <p className="mb-0">drzacheema@gmail.com</p>
        </div>
      </div>

      {/* Working Hours Section */}
      <div className="d-flex align-items-center">
        <div className="icon-box">
            <FaClock size={20} className="icon" />
        </div>
        <div className="ms-2">
          <p className="mb-0">Monday - Friday :</p>
          <p className="mb-0">10:30 – 14:00 ⟷ 17:00 – 18:45</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
