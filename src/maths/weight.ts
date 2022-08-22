import Fraction from 'fraction.js'

// https://ru.wikipedia.org/wiki/%D0%95%D0%B4%D0%B8%D0%BD%D0%B8%D1%86%D1%8B_%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BC%D0%B0%D1%81%D1%81%D1%8B

// import { EPSILON } from '.'

// Миллиграмм (мг)
export const миллиграмм2грамм = (n: Fraction): Fraction => {
  // const res = n / 1000
  const res = n.clone().div(1000)
  return res
}
export const грамм2миллиграмм = (n: Fraction): Fraction => {
  // const res = n * 1000
  const res = n.clone().mul(1000)
  // console.log(n, res, res.valueOf().toLocaleString())
  return res
}

// Карат
export const карат2грамм = (n: Fraction): Fraction => {
  // const res = n * 0.2
  const res = n.clone().mul(0.2)
  return res
}
export const грамм2карат = (n: Fraction): Fraction => {
  // const res = n / 0.2
  const res = n.clone().div(0.2)
  return res
}

// Килограмм (кг)
export const килограмм2грамм = (n: Fraction): Fraction => {
  // const res = n * 1000
  const res = n.clone().mul(1000)
  return res
}
export const грамм2килограмм = (n: Fraction): Fraction => {
  // const res = n / 1000
  const res = n.clone().div(1000)
  return res
}

// Центнер
export const центнер2грамм = (n: Fraction): Fraction => {
  // const res = n * 100000
  const res = n.clone().mul(100000)
  return res
}
export const грамм2центнер = (n: Fraction): Fraction => {
  // const res = n / 100000
  const res = n.clone().div(100000)
  return res
}

// Тонна
export const тонна2грамм = (n: Fraction): Fraction => {
  // const res = n * 1000000
  const res = n.clone().mul(1000000)
  return res
}
export const грамм2тонна = (n: Fraction): Fraction => {
  // const res = n / 1000000
  const res = n.clone().div(1000000)
  return res
}

// -----------------------------------------------------------------------------

// Американская система

const _AF = 45359237 // - (0.1 + 0.2 - 0.3)
const _AFC = 100000

// Гран — 1/98000 стоуна, или 1/7000 фунта, или 1/437,5 унции, или 1/27,34375 драхмы, или 64,79891 мг
export const гран2грамм = (n: Fraction): Fraction => {
  // const res = n * 45359237 / 7000 / 100000
  const res = n.clone().mul(_AF).div(7000).div(_AFC)
  return res
}
export const грамм2гран = (n: Fraction): Fraction => {
  // const res = n * 7000 * 100000 / 45359237
  const res = n.clone().mul(_AFC).mul(7000).div(_AF)
  return res
}

// Драхма (единица измерения массы, США) — 1/16 унции, или 1/256 фунта, или 1/3584 стоуна, или 1,7718451953125 г
export const драхма2грамм = (n: Fraction): Fraction => {
  // const res = n * 45359237 / 256 / 100000
  const res = n.clone().mul(_AF).div(256).div(_AFC)
  return res
}
export const грамм2драхма = (n: Fraction): Fraction => {
  // const res = n * 256 * 100000 / 45359237
  const res = n.clone().mul(_AFC).mul(256).div(_AF)
  return res
}

// Унция — 1/16 фунта, или 1/224 стоуна, или 28,349523125 г
export const унция2грамм = (n: Fraction): Fraction => {
  // const res = n * 45359237 / 16 / 100000
  const res = n.clone().mul(_AF).div(16).div(_AFC)
  return res
}
export const грамм2унция = (n: Fraction): Fraction => {
  // const res = n * 16 * 100000 / 45359237
  const res = n.clone().mul(_AFC).mul(16).div(_AF)
  return res
}

