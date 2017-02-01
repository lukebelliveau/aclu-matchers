import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Cloudwok from './Cloudwok';
import {background, whitespace} from '../styles/shared';

const styles = {
  container: {
    maxWidth: '1024px', 
    margin: '0 auto',
  },
  hero: {
    padding: '2rem',
    backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
    color: '#fff',
    textShadow: '2px 2px 1px #000',
  },
  link: {
    fontWeight: 'bold',
  },
  a: {
    color: '#40B2F6',
    textDecoration: 'none'
  },
  cover: background.size.cover,
  mt0: whitespace.margins.mt0,
}

const s = StyleSheet.create(styles)

const Instructions = () => (
  <div>
    <div className={css(s.hero, s.cover)}>
      <div className={css(s.container)}>
        <h2 className={css(s.mt0)}>Drag and drop your receipt below, and I will automatically tweet your receipt to at least ten matching donors.</h2>
        <h3>This will multiply your donation by 10.</h3>
        <h3><strong>Absolutely no personal information is required.</strong></h3>
        <p>Just make sure your screenshot shows your confirmation number and amount donated.</p>
      </div>      
    </div>
    
    <Cloudwok />

    <h2>and if you haven't donated yet...</h2>
    <div className={css(s.link)}>
      <h2>
        <a className={css(s.a)} href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the <br /> American Civil Liberties Union</a>
      </h2>
    </div>
    <h2>...then drop your receipt on the blue box to multiply it!</h2>

  </div>
);

export default Instructions;
