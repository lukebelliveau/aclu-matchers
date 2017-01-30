import React, { Component } from 'react';

import './App.css';

import { Timeline } from 'react-twitter-widgets';
import CloudwokComponent from './CloudwokComponent';

const twitterHandle = 'ACLU_Multiplier';

const bodyStyle = {
  align: 'float left',
  padding: '25px',
  borderTopStyle: 'solid'
};

const signatureStyle = {
  fontSize: '0.8em'
};

const amountStyle = {
  color: 'green',
};

const linkStyle = {
  fontWeight: 'bold',
  paddingTop: '10'
};

const cloudwokStyle = {
  margin: '10',
  borderStyle: 'dotted',
  borderColor: 'green',
  padding: '10'
};

const amountMatched = '7,000';

const timeEST = '12:00am';

const date = 'January 30, 2017';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>ACLU Donation Multiplier</h2>
        </div>

        <div style={linkStyle}>
          <a style={linkStyle} href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the American Civil Liberties Union</a>
        </div>

        <div>
          <p>Drag and drop a screenshot of your ACLU donation receipt below to multiply your donation by 10.</p>
        </div>
        <strong>NOTE: Screenshots should show confirmation code and amount donated!</strong>

        <div style={cloudwokStyle}>
          <CloudwokComponent />
        </div>

        <div style={amountStyle}>
          <p>
            <strong>${amountMatched}</strong> matched as of {timeEST} EST, {date}
          </p>
        </div>

        <div style={bodyStyle}>
          <i>
            “‘Extreme vetting’ is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
          </i>

          <p style={signatureStyle}>
            - Anthony D. Romero, Executive Director, American Civil Liberties Union
          </p>
          <p>
            The above is a statement from the Executive Director of the ACLU, a statement that I wholeheartedly agree with - and I'm not alone.
            <br/>
            <br />
            People around the nation have volunteered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.
            <br/>
            <br />
            Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
          </p>
          <p>

          </p>
        </div>

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterHandle
          }}
          options={{
            username: twitterHandle,
            height: '400',
            width: '300'
          }}
        />
      </div>
    );
  }
}

export default App;