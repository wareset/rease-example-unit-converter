import type { IRNodeElement, ReaseSubject } from 'rease'
import { render, hash, $ } from 'rease'

import Fraction from 'fraction.js'

import { WEIGHT_SCHEMA } from './weight'

function fixFraction(n: number): number {
  const fraction = n.toString().split('.')[1] || ''
  if (fraction.length > 7) {
    const match = fraction.match(/[09]{2,}\d$/)
    if (match) n = fixFraction(+n.toFixed(match.index! + match[0].length - 1))
  }
  return n
}

let globalId = ''

import { num2obj } from './utils/num2obj'
function fraction2string(f: Fraction): string {
  let frac = f.toString().split('.')[1] || ''
  if (frac) frac = '.' + frac

  const obj = num2obj(fixFraction(f.n / f.d))
  frac = (obj.i || '0') + frac

  if (f.s < 0) frac = '-' + frac
  return frac
}

function input(
  label: string, short: string, $value: ReaseSubject<Fraction>,
  fromBase: (n: Fraction) => Fraction,
  toBase: (n: Fraction) => Fraction
): void {
  const id = hash()
  let value!: Fraction
  let number!: number

  return (
    <div class="form-floating my-2">
      <input
        id={id}
        type="text"
        inputmode="text"
        class="form-control"
        style="padding-top:2rem;"
        placeholder="1"
        value={$(() => (
          value = fromBase($value.$),
          '' + (globalId === id ? number : fraction2string(value))
        ))}
        r-on-input={function(e: any) {
          globalId = id
          $value.$ = toBase(value = new Fraction(number = +e.target.value || 0))
        }}
        r-on-focus={function(e: any) {
          // e.target.type = 'number'
          e.target.inputmode = 'number'
          e.target.value = +value
        }}
        r-on-blur={function(e: any) {
          globalId = ''
          // e.target.type = 'text'
          e.target.inputmode = 'text'
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

render(document.body, function() {
  return (
    <div class="container">
      {function(iam: IRNodeElement): void {
        for (let a = WEIGHT_SCHEMA, i = 0; i < a.length; i++) {
          switch (a[i].type) {
            case 'title':
              iam.append(<h2>{a[i].data}</h2>)
              break
            case 'input':
              // eslint-disable-next-line prefer-spread
              iam.append(input.apply(void 0, a[i].data as any))
              break
            default:
          }
        }
      }}
    </div>
  )
})
