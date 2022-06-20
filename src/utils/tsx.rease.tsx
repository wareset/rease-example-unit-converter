import 'rease/jsx'
import type { ReaseStore } from 'rease'

import { createRandomtring } from '.'

let globalId = ''

export const createInput = (
  label: string, short: string, $value: ReaseStore<number> & number,
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
        value={(globalId === id && value != null ? value : value = fromBase($value!!)) || 0}
        r-on-input={(e: any) => {
          globalId = id
          $value.set(toBase(value = +e.target.value || 0))
        }}
        r-on-blur={(e: any) => {
          if (globalId === id) {
            globalId = ''
            const cel = toBase(+e.target.value || 0)
            e.target.value = value = fromBase(cel)
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
