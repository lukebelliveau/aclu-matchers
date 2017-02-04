import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = {
    twitterShare: {
        color: 'white',
        textDecoration: 'none',
        borderRadius: '7px',
        padding: '10px 30px',
        background: '#ff8a00',
        fontSize: '22px',
        '@media (max-width: 425px)': {
            margin: '10px 15px',
            width: 'auto'
        },
        width: '35%',
        display: 'block',
        margin: '0 auto',
        fontFamily: 'open_sansregular',
        fontWeight: '500'
    },
    instructions: {
        margin: '0 auto',
        marginTop: '15px',
        maxWidth: '90%',
    },
    icon: {
        width: '40px',
        height: '40px',
        margin: '0 10px 0 0',
        padding: '0',
        display: 'inline-block',
        verticalAlign: 'middle'
    },
    caption: {
        display: 'inline-block',
        verticalAlign: 'middle',
    }
};

const style = StyleSheet.create(styles)

const twitterMessage = 'www.matchUS.us just helped my donation catch fire. Drag, drop and multiply your contribution, too! #lightamatch #aclumatch #NoBanNoWall';

const TwitterShare = () => {
    return (
        <div>
            <a className={ css(style.twitterShare )} href={`https://twitter.com/intent/tweet?text=${twitterMessage}`}>
                <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
                <div className={ css(style.caption) }>Spread the fire on Twitter!</div>
            </a>
            <div className={ css(style.instructions) }>
                You can make a big difference by sharing and encouraging others to use this site. Please help us spread the word!
            </div>
        </div>
    );
};

export default TwitterShare;