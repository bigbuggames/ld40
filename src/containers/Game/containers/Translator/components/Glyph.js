import React from 'react'
import propTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

// FIXME: Please kill me
import a from 'images/glyphs/a.png'
import b from 'images/glyphs/b.png'
import c from 'images/glyphs/c.png'
import d from 'images/glyphs/d.png'
import e from 'images/glyphs/e.png'
import f from 'images/glyphs/f.png'
import g from 'images/glyphs/g.png'
import h from 'images/glyphs/h.png'
import i from 'images/glyphs/i.png'
import j from 'images/glyphs/j.png'
import k from 'images/glyphs/k.png'
import l from 'images/glyphs/l.png'
import m from 'images/glyphs/m.png'
import n from 'images/glyphs/n.png'
import o from 'images/glyphs/o.png'
import p from 'images/glyphs/p.png'
import q from 'images/glyphs/q.png'
import r from 'images/glyphs/r.png'
import s from 'images/glyphs/s.png'
import t from 'images/glyphs/t.png'
import u from 'images/glyphs/u.png'
import v from 'images/glyphs/v.png'
import w from 'images/glyphs/w.png'
import x from 'images/glyphs/x.png'
import y from 'images/glyphs/y.png'
import z from 'images/glyphs/z.png'
import space from 'images/glyphs/space.png'

// FIXME: Please kill me
const letters = {
  a: a,
  b: b,
  c: c,
  d: d,
  e: e,
  f: f,
  g: g,
  h: h,
  i: i,
  j: j,
  k: k,
  l: l,
  m: m,
  n: n,
  o: o,
  p: p,
  q: q,
  r: r,
  s: s,
  t: t,
  u: u,
  v: v,
  w: w,
  x: x,
  y: y,
  z: z,
  space: space
}

// TODO: I don't know how to resize sprites :/
// import glyphs from 'images/glyphs.png'

/*
export default styled.img`
  border: 1px solid red;
  background-color: white;
  resize: both;
  max-width: 30px;
  height: 30px;
  background: ${(props) => `url('images/glyphs/${props.char}.png')`};
`
*/

export default class Glyph extends React.PureComponent {
  render() {
    return <img width='12px' src={letters[this.props.char]} />
  }
}

