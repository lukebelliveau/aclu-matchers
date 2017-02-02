import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Cloudwok from './ACLUCloudwok';
import {font, background, whitespace, text, container, colors} from '../styles/shared';

const styles = {
  container,
  cover: background.size.cover,
  mt0: whitespace.margins.mt0,
  bold: font.weight.bold,
  bgBlue: colors.bgBlue,
  hero: {
    padding: '50px',
    color: '#373e44',
    '@media (max-width: 425px)': {
      padding: '20px',
     }
  },
  li: {
    listStyle: 'none',
    fontSize: '22px',
    paddingBottom: '20px',
    fontWeight: 500,
    display: 'inline-block',
    width: '31%',
    margin: '1%',
    verticalAlign: 'top',
    '@media (max-width: 425px)': {
      width: '100%',
     }
  },
  logo: {
    fontSize: '60px',
    display: 'block',
    marginBottom: '10px'
  },
  ul: {
    padding: 0
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    borderRadius: '7px',
    padding: '15px 30px',
    background: '#ff8a00',
    fontSize: '22px',
    marginBottom: '15px',
    display: 'inline-block',
    '@media (max-width: 425px)': {
      margin: '10px 15px',
     }
  },
  strong: {
    marginTop: '10px',
    fontStyle: 'italic',
    fontWeight: 500
  }
}

const style = StyleSheet.create(styles)

const Instructions = () => (
  <div>
    <div className={css(style.hero, style.cover, style.bgBlue)}>
      <div className={css(style.container)}>
        <h2 className={css(style.mt0)}>How it works?</h2>
        <ul className={css(style.ul)}>
          <li className={css(style.li)}><i className={`fa fa-upload ${css(style.logo)}`}></i> Drag and drop your receipt below</li>
          <li className={css(style.li)}><i className={`fa fa-twitter ${css(style.logo)}`}></i> Your receipt will be tweeted to 10 donors</li>
          <li className={css(style.li)}><i className={`fa fa-usd ${css(style.logo)}`}></i> This will multiply your donation by 10</li>
        </ul>
        <strong className={css(style.strong)}>Absolutely no personal information is required.<br />Just make sure your receipt shows your confirmation number and amount donated.</strong>
      </div>
    </div>
    <Cloudwok />
    <h2>Haven't donated yet?</h2>
    <div className={css(style.bold)}>
      <h2>
        <a className={css(style.a)} href="https://action.aclu.org/secure/donate-to-aclu">Donate to the American Civil Liberties Union</a>
      </h2>
    </div>
  </div>
);

export default Instructions;
