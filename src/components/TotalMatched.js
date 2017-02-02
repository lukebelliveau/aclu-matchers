import React from 'react';

const amountStyle = {
  color: 'white',
  background: '#095D96',
  padding: '50px'
};

const dateTimeStyle = {
  fontSize: '0.9em',
  margin: 10
};

const amountMatched = '370,000';
const timeEST = '6:00pm';
const date = 'January 31, 2017';

const TotalMatched = () => (
  <div style={ amountStyle }>
    <div>
      <strong style={ { fontSize: '2em', color: '#FAB022' } }>
        <i className="fa fa-usd"></i>{ amountMatched }
      </strong><br />
      worth of donations matches have been shared through this site, all thanks to donors like you!
        <div style={ dateTimeStyle }>
          <strong>*as of { timeEST } EST on { date }</strong>
      </div>
    </div>
  </div>
);

export default TotalMatched;
