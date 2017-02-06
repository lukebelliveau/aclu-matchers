import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const twitterHandle = 'match__US';

const twitterFeed = {
  dataSource: {
    sourceType: 'profile',
    screenName: twitterHandle
  },
  options: {
    username: twitterHandle,
    height: 700,
    width: '70%'
  }
};

export default () => (
  <Timeline dataSource={twitterFeed.dataSource} options={twitterFeed.options} />
);
