import colorValues, {uiGroups, syntaxGroups, ansiGroups}  from './index'

test('colors values', () => {
  expect(colorValues.colors.cyan).toBe('#7FC1CA')
  expect(colorValues.grays.gray4).toBe('#899BA6')
})

test('UI group mappings to color values', () => {
  expect(uiGroups.userActionNeeded).toBe(colorValues.colors.red)
  expect(uiGroups.gray5).toBe(colorValues.grays.gray5)
})

test('syntax group mappings to color values', () => {
  expect(syntaxGroups.type).toBe(colorValues.colors.green)
})

test('ansi group mappings to color values', () => {
  expect(ansiGroups.normal.cyan).toBe(colorValues.colors.cyan)
  expect(ansiGroups.bright.red).toBe(colorValues.colors.orange)
})
