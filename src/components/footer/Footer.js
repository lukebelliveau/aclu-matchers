import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import TwitterWidget from './TwitterWidget';
import {container, alignLeft, noDecoration, darkGray, headingRegular, flex, inlineBlock, vtop} from '../../styles/shared';

const s = StyleSheet.create({
  container,
  alignLeft,
  footer: Object.assign({}, flex, {
    padding: '3.2rem 50px',
    '@media (max-width: 740px)': {
      flexDirection: 'column-reverse',
      padding: '3.2rem',
     }
  }),
  a: Object.assign({}, noDecoration, alignLeft),
  footerLink: Object.assign({}, darkGray),
  about: Object.assign({}, inlineBlock, {
    fontSize: '2rem',
    marginRight: '.8rem',
    marginBottom: '1.6rem'
  }),
  logo: Object.assign({}, inlineBlock, {
    width: '60%',
    maxWidth: '350px',
    '@media (max-width: 740px)': {
      margin: '3.2rem 0',
     }
  }),
  footerDiv: Object.assign({}, darkGray, headingRegular, vtop, {
    flexBasis: '50%',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media (max-width: 740px)': {
      flexBasis: '100%'
     }
  }),
  footerContainer: {
    background: '#ebebeb'
  },
  p: {
    margin: '5px 0',
    fontSize: '14px'
  },
  footerText: {
    marginRight: '2.4rem'
  }
});

function addHighlight(e) {
  e.target.style.color = '#0B0C0E';
}

function removeHighlight(e){
  e.target.style.color = '';
}

export default () => (
  <div className={css(s.footerContainer)}>
    <div className={css(s.footer, s.container)}>
        <div className={css(s.alignLeft, s.footerDiv)}>
          <img className={css(s.logo)} alt='matchus logo' src='./logo_light.png' />
          <div className={css(s.footerText)}>
            <div className={css(s.about)}>
              <a onMouseEnter={addHighlight}
                 onMouseLeave={removeHighlight} 
                 className={css(s.a, s.footerLink)} 
                 href='https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing' target="_blank">
                 ABOUT
              </a> 
              &nbsp;|&nbsp;
              <a onMouseEnter={addHighlight}
                 onMouseLeave={removeHighlight} 
                 className={css(s.a, s.footerLink)} 
                 href='https://docs.google.com/document/d/18KrZy3fdWqxEWZ5AW-jzdwUj6tujxtQS9Q7USAIWHYA/edit?usp=sharing' target="_blank">
                 TERMS OF SERVICE
              </a>
            </div>
            <p className={css(s.p)}>Copyright © 2017 matchUS. All right reserved.</p>
            <p className={css(s.p)}>All specifications are subject to change without notice.</p>
            <p className={css(s.p)}>matchUS is not affiliated with the American Civil Liberties Union.</p>
          </div>
        </div>
        <div className={'twitter-feed ' + css(s.footerDiv)}>
          <TwitterWidget />
        </div>
    </div>
  </div>
);
