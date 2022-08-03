import 'rease/jsx'
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
    <div class="form-floating my-2">
      <input type="number"
        id={id}
        class="form-control"
        style="padding-top:2rem;"
        placeholder={1}
        value={(globalId === id && value != null ? value : value = fixFraction(fromBase($value!!))) || 0}
        r-on-input={(e: any) => {
          globalId = id
          $value.set(toBase(value = +e.target.value || 0))
        }}
        r-on-blur={(e: any) => {
          if (globalId === id) {
            globalId = ''
            const cel = toBase(+e.target.value || 0)
            e.target.value = value = fixFraction(fromBase(cel))
            $value.set(cel)
          }
        }}
      />
      <label for={id}>
        {label}
        <span class="text-success fw-bold"> {short}</span>
      </label>
    </div>
  )
}
