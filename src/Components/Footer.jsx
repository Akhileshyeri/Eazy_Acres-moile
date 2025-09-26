import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from '../assets/images/home.png';

const Footer = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="bottom-navigation-bar">
      {/* Curved arc with plus icon and Sell/Rent */}
      <div className="bottom-navigation-bar">
        {/* Curved arc with plus icon */}
        <div className="arc-plus-container">
          <div className="arc-shape"></div>
          <div className="plus-icon-container">
            <div className="plus-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="sell-rent-container">
            <Link to="" className="sell-rent-link">
              Buy/Rent
            </Link>
          </div>
        </div>

        <div className="tf-container">
          <ul className="tf-navigation-bar">
            {/* Home */}
            <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <Link to="/" className={`nav-link ${isActive('/') ? 'fw_6' : 'fw_4'}`}>
                <img src={Home} alt="Home" className="nav-icon" />
                <span className="nav-label">Home</span>
              </Link>
            </li>

            {/* History */}
            <li className={`nav-item ${isActive('/history') ? 'active' : ''}`}>
              <Link to="/login" className={`nav-link ${isActive('/history') ? 'fw_6' : 'fw_4'}`}>
                <i className="icon-history"></i>
                <span className="nav-label">History</span>
              </Link>
            </li>

            {/* Spacer for plus button */}
            <li className="nav-spacer"></li>

            {/* Leads */}
            <li className={`nav-item ${isActive('/leads') ? 'active' : ''}`}>
              <Link to="" className={`nav-link ${isActive('/leads') ? 'fw_6' : 'fw_4'}`}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="nav-icon"
                >
                  <circle cx="12.25" cy="12" r="9.5" stroke="#717171" />
                  <path
                    d="M17.033 11.5318C17.2298 11.3316 17.2993 11.0377 17.2144 10.7646C17.1293 10.4914 16.9076 10.2964 16.6353 10.255L14.214 9.88781C14.1109 9.87213 14.0218 9.80462 13.9758 9.70702L12.8933 7.41717C12.7717 7.15989 12.525 7 12.2501 7C11.9754 7 11.7287 7.15989 11.6071 7.41717L10.5244 9.70723C10.4784 9.80483 10.3891 9.87234 10.286 9.88802L7.86469 10.2552C7.59257 10.2964 7.3707 10.4916 7.2856 10.7648C7.2007 11.038 7.27018 11.3318 7.46702 11.532L9.2189 13.3144C9.29359 13.3905 9.32783 13.5 9.31021 13.607L8.89692 16.1239C8.86027 16.3454 8.91594 16.5609 9.0533 16.7308C9.26676 16.9956 9.6394 17.0763 9.93735 16.9128L12.1027 15.7244C12.1932 15.6749 12.3072 15.6753 12.3975 15.7244L14.563 16.9128C14.6684 16.9707 14.7807 17 14.8966 17C15.1083 17 15.3089 16.9018 15.4469 16.7308C15.5845 16.5609 15.6399 16.345 15.6033 16.1239L15.1898 13.607C15.1722 13.4998 15.2064 13.3905 15.2811 13.3144L17.033 11.5318Z"
                    stroke="#717171"
                    strokeWidth="1.25"
                  />
                </svg>
                <span className="nav-label">Leads</span>
              </Link>
            </li>

            {/* Profile */}
            <li className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
              <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'fw_6' : 'fw_4'}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="nav-icon"
                >
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                    stroke="#717171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="nav-label">Profile</span>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx>{`
       .bottom-navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  /* remove unwanted padding that pushes it up */
  padding: 0;

  /* Prevent shifting on scroll */
  transform: translateZ(0);

  /* Handle safe area on iOS */
  padding-bottom: env(safe-area-inset-bottom);
}

        
        /* Curved arc with plus icon */
        .arc-plus-container {
          position: relative;
          height: 15px;
        }
        
        .arc-shape {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 35px;
          background: #ffffff;
          border-radius: 0 0 40px 40px;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1001;
        }
        
        .plus-icon-container {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1002;
        }
        
        .plus-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #ED2027 0%, #ED2027 100%);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 15px rgba(237, 32, 39, 0.4);
        }
        
        /* Sell/Rent styling */
        .sell-rent-container {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1003;
        }
        
        .sell-rent-link {
          text-decoration: none;
          color: #717171;
          font-size: 12px;
          font-weight: 400;
          white-space: nowrap;
          padding: 4px 12px;
          background: transparent;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .sell-rent-link:active {
          color: #2A2A2A;
          background: rgba(42, 42, 42, 0.1);
        }
        
        .tf-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
        }
        
        .tf-navigation-bar {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          list-style: none;
          margin: 0;
          padding: 8px 0 5px;
          position: relative;
          height: 60px;
        }
        
        .nav-item {
          flex: 1;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .nav-spacer {
          flex: 0 0 80px;
          visibility: hidden;
        }
        
        .nav-link {
          text-decoration: none;
          color: #717171;
          font-size: 12px;
          padding: 8px 4px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          min-height: 50px;
          width: 100%;
        }
        
        .nav-item.active .nav-link {
          color: #2A2A2A;
          font-weight: 600;
        }
        
        .nav-icon {
          width: 24px;
          height: 24px;
          margin-bottom: 2px;
        }
        
        .nav-label {
          font-size: 11px;
          line-height: 1.2;
          white-space: nowrap;
        }
        
        /* Active state styling */
        .nav-item.active .nav-icon path {
          stroke: #2A2A2A;
        }
        
        .nav-item.active .nav-icon circle {
          stroke: #2A2A2A;
        }
        
        /* Utility classes */
        .fw_6 { font-weight: 600; }
        .fw_4 { font-weight: 400; }
        
        /* Responsive adjustments */
        @media (max-width: 320px) {
          .nav-label {
            font-size: 10px;
          }
          
          .nav-link {
            padding: 6px 2px;
          }
        }
        
        @media (min-width: 414px) {
          .nav-link {
            padding: 8px 6px;
          }
          
          .nav-label {
            font-size: 12px;
          }
             .nav-item.active .nav-link {
          color: #ED2027; /* Red color for active */
        }

        .nav-item.active .nav-icon path,
        .nav-item.active .nav-icon circle {
          stroke: #ED2027; /* Icon stroke red */
        }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Footer;