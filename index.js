const
  backgroundColor = '#090909'
, foregroundColor = '#f8f9ea'
, borderColor     = '#e5e5e5'
, cursorColor     = '#e6e7d6'
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

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor
  , backgroundColor
  , borderColor
  , cursorColor
  , colors
  , termCSS : `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `
  , css : `
      ${config.css || ''}
      .tab_tab {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
      }
      .tabs_list {
        background-color: ${backgroundColor};
        border-color: ${borderColor};
      }
      .tab_tab.tab_active {
        font-weight: 700;
        color: ${backgroundColor} !important;
        background-color: ${foregroundColor};
        border-color: ${borderColor};
      }
    `
  })
}
