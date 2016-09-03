const novaColors = require('./index')

test('hex colors are available', () => {
  expect(novaColors.normal.cyan).not.toBe('#000000')
  expect(novaColors.normal.black).toBe( '#445660')
  expect(novaColors.normal.cyan).toBe('#7FC1CA')
})
