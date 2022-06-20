export const EPSILON = Number.EPSILON

export const { random: randomDefault } = Math
export const random = (): number => randomDefault() || random()

export const createRandomtring = (): string => 'r' + random().toString(32).slice(2)
