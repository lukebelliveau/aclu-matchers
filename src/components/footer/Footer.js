import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import TwitterWidget from './TwitterWidget';

const styles = StyleSheet.create({
  footer: {
    maxWidth: '1024px',
    padding: '2rem 50px',
    margin: '0 auto',
    display: 'flex',
    '@media (max-width: 740px)': {
      flexDirection: 'column-reverse',
      padding: '2rem',
     }
  },
  a: {
    textDecoration: 'none',
    textAlign: 'left',
  },
  about: {
    display: 'inline-block',
    fontSize: '1.3rem',
    marginRight: '0.5rem',
    marginBottom: '1rem'
  },
  logo: {
    display: 'inline-block',
    width: '60%',
    maxWidth: '350px',
    '@media (max-width: 740px)': {
      margin: '2rem 0',
     }
  },
  footerDiv: {
    flexBasis: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    display: 'inline-flex',
    fontFamily: 'heading_regular',
    color: '#33373A',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 740px)': {
      flexBasis: '100%'
     }
  },
  footerContainer: {
    background: '#ebebeb'
  },
  p: {
    margin: '5px 0',
    fontSize: '14px'
  },
  footerText: {
    marginRight: '1.5rem'
  }
});

const about = 'footer-about';
const terms = 'footer-terms';
const nonHoveredLinkStyle = {color: '#33373A'};

const highlightOnHover = (el) => () => {
  document.getElementById(el).style.color = '#0B0C0E';
};

const removeHighlight = (el) => () => {
  document.getElementById(el).style.color = '#33373A';
};

export default () => (
  <div className={css(styles.footerContainer)}>
    <div className={css(styles.footer)}>
        <div className={css(styles.a, styles.footerDiv)}>
          <img className={css(styles.logo)} alt='matchus logo' src='./logo_light.png' />
          <div className={css(styles.footerText)}>
            <div className={css(styles.about)}>
              <a id={about} onMouseEnter={highlightOnHover(about)} onMouseLeave={removeHighlight(about)} style={nonHoveredLinkStyle} className={css(styles.a)} href='https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing' target="_blank">ABOUT</a> 
              &nbsp;|&nbsp;
              <a id={terms} onMouseEnter={highlightOnHover(terms)} onMouseLeave={removeHighlight(terms)} style={nonHoveredLinkStyle}className={css(styles.a)} href='https://docs.google.com/document/d/18KrZy3fdWqxEWZ5AW-jzdwUj6tujxtQS9Q7USAIWHYA/edit?usp=sharing' target="_blank">TERMS OF SERVICE</a>
            </div>
            <p className={css(styles.p)}>Copyright © 2017 matchUS. All right reserved.</p>
            <p className={css(styles.p)}>All specifications are subject to change without notice.</p>
            <p className={css(styles.p)}>matchUS is not affiliated with the American Civil Liberties Union.</p>
          </div>
        </div>
        <div className={'twitter-feed ' + css(styles.footerDiv)}>
          <TwitterWidget />
        </div>
    </div>
  </div>
);