// фунт — 453,59237 г (точное и официальное значение)
export const фунт2грамм = (n: Fraction): Fraction => {
  // const res = n * 45359237 / 100000
  const res = n.clone().mul(_AF).div(_AFC)
  return res
}
export const грамм2фунт = (n: Fraction): Fraction => {
  // const res = n * 100000 / 45359237
  const res = n.clone().mul(_AFC).div(_AF)
  return res
}

// Стоун — 14 фунтов, или 6,35029318 кг
export const стоун2грамм = (n: Fraction): Fraction => {
  // const res = n * 14 * 45359237 / 100000
  const res = n.clone().mul(_AF).mul(14).div(_AFC)
  return res
}
export const грамм2стоун = (n: Fraction): Fraction => {
  // const res = n * 100000 / 14 / 45359237
  const res = n.clone().mul(_AFC).div(14).div(_AF)
  return res
}

// Короткий хандредвейт = 100 фунтов = 45,359237 кг
export const корхандредвейт2грамм = (n: Fraction): Fraction => {
  // const res = n * 100 * 45359237 / 100000
  const res = n.clone().mul(_AF).mul(100).div(_AFC)
  return res
}
export const грамм2корхандредвейт = (n: Fraction): Fraction => {
  // const res = n * 100000 / 100 / 45359237
  const res = n.clone().mul(_AFC).div(100).div(_AF)
  return res
}

// Короткая тонна = 20 коротких хандредвейтов = 2000 фунтов = 0,90718474 т
export const кортонна2грамм = (n: Fraction): Fraction => {
  // const res = n * 2000 * 45359237 / 100000
  const res = n.clone().mul(_AF).mul(2000).div(_AFC)
  return res
}
export const грамм2кортонна = (n: Fraction): Fraction => {
  // const res = n * 100000 / 2000 / 45359237
  const res = n.clone().mul(_AFC).div(2000).div(_AF)
  return res
}

// -----------------------------------------------------------------------------

// Британская аптечная система
const _TF = 38879346 // - (0.1 + 0.2 - 0.3)
const _TFC = 10000000

// Гран = 1/20 скрупула, или 0,06479891 г
export const велгран2грамм = (n: Fraction): Fraction => {
  // const res = n * _TF / 60 / _TFC
  const res = n.clone().mul(_TF).div(60).div(_TFC)
  return res
}
export const грамм2велгран = (n: Fraction): Fraction => {
  // const res = n * 60 * _TFC / _TF
  const res = n.clone().mul(_TFC).mul(60).div(_TF)
  return res
}

// Скрупул = 1/3 драхмы, или 1/288 тройского фунта, или 1,2959782 грамма
export const скрупул2грамм = (n: Fraction): Fraction => {
  // const res = n * _TF / 3 / _TFC
  const res = n.clone().mul(_TF).div(3).div(_TFC)
  return res
}
export const грамм2скрупул = (n: Fraction): Fraction => {
  // const res = n * 3 * _TFC / _TF
  const res = n.clone().mul(_TFC).mul(3).div(_TF)
  return res
}

// Драхма (единица измерения массы, Великобритания) = 1/8 тройской унции, или 1/96 тройского фунта, или 3,8879346 грамма
export const велдрахма2грамм = (n: Fraction): Fraction => {
  // const res = n * _TF / _TFC
  const res = n.clone().mul(_TF).div(_TFC)
  return res
}
export const грамм2велдрахма = (n: Fraction): Fraction => {
  // const res = n * _TFC / _TF
  const res = n.clone().mul(_TFC).div(_TF)
  return res
}

// Тройская унция = 1/12 тройского фунта, или 31,1034768 грамма
export const тройскаяунция2грамм = (n: Fraction): Fraction => {
  // const res = n * 8 * _TF / _TFC
  const res = n.clone().mul(_TF).mul(8).div(_TFC)
  return res
}
export const грамм2тройскаяунция = (n: Fraction): Fraction => {
  // const res = n * _TFC / 8 / _TF
  const res = n.clone().mul(_TFC).div(8).div(_TF)
  return res
}

