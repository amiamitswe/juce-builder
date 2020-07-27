import React from 'react';
import '../../assets/font-awesome/css/fontawesome-all.min.css';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="container">
      <div className={[classes.footer, 'd-flex'].join(' ')}>
        <p className={classes.footer_copy}>
          Copy &copy; by{' '}
          <a href="https://web.facebook.com/amit.s.abir/">Amit Samadder</a>
        </p>
        <p className={classes.footer_text}>
          Uses Create react app <i className="fab fa-react" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
