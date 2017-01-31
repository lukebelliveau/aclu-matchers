import React from 'react';
import Cloudwok from './Cloudwok';

const styles = {
  border: {
    borderRadius: 25,
    padding: 50,
    backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
    width: '70%',
    margin: '0 auto',
    height: 'auto',
    position: 'relative',
    color: 'white',
    align: 'float right'
  },
  link: {
    fontWeight: 'bold',
    paddingBottom: 10,
    position: 'relative'
  },
  a: {
    color: '#40B2F6',
    textDecoration: 'none'
  }  
}

const Instructions = () => (
  <div >

    <div style={ styles.border }>
      <div>
        <h1>Drag and drop your receipt below, and I will automatically tweet your receipt to at least ten matching donors.</h1>
      </div>
      <h2>This will multiply your donation by 10.</h2>
      <h2><strong>Absolutely no personal information is required.</strong></h2>
      <strong>Just make sure your screenshot shows your confirmation number and amount donated.</strong>
    </div>

    <Cloudwok />

    <h2>and if you haven't donated yet...</h2>
    <div style={ styles.link }>
      <h2>
        <a style={ styles.a } href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the <br /> American Civil Liberties Union</a>
      </h2>
    </div>
    <h2>...then drop your receipt on the blue box to multiply it!</h2>

  </div>
);

export default Instructions;
