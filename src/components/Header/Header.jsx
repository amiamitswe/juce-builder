import React from 'react';
import logo from '../../assets/images/favicon/favicon.png';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className="container">
      <div className={[classes.header, 'd-flex'].join(' ')}>
        <div className={classes.header_logo}>
          <img src={logo} className="img-res" alt="Logo" />
        </div>
        <div
          className={[
            classes.header_user_wrap,
            'd-flex',
            'flex-align-center',
          ].join(' ')}
        >
          <div className={classes.header_user}>U</div>
          <span>Amit</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
