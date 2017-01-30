import React from 'react';

const amountStyle = {
  color: 'green'
};

const dateTimeStyle = {
  fontSize: '0.6em',
  margin: 10
};

const amountMatched = '12,000';

const timeEST = '11:00am';

const date = 'January 30, 2017';

const TotalMatchedComponent = () => (
  <div style={amountStyle}>
    <div>
      Over <strong style={ { fontSize: '1.5em' } }>${amountMatched}</strong> worth of donations <br />
      have been matched through this site, <br />
      all thanks to donors like you!
      <div style={dateTimeStyle}><strong>*as of {timeEST} EST on {date}</strong></div>
    </div>
  </div>
);

export default TotalMatchedComponent;