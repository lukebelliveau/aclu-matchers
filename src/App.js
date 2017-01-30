import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import './App.css';
import Uploader from './Cloudwok';
import Header from './HeaderComponent';
import Instructions from './InstructionsComponent'
import Statement from './StatementComponent';

const twitterHandle = 'ACLU_Multiplier';

const amountStyle = {
  color: 'green'
};

const linkStyle = {
  fontWeight: 'bold',
  paddingTop: 10
};

const cloudwokStyle = {
  margin: 10,
  padding: 10
};

const dateTimeStyle = {
  fontSize: '0.6em',
  margin: 10
};

const wrapper = {
  width: '800',
  position: 'relative'
};

const appStyle = {
  width: '40%'
};

const amountMatched = '8,500';

const timeEST = '12:30am';

const date = 'January 30, 2017';

class App extends Component {
  render() {
    return (
      <div className={ wrapper }>
        <div className ={ appStyle } >
          <div className="App">

            <Instructions />
 
            <div style={amountStyle}>
              <div>
                Over <strong style={ { fontSize: '1.5em' } }>${amountMatched}</strong> worth of donations <br />
                have been matched through this site, <br />
                all thanks to donors like you!
                <div style={dateTimeStyle}><strong>*as of {timeEST} EST on {date}</strong></div>
              </div>
            </div>

            <Statement />

            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: twitterHandle
              }}
              options={{
                username: twitterHandle,
                height: '400',
                width: '70%',
              }}
            />
            </div>
        </div>
      </div>
    );
  }
}

export default App;