let colors = {
  normal: {
    black: '#3C4C55',
    red: '#DF8C8C',
    green: '#A8CE93',
    yellow: '#DADA93',
    blue: '#83AFE5',
    magenta: '#9A93E1',
    cyan: '#7FC1CA',
    white: '#C5D4DD',
  },
  bright: {
    black: '#899BA6',
    red: '#F2C38F',
    magenta: '#D18EC2',
    white: '#E6EEF3',
  },
  decoration: {
    dark: '#1E272C',
    medium: '#556873',
    light: '#6A7D89',
  }
};

colors.semantic = {
  valueOrState: colors.normal.cyan,
  identifier: colors.normal.blue,
  global: colors.normal.magenta,
  emphasis: colors.bright.magenta,
  actionNeeded: colors.normal.red,
  special: colors.bright.red,
  statement: colors.normal.yellow,
  type: colors.normal.green,

  trivial: colors.bright.black,
  background: '#435661',
  foreground: colors.normal.white
};

colors.mood = {
  positive: colors.normal.green,
  negative: colors.normal.red,
  neutral: colors.normal.blue
}

module.exports = colors;