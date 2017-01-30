import React from 'react';
import Cloudwok from './Cloudwok';

const border = {
  borderRadius: 25,
  padding: 50,
  backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,

  width: '70%',
  margin: '0 auto',
  height: 'auto',
  position: 'relative',
  color: 'white',
  align: 'float right'
};

const wrapper = {
  width: '800',
  position: 'relative'
};

const instructions = {
  marginLeft: '30%'
};


const link = {
  fontWeight: 'bold',
  paddingBottom: 10,
  position: 'relative',
  color: 'white'
};

const cloudwokStyle = {
  position: 'relative',
  width: '90%'
};

const Instructions = () => (
  <div style={ wrapper }>

    <div style={ instructions }>

      <div style={ link }>
        <h2>
          <a href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the <br /> American Civil Liberties Union</a>
        </h2>
      </div>

      <div style={ border }>

        <div>
          <h1>Drag and drop a screenshot of your ACLU receipt onto the red button to multiply your donation by 10.</h1>
        </div>
        <strong>NOTE: Screenshots should show confirmation code and amount donated!</strong>
      </div>

      <Cloudwok />

    </div>
  </div>
);

export default Instructions;
