import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import DonateToACLU from './DonateToACLU';
import SpreadTheWord from './SpreadTheWord';

const s = StyleSheet.create({
    buttonsWrapper: {
        marginTop: '3.2rem',
        marginBottom: '0',
        '@media (min-width: 740px)': {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '6.4rem',
        },
    },
    callToAction: {
        fontSize: '1.6rem',
        margin: '0 auto',
        marginTop: '3.2rem',
        maxWidth: '90%',
    },
    lightAMatch: {
        height: '2.4rem',
        paddingTop: '.8rem'
    }
});

export default () => (
    <div>
        <div className={css(s.buttonsWrapper)}>
            <DonateToACLU />
            <SpreadTheWord />
        </div>
        <div className={css(s.callToAction)}>
            <div>You can make a big difference by encouraging others to use this site.</div>
            <div>Please help us spread this spark!</div>
            <img className={css(s.lightAMatch)} alt="Light a match" src='./lightamatch_bold.png' />
        </div>
    </div>
);