import 'rease/jsx'
import type { TypeReaseSubject } from 'rease'

import Fraction from 'fraction.js'

export const createTitle = (title: string): void => {
  <h2>{title}</h2>
}

const fixFraction = (n: number): number => {
  const fraction = n.toString().split('.')[1] || ''
  if (fraction.length > 7) {
    const match = fraction.match(/[09]{2,}\d$/)
    if (match) n = fixFraction(+n.toFixed(match.index! + match[0].length - 1))
  }
  return n
}

let globalId = ''

import { num2obj } from './num2obj'
const fraction2string = (f: Fraction): string => {
  let frac = f.toString().split('.')[1] || ''
  if (frac) frac = '.' + frac

  const obj = num2obj(fixFraction(f.n / f.d))
  frac = (obj.i || '0') + frac

  if (f.s < 0) frac = '-' + frac
  return frac
}

export const createInput = (
  label: string, short: string, $value: TypeReaseSubject<Fraction>,
  fromBase: (n: Fraction) => Fraction,
  toBase: (n: Fraction) => Fraction
): void => {
  let value!: Fraction
  let number!: number
  const id = 'i' + (Number.EPSILON * 1e15 + Math.random()).toString(36).slice(2)
  ;(
    <div class="form-floating my-2">
      <input type="text"
        id={id}
        class="form-control"
        style="padding-top:2rem;"
        placeholder={1}
        value={(
          value = fromBase($value!!),
          globalId === id ? number : fraction2string(value)
        )}
        r-on-input={(e: any) => {
          globalId = id
          $value.set(toBase(value = new Fraction(number = +e.target.value || 0)))
        }}
        r-on-focus={(e: any) => {
          e.target.type = 'number'
          e.target.value = +value
        }}
        r-on-blur={(e: any) => {
          globalId = ''
          e.target.type = 'text'
          e.target.value = fraction2string(value)
        }}
      />
      <label for={id} style="font-size:0.9em">
        {label}
        <span class="text-success fw-bold"> {short}</span>
      </label>
    </div>
  )
}
