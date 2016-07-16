const
  backgroundColor = '#090909'
, foregroundColor = '#f8f9ea'
, cursorColor     = foregroundColor
, colors          = [
    backgroundColor
  , '#f68080'
  , '#b1ec73'
  , '#eacd84'
  , '#7fdeec'
  , '#C678DD'
  , '#56B6C2'
  , '#d2d8cf'
  , '#a2a597'
  , '#e06c75'
  , '#cbe5af'
  , '#f4a748'
  , '#56b6c2'
  , '#C678DD'
  , '#56B6C2'
  , '#e6f0e7'
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
