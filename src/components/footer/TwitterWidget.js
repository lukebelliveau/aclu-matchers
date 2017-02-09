import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import {w100} from '../../styles/shared';

const twitterHandle = 'match__US';

const twitterFeed = {
  dataSource: {
    sourceType: 'profile',
    screenName: twitterHandle
  },
  options: Object.assign({}, w100, {
    username: twitterHandle,
    height: 300,
  }),
};

export default () => (
  <Timeline dataSource={twitterFeed.dataSource} options={twitterFeed.options} />
);
