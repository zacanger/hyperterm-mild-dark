
const backgroundColor = '#21252b'
const foregroundColor = '#abb2bf'
const cursorColor = foregroundColor

const colors = [
  backgroundColor,
  '#e06c75', // red
  '#98c379', // green
  '#d19a66', // yellow
  '#56b6c2', // blue
  '#C678DD', // pink
  '#56B6C2', // cyan
  '#d0d0d0', // light gray
  '#808080', // medium gray
  '#e06c75', // red
  '#98c379', // green
  '#d19a66', // yellow
  '#56b6c2', // blue
  '#C678DD', // pink
  '#56B6C2', // cyan
  '#ffffff' // white
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
  }
  next(action)
}

