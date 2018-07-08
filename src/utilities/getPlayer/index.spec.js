import getPlayer from '.'

describe('utilities:getPlayer', () => {
  it('returns undefined if moves array not provided', () => {
    expect(getPlayer(4)).toBeUndefined()
  })

  it('returns undefined if square not in moves array (not moved yet)', () => {
    expect(getPlayer(6, [0, 4, 2])).toBeUndefined()
  })

  it('returns `x` for even-numbered moves', () => {
    expect(getPlayer(0, [0, 4, 2])).toBe('x')
  })

  it('returns `o` for odd-numbered moves', () => {
    expect(getPlayer(4, [0, 4, 2])).toBe('o')
  })
})
