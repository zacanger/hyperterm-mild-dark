const
  backgroundColor = '#161716'
, black           = '#3d3d3d'
, blue            = '#7fdeec'
, borderColor     = '#5d6560'
, cursorColor     = 'rgba(230,231,214,0.6)'
, cyan            = '#a8cfe3'
, darkDust        = '#181a13'
, darkGray        = '#999'
, foregroundColor = '#f8f9ea'
, gray            = '#404040'
, green           = '#b1ec73'
, lightBlack      = '#a2a597' // 8b8b8b
, lightBlue       = '#75cec8'
, lightCyan       = '#cff3d3'
, lightGreen      = '#cbe5af'
, lightMagenta    = '#fcadeb'
, lightRed        = '#f68080'
, lightWhite      = '#fafbf8'
, lightYellow     = '#f4a748'
, magenta         = '#c678dd'
, orange          = '#ffbd37'
, pink            = '#ffb5da'
, purple          = '#ae81ff'
, red             = '#e16c5b'
, white           = '#d2d8cf'
, yellow          = '#eacd84'
, colors          = {
  black
, blue
, cyan
, darkGray
, gray
, green
, lightBlack
, lightBlue
, lightCyan
, lightGreen
, lightMagenta
, lightRed
, lightWhite
, lightYellow
, magenta
, orange
, pink
, purple
, red
, white
, yellow
}

exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor
, backgroundColor
, borderColor
, cursorColor
, colors
, cursorShape : config.cursorShape || 'UNDERLINE'
, fontSize    : config.fontSize    || 14
, fontFamily  : config.fontFamily  || '"Hasklig", "Fira Code", "Hack", "Fantasque Sans Mono", monospace'
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
    .hyperterm_main {
      background-color: ${backgroundColor} !important;
    }
    .tab_tab {
      color: ${lightBlue} !important;
      background-color: ${darkDust};
      border: none !important;
      border-left: 1px solid transparent !important;
      border-right: 1px solid transparent !important;
      border-bottom: 1px solid ${borderColor} !important;
    }
    .tabs_list {
      background-color: ${darkDust};
      border-color: ${lightBlack};
    }
    .tab_tab.tab_active {
      font-weight: 700;
      color: ${magenta} !important;
      height: calc(100% + 1px);
      background-color: ${backgroundColor};
      border-left: 1px solid ${borderColor} !important;
      border-right: 1px solid ${borderColor} !important;
      border-bottom: none !important;
    }
    .tab_active:before {
      border-color: ${lightBlack};
      border-bottom: none !important;
    }
    .tab_tab:last-child {
      border-right: 1px solid transparent !important;
    }
    .tab_text {
      border-color: transparent !important;
    }
    .header_header {
      background-color: ${backgroundColor} !important;
      top: 0;
      right: 0;
      left: 0;
    }
    .splitpane_divider {
      border-width: 4px !important;
      background-color: ${black} !important;
    }
  `
})
