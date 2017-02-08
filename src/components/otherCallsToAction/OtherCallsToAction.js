import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import DonateToACLU from './DonateToACLU';
import SpreadTheWord from './SpreadTheWord';

const styles = StyleSheet.create({
    buttonsWrapper: {
        marginTop: '2rem',
        marginBottom: '0rem',
        '@media (min-width: 740px)': {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '4rem',
        },
    },
    callToAction: {
        margin: '0 auto',
        marginTop: '2rem',
        maxWidth: '90%',
    },
    lightAMatch: {
        height: '1.5rem',
        paddingTop: '0.5rem'
    }
});

export default () => (
    <div>
        <div className={css(styles.buttonsWrapper)}>
            <DonateToACLU />
            <SpreadTheWord />
        </div>
        <div className={css(styles.callToAction)}>
            <div>You can make a big difference by encouraging others to use this site.</div>
            <div>Please help us spread this spark!</div>
            <img className={css(styles.lightAMatch)} alt="Light a match" src='./lightamatch_bold.png' />
        </div>
    </div>
);