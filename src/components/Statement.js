import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {container, colors, font, text, whitespace} from '../styles/shared';

const s = StyleSheet.create({
  italic: font.style.italic,
  xlarge: text.size.xlarge,
  serif: font.family.serif,
  bgDarkBlue: colors.bgDarkBlue,
  offWhite: colors.white,
  p8: whitespace.paddings.p8,
  container,
  right: text.align.right,
  large: text.size.large,
  textShadow: text.shadow.one,
})

const Statement = () => (
  <div className={css(s.bgDarkBlue, s.offWhite, s.p8, s.textShadow)}>
    <div className={css(s.container)}>
      <blockquote className={css(s.italic, s.xlarge, s.serif)}>
        “‘Extreme vetting’ is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
      </blockquote>

      <p className={css(s.right, s.large)}>
        - Anthony D. Romero, Executive Director, American Civil Liberties Union
      </p>

      <p>
        The above is a statement from the Executive Director of the ACLU, a statement that I wholeheartedly agree with - and I'm not alone.
      </p>
      
      <p>
        People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.
      </p>
      
      <p>
        Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
      </p>
    </div>
  </div>
);

export default Statement;