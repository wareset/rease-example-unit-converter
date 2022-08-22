import Fraction from 'fraction.js'

// https://ru.wikipedia.org/wiki/%D0%95%D0%B4%D0%B8%D0%BD%D0%B8%D1%86%D1%8B_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B

// Градус Фаренгейта (℉)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A4%D0%B0%D1%80%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D1%82%D0%B0
export const фаренгейт2цельсий = (n: Fraction): Fraction => {
  // const res = 5 * (n - 32) / 9
  const res = n.clone().sub(32).mul(5).div(9)
  return res
}
export const цельсий2фаренгейт = (n: Fraction): Fraction => {
  // const res = 9 / 5 * n + 32
  const res = new Fraction(9).div(5).mul(n).add(32)
  return res
}

// Кельвин (K) [1]
// https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BB%D1%8C%D0%B2%D0%B8%D0%BD
export const кельвин2цельсий = (n: Fraction): Fraction => {
  // const res = (n * 100 - 27315) / 100
  const res = n.clone().sub(273.15)
  return res
}
export const цельсий2кельвин = (n: Fraction): Fraction => {
  // const res = (n * 100 + 27315) / 100
  const res = n.clone().add(273.15)
  return res
}

// Градус Ранкина (°Ra)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D0%B0%D0%BD%D0%BA%D0%B8%D0%BD%D0%B0
export const ранкин2цельсий = (n: Fraction): Fraction => {
  // const res = (n * 1000 / 18 - 27315) / 100
  // const res = n * 10 / 18 - 273.15
  const res = n.clone().mul(10).div(18).sub(273.15)
  return res
}
export const цельсий2ранкин = (n: Fraction): Fraction => {
  // const res = (n * 100 + 27315) * 18 / 1000
  // const res = (n + 273.15) * 18 / 10
  const res = n.clone().add(273.15).mul(18).div(10)
  return res
}

// Градус Делиля (°Д или °D)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%94%D0%B5%D0%BB%D0%B8%D0%BB%D1%8F
export const делиль2цельсий = (n: Fraction): Fraction => {
  // const res = 100 - n * (2 / 3)
  const res = new Fraction(100).sub(n.clone().mul(2).div(3))
  return res
}
export const цельсий2делиль = (n: Fraction): Fraction => {
  // const res = (100 - n) * (3 / 2)
  const res = new Fraction(100).sub(n).mul(1.5)
  return res
}

// Градус Ньютона (°N)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%9D%D1%8C%D1%8E%D1%82%D0%BE%D0%BD%D0%B0
export const ньютон2цельсий = (n: Fraction): Fraction => {
  // const res = 100 * n / 33
  const res = new Fraction(100).mul(n).div(33)
  return res
}
export const цельсий2ньютон = (n: Fraction): Fraction => {
  // const res = 33 * n / 100
  const res = new Fraction(33).mul(n).div(100)
  return res
}

// Градус Реомюра (°Ré, °Re, °R)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D0%B5%D0%BE%D0%BC%D1%8E%D1%80%D0%B0
export const реомюр2цельсий = (n: Fraction): Fraction => {
  // const res = n * 100 / 80
  const res = n.div(0.8)
  return res
}
export const цельсий2реомюр = (n: Fraction): Fraction => {
  // const res = n * 80 / 100
  const res = n.mul(0.8)
  return res
}

// Градус Рёмера (°Rø)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D1%91%D0%BC%D0%B5%D1%80%D0%B0
export const рёмер2цельсий = (n: Fraction): Fraction => {
  // const res = 40 * (n - 7.5) / 21
  const res = n.clone().sub(7.5).mul(40).div(21)
  return res
}
export const цельсий2рёмер = (n: Fraction): Fraction => {
  // const res = 21 / 40 * n + 7.5
  const res = new Fraction(21).div(40).mul(n).add(7.5)
  return res
}

// Градус Гука (°H)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%93%D1%83%D0%BA%D0%B0
export const гук2цельсий = (n: Fraction): Fraction => {
  // const res = 12 / 5 * n
  const res = new Fraction(12).div(5).mul(n)
  return res
}
export const цельсий2гук = (n: Fraction): Fraction => {
  // const res = 5 * n / 12
  const res = new Fraction(5).mul(n).div(12)
  return res
}

// Градус Дальтона (°Dа)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%94%D0%B0%D0%BB%D1%8C%D1%82%D0%BE%D0%BD%D0%B0
// export const convertDalton2Celsius = (n: number): number => {
//   console.log(n)
//   return n
// }
// export const convertCelsius2Dalton = (n: number): number => {
//   console.log(n)
//   return n
// }

// Лейденский градус (°L или ÐL)
// https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B9%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81
export const лейден2цельсий = (n: Fraction): Fraction => {
  // const res = n - 253
  const res = n.clone().sub(253)
  return res
}
export const цельсий2лейден = (n: Fraction): Fraction => {
  // const res = n + 253
  const res = n.clone().add(253)
  return res
}

// Планковская температура (TP)
// https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D0%B0
// export const convertCelsius2Plank = (n: number): number => {
//   console.log(n)
//   return n
// }
// export const convertPlank2Celsius = (n: number): number => {
//   console.log(n)
//   return n
// }
