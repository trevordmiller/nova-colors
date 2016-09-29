const colorValues = {
  colors: {
    cyan: '#7FC1CA',
    blue: '#83AFE5',
    purple: '#9A93E1',
    pink: '#D18EC2',
    red: '#DF8C8C',
    orange: '#F2C38F',
    yellow: '#DADA93',
    green: '#A8CE93',
  },
  grays: {
    gray0: '#1E272C',
    gray1: '#3C4C55',
    gray2: '#556873',
    gray3: '#6A7D89',
    gray4: '#899BA6',
    gray5: '#C5D4DD',
    gray6: '#E6EEF3',
  },
}

export default colorValues

export const uiGroups = {
  userActionNeeded: colorValues.colors.red,
  userCurrentState: colorValues.colors.cyan,
  backgroundShade: colorValues.grays.gray0,
  background: colorValues.grays.gray1,
  foreground: colorValues.grays.gray5,
  ...colorValues.grays,
}

export const syntaxGroups = {
  constant: colorValues.colors.cyan,
  identifier: colorValues.colors.blue,
  statement: colorValues.colors.yellow,
  type: colorValues.colors.green,
  global: colorValues.colors.purple,
  emphasis: colorValues.colors.pink,
  special: colorValues.colors.orange,
  trivial: colorValues.grays.gray4,
}

export const versionControlGroups = {
  added: colorValues.colors.green,
  modified: colorValues.colors.orange,
  removed: colorValues.colors.red,
  renamed: colorValues.colors.blue,
}

export const ansiGroups = {
  normal: {
    black: uiGroups.background,
    red: colorValues.colors.red,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.magenta,
    cyan: colorValues.colors.cyan,
    white: uiGroups.foreground,
  },
  bright: {
    black: colorValues.grays.gray4,
    red: colorValues.colors.orange,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.pink,
    cyan: colorValues.colors.cyan,
    white: colorValues.grays.gray6,
  },
}
