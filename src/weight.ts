import { subject } from 'rease'

import Fraction from 'fraction.js'

import {
  миллиграмм2грамм, грамм2миллиграмм,
  килограмм2грамм, грамм2килограмм,
  центнер2грамм, грамм2центнер,
  тонна2грамм, грамм2тонна,
  карат2грамм, грамм2карат,

  фунт2грамм, грамм2фунт,
  стоун2грамм, грамм2стоун,
  унция2грамм, грамм2унция,
  драхма2грамм, грамм2драхма,
  гран2грамм, грамм2гран,
  кортонна2грамм, грамм2кортонна,
  корхандредвейт2грамм, грамм2корхандредвейт,

  тройскийфунт2грамм, грамм2тройскийфунт,
  тройскаяунция2грамм, грамм2тройскаяунция,
  велдрахма2грамм, грамм2велдрахма,
  скрупул2грамм, грамм2скрупул,
  велгран2грамм, грамм2велгран,

  берковец2грамм, грамм2берковец,
  пуд2грамм, грамм2пуд,
  русфунт2грамм, грамм2русфунт,
  руслот2грамм, грамм2руслот,
  золотник2грамм, грамм2золотник,
  доля2грамм, грамм2доля

} from './maths/weight'

const $ГРАММ = subject<Fraction>(new Fraction(1))

export const WEIGHT_SCHEMA = [
  { type: 'title', data: 'Международная система' },
  { type: 'input', data: ['Миллиграмм', '(мг)', $ГРАММ, грамм2миллиграмм, миллиграмм2грамм] },
  { type: 'input', data: ['Карат', '(0,2г)', $ГРАММ, грамм2карат, карат2грамм] },
  { type: 'input', data: ['Грамм', '(г)', $ГРАММ, (n: any): any => n, (n: any): any => n] },
  { type: 'input', data: ['Килограмм', '(кг)', $ГРАММ, грамм2килограмм, килограмм2грамм] },
  { type: 'input', data: ['Центнер', '(ц)', $ГРАММ, грамм2центнер, центнер2грамм] },
  { type: 'input', data: ['Тонна', '(т)', $ГРАММ, грамм2тонна, тонна2грамм] },

  { type: 'title', data: 'Американская система' },
  { type: 'input', data: ['Гран — 1/7000 фунта', '(64,79891мг)', $ГРАММ, грамм2гран, гран2грамм] },
  { type: 'input', data: ['Драхма — 1/256 фунта', '(1,7718451953125г)', $ГРАММ, грамм2драхма, драхма2грамм] },
  { type: 'input', data: ['Унция — 1/16 фунта', '(28,349523125г)', $ГРАММ, грамм2унция, унция2грамм] },
  { type: 'input', data: ['Фунт — 453,59237г', '(официальное значение)', $ГРАММ, грамм2фунт, фунт2грамм] },
  { type: 'input', data: ['Стоун — 14 фунтов', '(6,35029318кг)', $ГРАММ, грамм2стоун, стоун2грамм] },
  { type: 'input', data: ['Короткий хандредвейт = 100 фунтов', '(45,359237кг)', $ГРАММ, грамм2корхандредвейт, корхандредвейт2грамм] },
  { type: 'input', data: ['Короткая тонна = 2000 фунтов', '(0,90718474т)', $ГРАММ, грамм2кортонна, кортонна2грамм] },

  { type: 'title', data: 'Британская аптечная система' },
  { type: 'input', data: ['Гран = 1/20 скрупула', '(0,06479891г)', $ГРАММ, грамм2велгран, велгран2грамм] },
  { type: 'input', data: ['Скрупул = 1/288 тройского фунта', '(1,2959782г)', $ГРАММ, грамм2скрупул, скрупул2грамм] },
  { type: 'input', data: ['Драхма = 1/96 тройского фунта', '(3,8879346г)', $ГРАММ, грамм2велдрахма, велдрахма2грамм] },
  { type: 'input', data: ['Тройская унция = 1/12 тр.фунта', '(31,1034768г)', $ГРАММ, грамм2тройскаяунция, тройскаяунция2грамм] },
  { type: 'input', data: ['Тройский (аптечный) фунт', '(373,2417216г)', $ГРАММ, грамм2тройскийфунт, тройскийфунт2грамм] },

  { type: 'title', data: 'Русская система' },
  { type: 'input', data: ['Доля = 1/96 золотника', '(44,435мг)', $ГРАММ, грамм2доля, доля2грамм] },
  { type: 'input', data: ['Золотник = 3 лота', '(4,26575417г)', $ГРАММ, грамм2золотник, золотник2грамм] },
  { type: 'input', data: ['Лот = 1/32 фунта', '', $ГРАММ, грамм2руслот, руслот2грамм] },
  { type: 'input', data: ['Фунт = 40 пудов', '', $ГРАММ, грамм2русфунт, русфунт2грамм] },
  { type: 'input', data: ['Пуд = 1/10 берковца', '(16,3804815кг)', $ГРАММ, грамм2пуд, пуд2грамм] },
  { type: 'input', data: ['Берковец', '(163,804815кг)', $ГРАММ, грамм2берковец, берковец2грамм] },
] as const
