/* eslint-disable */
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  _t as _t3,
  _E as _E10,
  _$ as _$1,
  _l as _l22
} from 'rease';

import type { TypeReaseSubject } from 'rease'

import Fraction from 'fraction.js'

export function createTitle(title: string): void {
    _E10("h2")(
    _t3(title)
  )

}

function fixFraction(n: number): number {
  const fraction = n.toString().split('.')[1] || ''
  if (fraction.length > 7) {
    const match = fraction.match(/[09]{2,}\d$/)
    if (match) n = fixFraction(+n.toFixed(match.index! + match[0].length - 1))
  }
  return n
}

let globalId = ''

import { num2obj } from './num2obj'
function fraction2string(f: Fraction): string {
  let frac = f.toString().split('.')[1] || ''
  if (frac) frac = '.' + frac

  const obj = num2obj(fixFraction(f.n / f.d))
  frac = (obj.i || '0') + frac

  if (f.s < 0) frac = '-' + frac
  return frac
}

export function createInput(
  label: string, short: string, $value: TypeReaseSubject<Fraction>,
  fromBase: (n: Fraction) => Fraction,
  toBase: (n: Fraction) => Fraction
): void {
  let value!: Fraction
  let number!: number
  const id = 'i' + (Number.EPSILON * 1e15 + Math.random()).toString(36).slice(2)
  ;(
      _E10("div", { class: "form-floating my-2" })(
    _E10("input", { id: id, type: "text", inputmode: "text", class: "form-control", style: "padding-top:2rem;", placeholder: 1, value: /*r2.$*/_$1([$value], (_$0) => (value = fromBase(_$0[0]),
          globalId === id ? number : fraction2string(value))) }, [_l22('input', function(e: any) {
          globalId = id
          $value.set(toBase(value = new Fraction(number = +e.target.value || 0)))
        }), _l22('focus', function(e: any) {
          // e.target.type = 'number'
          e.target.inputmode = 'number'
          e.target.value = +value
        }), _l22('blur', function(e: any) {
          globalId = ''
          // e.target.type = 'text'
          e.target.inputmode = 'text'
          e.target.value = fraction2string(value)
        })])(),
    _E10("label", { for: id, style: "font-size:0.9em" })(
      _t3(label),
      _E10("span", { class: "text-success fw-bold" })(
        _t3(" "),
        _t3(short)
      )
    )
  )

  )
}
