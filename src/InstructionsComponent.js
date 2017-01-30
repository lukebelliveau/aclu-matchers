import React from 'react';

const border = {
  borderRadius: 25,
  // border: '2px solid black',
  padding: 50,
  backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
  //
  // leftMargin: '100px'

  width: '70%',
  margin: '0 auto',
  height: 'auto',
  position: 'relative',
  color: 'white'
};

const container = {
  width: '800',
  height: 'auto',
  margin: '0 auto;background-color: #ccc',
  padding: '10px',
  paddingLeft: '15%',
  paddingRight: '15%',
  position: 'relative'
};


const link = {
  fontWeight: 'bold',
  paddingTop: 10,
};

const Instructions = () => (
  <div style={ container }>

    <div style={ border }>


      <div>
        <h2>Drag and drop a screenshot of your ACLU donation receipt below to multiply your donation by 10.</h2>
      </div>
      <strong>NOTE: Screenshots should show confirmation code and amount donated!</strong>
    </div>

    <div style={ link }>
      <a href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the American Civil Liberties Union</a>
    </div>

  </div>
);

export default Instructions;
