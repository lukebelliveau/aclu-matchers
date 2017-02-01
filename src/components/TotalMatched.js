import React from 'react';
import {colors} from '../styles/shared';

const amountStyle = {
  color: colors.green.color,
  fontSize: '2.5rem',
  lineHeight: '1.2'
};

const dateTimeStyle = {
  fontSize: '0.6rem',
  fontStyle: 'italic',
  fontFamily: '"Open Sans", Calibri, Arial, sans-serif',
  marginTop: '0.5rem'
};

const textStyle = {
  fontSize: '0.8rem'
};

const amountMatched = '360,000';
const timeEST = '2:00pm';
const date = 'January 31, 2017';

const TotalMatched = () => (
  <div>
    <div style={ textStyle }>
    <span style={ amountStyle }>${ amountMatched }</span><br/>
      Donations matched, thanks to donors like you!
      <div style={ dateTimeStyle }>*as of { timeEST } EST on { date }</div>
    </div>
  </div>
);

export default TotalMatched;