// Тройский фунт (единица измерения), или аптечный фунт = 373,2417216 грамма
export const тройскийфунт2грамм = (n: Fraction): Fraction => {
  // const res = n * 96 * _TF / _TFC
  const res = n.clone().mul(_TF).mul(96).div(_TFC)
  return res
}
export const грамм2тройскийфунт = (n: Fraction): Fraction => {
  // const res = n * _TFC / 96 / _TF
  const res = n.clone().mul(_TFC).div(96).div(_TF)
  return res
}

// -----------------------------------------------------------------------------

// Русская система мер

const _RT = 4095120375
const _RTC = 10000000

// Доля = 1/96 золотника = 44,435 миллиграмма
export const доля2грамм = (n: Fraction): Fraction => {
  // const res = n * 4095120375 / 96 / 96 / 10000000
  const res = n.clone().mul(_RT).div(9216).div(_RTC)
  return res
}
export const грамм2доля = (n: Fraction): Fraction => {
  // const res = n * 96 * 96 * 10000000 / 4095120375
  const res = n.clone().mul(_RTC).mul(9216).div(_RT)
  return res
}

// Золотник = 1/96 фунта = 4,26575417 грамма
export const золотник2грамм = (n: Fraction): Fraction => {
  // const res = n * 4095120375 / 96 / 10000000
  const res = n.clone().mul(_RT).div(96).div(_RTC)
  return res
}
export const грамм2золотник = (n: Fraction): Fraction => {
  // const res = n * 96 * 10000000 / 4095120375
  const res = n.clone().mul(_RTC).mul(96).div(_RT)
  return res
}

// Лот = 1/32 фунта = 3 золотникам = 288 долям = 12,797 251 191 395 300 грамма
export const руслот2грамм = (n: Fraction): Fraction => {
  // const res = n * 4095120375 / 32 / 10000000
  const res = n.clone().mul(_RT).div(32).div(_RTC)
  return res
}
export const грамм2руслот = (n: Fraction): Fraction => {
  // const res = n * 32 * 10000000 / 4095120375
  const res = n.clone().mul(_RTC).mul(32).div(_RT)
  return res
}

// Фунт = 409,5120375 грамма
export const русфунт2грамм = (n: Fraction): Fraction => {
  // const res = n * 4095120375 / 10000000
  const res = n.clone().mul(_RT).div(_RTC)
  return res
}
export const грамм2русфунт = (n: Fraction): Fraction => {
  // const res = n * 10000000 / 4095120375
  const res = n.clone().mul(_RTC).div(_RT)
  return res
}

// Пуд = 1/10 берковца = 40 фунтам = 1280 лотам = 3840 золотникам = 368 640 долям = 16,3804815 килограмма
export const пуд2грамм = (n: Fraction): Fraction => {
  // const res = n * 40 * 4095120375 / 10000000
  const res = n.clone().mul(_RT).mul(40).div(_RTC)
  return res
}
export const грамм2пуд = (n: Fraction): Fraction => {
  // const res = n * 10000000 / 40 / 4095120375
  const res = n.clone().mul(_RTC).div(40).div(_RT)
  return res
}

// Берковец = 164 килограмма
export const берковец2грамм = (n: Fraction): Fraction => {
  // const res = n * 400 * 4095120375 / 10000000
  const res = n.clone().mul(_RT).mul(400).div(_RTC)
  return res
}
export const грамм2берковец = (n: Fraction): Fraction => {
  // const res = n * 10000000 / 400 / 4095120375
  const res = n.clone().mul(_RTC).div(400).div(_RT)
  return res
}

// -----------------------------------------------------------------------------

// Европейские меры массы

// Аса — Германия, Голландия = 0,048063 г
// export const аса2грамм = (n: number): number => {
//   const res = n * 48063 * 1000000
//   return res
// }
// export const грамм2аса = (n: number): number => {
//   const res = n / 48063 / 1000000
//   return res
// }
