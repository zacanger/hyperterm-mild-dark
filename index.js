const
  backgroundColor = '#262724'
, borderColor     = '#5d6560'
, creamRed        = '#f68080'
, cursorColor     = '#e6e7d6'
, darkDust        = '#181a13'
, dryRed          = '#e06c75'
, foregroundColor = '#f8f9ea'
, lightBlue       = '#7fdeec'
, lightDust       = '#d2d8cf'
, lime            = '#b1ec73'
, medDust         = '#a2a597'
, mustard         = '#eacd84'
, orange          = '#f4a748'
, paleGreen       = '#e6f0e7'
, sage            = '#cbe5af'
, softPurple      = '#c678dd'
, turquoise       = '#75cec8'
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
  , fontFamily : config.fontFamily || '"Fantasque Sans Mono", "Hack", "Hasklig", "Fira Code", monospace'
  , termCSS : `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
      .cursor-node[focus=true]:not([moving]) {
        animation: blink 1s ease infinite;
      }
      @keyframes blink {
        0%, 40% {
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
        border-color: ${medDust};
      }
      .tab_tab.tab_active {
        font-weight: 700;
        color: ${softPurple} !important;
        background-color: ${backgroundColor};
        border-color: ${medDust};
      }
      .tab_active:before {
        border-color: ${medDust};
      }
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
    `
  })
}
