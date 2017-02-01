import React from 'react';

const amountStyle = {
  color: 'green'
};

const dateTimeStyle = {
  fontSize: '0.6em',
  margin: 10
};

const amountMatched = '345,000';
const timeEST = '11:30pm';
const date = 'January 31, 2017';

const TotalMatched = () => (
  <div style={ amountStyle }>
    <div>
      Over <strong style={ { fontSize: '1.5em' } }>${ amountMatched }</strong> worth of donations <br />
      have been matched through this site, <br />
      all thanks to donors like you!
      <div style={ dateTimeStyle }><strong>*as of { timeEST } EST on { date }</strong></div>
    </div>
  </div>
);

export default TotalMatched;
