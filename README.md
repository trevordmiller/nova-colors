# Nova

A programming color scheme

## Getting Started

`$ npm install -S nova-colors`

```
const novaColors = require('nova-colors')
console.log(novaColors.normal.cyan)
// '#7FC1CA'
```

## API

```
novaColors.{colorCategory}.{colorType}
```

### Color Categories & Types

- `normal`: the standard 8 ANSI colors
  - `black` (dark grey), `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, and `white` (light grey)
- `bright`: lighter variations of a subset of `normal`
  - `black` (grey), `red` (orange), `magenta` (pink), `white`
- `decoration`: subtle non-color variations (for decoration, not meant for readable text)
  - `dark`, `medium`, and `light` (shades/tints of `normal/bright.black`)
