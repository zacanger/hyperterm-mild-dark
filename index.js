const
  backgroundColor = '#161716'
, borderColor     = '#5d6560'
, creamRed        = '#f68080'
, cursorColor     = 'rgba(230,231,214,0.6)'
, darkDust        = '#181a13'
, dryRed          = '#e06c75'
, foregroundColor = '#f8f9ea'
, lightBlue       = '#7fdeec'
, lightDust       = '#d2d8cf'
, lime            = '#b1ec73'
, medDust         = '#a2a597'
, mustard         = '#eacd84'
, orange          = '#f4a748'
, paleGreen       = '#cff3d3'
, sage            = '#cbe5af'
, softPurple      = '#c678dd'
, softMagenta     = '#fcadeb'
, turquoise       = '#75cec8'
, softBlue        = '#a8cfe3'
, colors          = {
    black        : backgroundColor
  , red          : creamRed
  , green        : lime
  , yellow       : mustard
  , blue         : lightBlue
  , magenta      : softPurple
  , cyan         : softBlue
  , white        : lightDust
  , lightBlack   : medDust
  , lightRed     : dryRed
  , lightGreen   : sage
  , lightYellow  : orange
  , lightBlue    : turquoise
  , lightMagenta : softMagenta
  , lightCyan    : paleGreen
  , lightWhite   : foregroundColor
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
