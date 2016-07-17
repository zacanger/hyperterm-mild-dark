const
  backgroundColor = '#090909'
, foregroundColor = '#f8f9ea'
, borderColor     = '#e5e5e5'
, cursorColor     = '#e6e7d6'
, paleGreen       = '#e6f0e7'
, turquoise       = '#56b6c2'
, softPurple      = '#c678dd'
, orange          = '#f4a748'
, sage            = '#cbe5af'
, dryRed          = '#e06c75'
, medDust         = '#a2a597'
, darkDust        = '#181a13'
, lightDust       = '#d2d8cf'
, lightBlue       = '#7fdeec'
, mustard         = '#eacd84'
, lime            = '#b1ec73'
, creamRed        = '#f68080'
, colors          = [
    backgroundColor
  , creamRed
  , lime
  , mustard
  , lightBlue
  , softPurple
  , turquoise
  , lightDust
  , medDust
  , dryRed
  , sage
  , orange
  , turquoise
  , softPurple
  , turquoise
  , paleGreen
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
      .cursor-node[focus=true]:not([moving]) {
        animation: blink 1s ease infinite;
      }
      @keyframes blink {
        0%, 50% {
          opacity: 0;
        }
        50%, 90% {
          opacity: 1;
        }
      }
    `
  , css : `
      ${config.css || ''}
      .tab_tab {
        color: ${turquoise} !important;
        background-color: ${darkDust};
      }
      .tabs_list {
        background-color: ${darkDust};
        border-color: ${mustard};
      }
      .tab_tab.tab_active {
        font-weight: 700;
        color: ${softPurple} !important;
        background-color: ${backgroundColor};
        border-color: ${mustard};
      }
      .tab_active:before {
        border-color: ${sage};
      }
    `
  })
}
