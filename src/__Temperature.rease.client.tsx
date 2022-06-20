/* eslint-disable @typescript-eslint/explicit-function-return-type */
import 'rease/jsx'
import type { TypeReaseContext } from 'rease'
import { storeGlobal } from 'rease'

import {
  фаренгейт2цельсий, цельсий2фаренгейт,
  кельвин2цельсий, цельсий2кельвин,

  реомюр2цельсий, цельсий2реомюр,
  рёмер2цельсий, цельсий2рёмер,
  ранкин2цельсий, цельсий2ранкин,

  делиль2цельсий, цельсий2делиль,
  гук2цельсий, цельсий2гук,
  ньютон2цельсий, цельсий2ньютон,

  лейден2цельсий, цельсий2лейден
} from './utils/temperature'

import { createInput } from './utils/tsx.rease'

const $ЦЕЛЬСИЙ = storeGlobal<number>(33)

export function Temperature(
  this: TypeReaseContext
): void {
  createInput(
    'Градус Цельсия', '(℃)', $ЦЕЛЬСИЙ, (n) => n, (n) => n
  )
  createInput(
    'Градус Фаренгейта', '(℉)', $ЦЕЛЬСИЙ, цельсий2фаренгейт, фаренгейт2цельсий
  )
  createInput(
    'Кельвин', '(K)', $ЦЕЛЬСИЙ, цельсий2кельвин, кельвин2цельсий
  )

  createInput(
    'Градус Реомюра', '(°Ré, °Re, °R)', $ЦЕЛЬСИЙ, цельсий2реомюр, реомюр2цельсий
  )
  createInput(
    'Градус Рёмера', '(°Rø)', $ЦЕЛЬСИЙ, цельсий2рёмер, рёмер2цельсий
  )
  createInput(
    'Градус Ранкина', '(°Ra)', $ЦЕЛЬСИЙ, цельсий2ранкин, ранкин2цельсий
  )

  createInput(
    'Градус Делиля', '(°Д или °D)', $ЦЕЛЬСИЙ, цельсий2делиль, делиль2цельсий
  )
  createInput(
    'Градус Гука', '(°H)', $ЦЕЛЬСИЙ, цельсий2гук, гук2цельсий
  )
  /* {createInput('Градус Дальтона (°Dа)', '°Dа')} */
  createInput(
    'Градус Ньютона', '(°N)', $ЦЕЛЬСИЙ, цельсий2ньютон, ньютон2цельсий
  )

  createInput(
    'Лейденский градус', '(°L или ÐL)', $ЦЕЛЬСИЙ, цельсий2лейден, лейден2цельсий
  )
}

// import {
//   convertGuk2Celsius as toCelsius,
//   convertCelsius2Guk as fromCelsius
// } from './utils/temperature'

// console.log(300, fromCelsius(300), toCelsius(fromCelsius(300)))
// console.log(290, fromCelsius(290), toCelsius(fromCelsius(290)))
// console.log(220, fromCelsius(220), toCelsius(fromCelsius(220)))
// console.log(110, fromCelsius(110), toCelsius(fromCelsius(110)))
// console.log(30, fromCelsius(30), toCelsius(fromCelsius(30)))
// console.log(0, fromCelsius(0), toCelsius(fromCelsius(0)))
// console.log(-40, fromCelsius(-40), toCelsius(fromCelsius(-40)))
// console.log(-50, fromCelsius(-50), toCelsius(fromCelsius(-50)))
// console.log(-60, fromCelsius(-60), toCelsius(fromCelsius(-60)))
// console.log(-273.15, fromCelsius(-273.15), toCelsius(fromCelsius(-273.15)))