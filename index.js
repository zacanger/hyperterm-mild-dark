const
  backgroundColor = '#161716'
, black           = '#3d3d3d'
, blue            = '#7fdeec'
, borderColor     = '#5d6560'
, cursorColor     = 'rgba(230,231,214,0.6)'
, cyan            = '#a8cfe3'
, darkDust        = '#181a13'
, foregroundColor = '#f8f9ea'
, green           = '#b1ec73'
, lightBlack      = '#a2a597'
, lightBlue       = '#75cec8'
, lightCyan       = '#cff3d3'
, lightGreen      = '#cbe5af'
, lightMagenta    = '#fcadeb'
, lightRed        = '#e06c75'
, lightWhite      = '#fafbf8'
, lightYellow     = '#f4a748'
, magenta         = '#c678dd'
, red             = '#f68080'
, white           = '#d2d8cf'
, yellow          = '#eacd84'
, colors          = {
    black
  , red
  , green
  , yellow
  , blue
  , magenta
  , cyan
  , white
  , lightBlack
  , lightRed
  , lightGreen
  , lightYellow
  , lightBlue
  , lightMagenta
  , lightCyan
  , lightWhite
  }

exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor
, backgroundColor
, borderColor
, cursorColor
, colors
, cursorShape : config.cursorShape || 'UNDERLINE'
, fontSize    : config.fontSize    || 14
, fontFamily  : config.fontFamily  || '"Hack", "Hasklig", "Fira Code", "Fantasque Sans Mono", monospace'
, termCSS     : `
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
, css      : `
    ${config.css || ''}
    .tab_tab {
      color: ${lightBlue} !important;
      background-color: ${darkDust};
    }
    .tabs_list {
      background-color: ${darkDust};
      border-color: ${lightBlack};
    }
    .tab_tab.tab_active {
      font-weight: 700;
      color: ${magenta} !important;
      background-color: ${backgroundColor};
      border-color: ${lightBlack};
    }
    .tab_active:before {
      border-color: ${lightBlack};
    }
    .header_header {
      top: 0;
      right: 0;
      left: 0;
    }
  `
})
