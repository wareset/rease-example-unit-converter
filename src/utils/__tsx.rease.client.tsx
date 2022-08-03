/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  _t as _t3,
  _e as _e8,
  _$ as _$1,
  _ul as _ul21
} from 'rease';

import type { TypeReaseStore } from 'rease'

import { createRandomtring } from '.'

const fixFraction = (n: number): number => {
  const fraction = n.toString().split('.')[1]
  if (fraction) {
    const match = fraction.match(/[09]{2,}\d$/)
    if (match) n = +n.toFixed(match.index! + match[0].length - 1)
  }
  return n
}

let globalId = ''

export const createInput = (
  label: string, short: string, $value: TypeReaseStore<number>,
  fromBase: (n: number) => number,
  toBase: (n: number) => number
): void => {
  let value: number | null = null
  const id = createRandomtring()
  ;(
      _e8("div", { class: "form-floating my-2" })(
    _e8("input", { type: "number", id: id, class: "form-control", style: "padding-top:2rem;", placeholder: 1, value: /*r2.$*/_$1([$value], (_$0) => ((globalId === id && value != null ? value : value = fixFraction(fromBase(_$0[0]))) || 0)) }, [_ul21('input', (e: any) => {
          globalId = id
          $value.set(toBase(value = +e.target.value || 0))
        }), _ul21('blur', (e: any) => {
          if (globalId === id) {
            globalId = ''
            const cel = toBase(+e.target.value || 0)
            e.target.value = value = fromBase(cel)
            $value.set(cel)
          }
        })])(),
    _e8("label", { for: id })(
      _t3(label),
      _e8("span", { class: "text-success fw-bold" })(
        _t3(" "),
        _t3(short)
      )
    )
  )

  )
}
