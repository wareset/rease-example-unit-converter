function repeat(string: string, count?: number): string {
  let res = ''
  count = -~count! || 0
  while (--count > 0) res += string
  return res
}

function padStart(string: string, len: number, pad?: string): string {
  return !((len = (len || 0) - string.length) > 0)
    ? string
    : repeat(pad = pad || ' ', len / pad.length + 1).slice(0, len) + string
}

function padEnd(string: string, len: number, pad?: string): string {
  return !((len = (len || 0) - string.length) > 0)
    ? string
    : string + repeat(pad = pad || ' ', len / pad.length + 1).slice(0, len)
}

export function num2obj(n: number | string): any {
  const some = ('' + n)
    .replace(/[\s_]+/g, '')
    .match(
      /^(?<s>[-+])?(?<isInfinity>Infinity)?(?<isNaN>NaN)?(?<i>\d+)?(?:[.,](?<f>\d+)?)?(?:e(?<es>[-+])?(?<e>\d+))?n?$/i
    )!.groups! as any

  some.sign = some.s || '+'
  if (
    !(some.isNaN = !!some.isNaN) &&
    !(some.isInfinity = !!some.isInfinity)
  ) {
    if (!some.i) some.i = ''
    if (!some.f) some.f = ''
    if (some.e) {
      const e = +some.e
      if (some.es === '-') {
        some.f = padStart(some.i.slice(-e) + some.f, e + some.f.length, '0')
        some.i = some.i.slice(0, -e)
      } else {
        some.i = padEnd(some.i + some.f.slice(0, e), e + some.i.length, '0')
        some.f = some.f.slice(e)
      }
    }
    // some.int = some.i
    // some.frac = some.f
  }

  // console.log(some)

  return some
}
