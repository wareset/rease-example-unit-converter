// https://ru.wikipedia.org/wiki/%D0%95%D0%B4%D0%B8%D0%BD%D0%B8%D1%86%D1%8B_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D1%82%D0%B5%D0%BC%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D1%83%D1%80%D1%8B

// const EPSILON = Number.EPSILON

// const { round, pow } = Math
// export const roundTo = (n: number, precision?: number): number =>
//   !precision
//     ? round(n)
//     : round((n + Number.EPSILON) * (precision = pow(10, precision))) / precision

// const toFixed = (n: number): number => n // roundTo(n, 5)

// Градус Фаренгейта (℉)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A4%D0%B0%D1%80%D0%B5%D0%BD%D0%B3%D0%B5%D0%B9%D1%82%D0%B0
export const фаренгейт2цельсий = (n: number): number => {
  const res = 5 * (n - 32) / 9
  return res
}
export const цельсий2фаренгейт = (n: number): number => {
  const res = 9 / 5 * n + 32
  return res
}

// Кельвин (K) [1]
// https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BB%D1%8C%D0%B2%D0%B8%D0%BD
export const кельвин2цельсий = (n: number): number => {
  const res = (n * 100 - 27315) / 100
  return res
}
export const цельсий2кельвин = (n: number): number => {
  const res = (n * 100 + 27315) / 100
  return res
}

// Градус Реомюра (°Ré, °Re, °R)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D0%B5%D0%BE%D0%BC%D1%8E%D1%80%D0%B0
export const реомюр2цельсий = (n: number): number => {
  const res = n * 100 / 80
  return res
}
export const цельсий2реомюр = (n: number): number => {
  const res = n * 80 / 100
  return res
}

// Градус Рёмера (°Rø)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D1%91%D0%BC%D0%B5%D1%80%D0%B0
export const рёмер2цельсий = (n: number): number => {
  const res = 40 * (n - 7.5) / 21
  return res
}
export const цельсий2рёмер = (n: number): number => {
  const res = 21 / 40 * n + 7.5
  return res
}

// Градус Ранкина (°Ra)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%A0%D0%B0%D0%BD%D0%BA%D0%B8%D0%BD%D0%B0
export const ранкин2цельсий = (n: number): number => {
  const res = (n * 1000 / 18 - 27315) / 100
  return res
}
export const цельсий2ранкин = (n: number): number => {
  const res = (n * 100 + 27315) * 18 / 1000
  return res
}

// Градус Делиля (°Д или °D)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%94%D0%B5%D0%BB%D0%B8%D0%BB%D1%8F
export const делиль2цельсий = (n: number): number => {
  const res = 100 - n * (2 / 3)
  return res
}
export const цельсий2делиль = (n: number): number => {
  const res = (100 - n) * (3 / 2)
  return res
}

// Градус Гука (°H)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%93%D1%83%D0%BA%D0%B0
export const гук2цельсий = (n: number): number => {
  const res = 12 / 5 * n
  return res
}
export const цельсий2гук = (n: number): number => {
  const res = 5 * n / 12
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

// Градус Ньютона (°N)
// https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81_%D0%9D%D1%8C%D1%8E%D1%82%D0%BE%D0%BD%D0%B0
export const ньютон2цельсий = (n: number): number => {
  const res = 100 * n / 33
  return res
}
export const цельсий2ньютон = (n: number): number => {
  const res = 33 * n / 100
  return res
}

// Лейденский градус (°L или ÐL)
// https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B9%D0%B4%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D1%80%D0%B0%D0%B4%D1%83%D1%81
export const лейден2цельсий = (n: number): number => {
  const res = n - 253
  return res
}
export const цельсий2лейден = (n: number): number => {
  const res = n + 253
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
