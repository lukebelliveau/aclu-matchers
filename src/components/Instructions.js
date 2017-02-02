import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Cloudwok from './ACLUCloudwok';
import {font, background, whitespace, text, container} from '../styles/shared';

const styles = {
  container,
  textShadowTwo: text.shadow.one,
  cover: background.size.cover,
  mt0: whitespace.margins.mt0,
  pb8: whitespace.paddings.pb8,
  bold: font.weight.bold,
  hero: {
    padding: '2rem',
    backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
    color: '#fff',
  },
  a: {
    color: '#40B2F6',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: "column",
    height: '100%'
  },
  boxWrapper: {
    marginTop: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '20rem',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    margin: '0 2% 2% 2%',
    border: '2px solid black',
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    overflow: 'hidden'
  },
  step: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    height: '10%',
    backgroundColor: 'white',
  },
  boxContent: {
    width: '100%',
    wordWrap: 'normal',
    flex: 1,
    fontSize: '3em',
    color: 'white',
  },
  boxPadding: {
    flex: 1,
  },
  tcTitle: {
    fontWeight: 'bold',
    fontSize: '0.8rem'
  },
  tcBody: {
    fontSize: '0.7rem',
    fontWeight: 'lighter',
    width: '50%',
    margin: '0 auto'
  },
}

const bg = {
    backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center,' 
};

const cloudwokStretch = {  
  display: 'flex',  
  alignItems: 'stretch',
  flexDirection: 'column',
  position: 'relative'
};

const s = StyleSheet.create(styles)

const Instructions = () => (
  <div>
    <div className={ css(s.boxWrapper) }>
      <div style={ bg } className={ css(s.box) }>
        <div className={css(s.step)}>STEP 1</div>
        <a className={css(s.a)} href="https://action.aclu.org/secure/donate-to-aclu">
          <div className={css(s.boxPadding)}></div>
          <div className={css(s.boxContent)}>
            <div>Click to donate to the ACLU</div>
          </div>
          <div className={css(s.boxPadding)}></div>
        </a>
      </div>
      
      <div style={ bg } className={ css(s.box) }>
          <div className={css(s.step)}>STEP 2</div>
          <div style={ cloudwokStretch } className={css(s.boxContent)}>
            <div style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>Drop your receipt here</div>
            <div style={{ fontStyle: 'italic', fontSize: '1rem' }} >Or click to upload a file</div>
            <Cloudwok />
          </div>
      </div>

      <div style={ bg } className={ css(s.box) }>
          <div className={css(s.step)}>STEP 3</div>
          <div className={css(s.boxPadding)}></div>
          <div className={css(s.boxContent)}>
            <div>We'll tweet it to match it!</div>
          </div>
          <div className={css(s.boxPadding)}></div>
      </div>
    </div>

    <div>
      <div className={css(s.tcTitle)}>Terms of Service</div>
      <div className={css(s.tcBody)}>
        When you upload your receipt, I will tweet your receipt to at least ten matching donors. No personal information is required.
        Once something is uploaded, the process of tweeting to matchers is AUTOMATIC, and I cannot guarantee that I can prevent an accidental
        submission from being shared on the public internet.
      </div>
    </div>
  </div>
);


export default Instructions;
