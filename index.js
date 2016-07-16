const
  backgroundColor = '#090909'
, foregroundColor = '#f8f9ea'
, cursorColor     = foregroundColor
, colors          = [
    backgroundColor
  , '#f68080'  // red
  , '#b1ec73'  // green
  , '#eacd84'  // yellow
  , '#7fdeec'  // blue
  , '#C678DD'  // pink
  , '#56B6C2'  // cyan
  , '#d2d8cf'  // light gray
  , '#a2a597'  // medium gray
  , '#e06c75'  // red
  , '#cbe5af'  // green
  , '#f4a748'  // yellow
  , '#56b6c2'  // blue
  , '#C678DD'  // pink
  , '#56B6C2'  // cyan
  , '#e6f0e7'  // white
  , foregroundColor
  ]

exports.middleware = store => next => action => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor     = cursorColor
      action.config.colors          = colors
  }
  next(action)
}
