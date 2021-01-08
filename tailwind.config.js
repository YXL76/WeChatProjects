module.exports = {
  corePlugins: {
    animation: false,
    preflight: false,
    accessibility: false,
    backgroundOpacity: false,
    borderOpacity: false,
    clear: false,
    container: false,
    cursor: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    fill: false,
    fontFamily: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    order: false,
    outline: false,
    overscrollBehavior: false,
    placeContent: false,
    placeholderColor: false,
    placeholderOpacity: false,
    placeItems: false,
    placeSelf: false,
    pointerEvents: false,
    resize: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    strokeWidth: false,
    tableLayout: false,
    textOpacity: false,
    userSelect: false,
  },
  purge: {
    enabled: true,
    mode: "all",
    preserveHtmlElements: false,
    content: ["./**/*.wxml", "./**/*.mpx"],
    options: {
      safelist: {
        standard: [/^border-.+-500$/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "3_5-screen": "60vw",
      },
      padding: {
        "2_5": "40%",
      },
      width: {
        "3_5-screen": "60vw",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    screens: {
      sm: "320px",
      md: "384px",
      lg: "512px",
      xl: "640px",
      "2xl": "768px",
      // sm: "640px",
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
  },
  variants: {
    // accessibility: ['responsive', 'focus-within', 'focus'],
    // alignContent: ['responsive'],
    // alignItems: ['responsive'],
    // alignSelf: ['responsive'],
    // animation: ['responsive'],
    // appearance: ['responsive'],
    // backgroundAttachment: ['responsive'],
    // backgroundClip: ['responsive'],
    // backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    // backgroundImage: ['responsive'],
    // backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // backgroundPosition: ['responsive'],
    // backgroundRepeat: ['responsive'],
    // backgroundSize: ['responsive'],
    // borderCollapse: ['responsive'],
    // borderColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    // borderOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // borderRadius: ['responsive'],
    // borderStyle: ['responsive'],
    // borderWidth: ['responsive'],
    // boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // boxSizing: ['responsive'],
    // clear: ['responsive'],
    // container: ['responsive'],
    // cursor: ['responsive'],
    // display: ['responsive'],
    // divideColor: ['responsive', 'dark'],
    // divideOpacity: ['responsive'],
    // divideStyle: ['responsive'],
    // divideWidth: ['responsive'],
    // fill: ['responsive'],
    // flex: ['responsive'],
    // flexDirection: ['responsive'],
    // flexGrow: ['responsive'],
    // flexShrink: ['responsive'],
    // flexWrap: ['responsive'],
    // float: ['responsive'],
    // fontFamily: ['responsive'],
    // fontSize: ['responsive'],
    // fontSmoothing: ['responsive'],
    // fontStyle: ['responsive'],
    // fontVariantNumeric: ['responsive'],
    // fontWeight: ['responsive'],
    // gap: ['responsive'],
    // gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    // gridAutoColumns: ['responsive'],
    // gridAutoFlow: ['responsive'],
    // gridAutoRows: ['responsive'],
    // gridColumn: ['responsive'],
    // gridColumnEnd: ['responsive'],
    // gridColumnStart: ['responsive'],
    // gridRow: ['responsive'],
    // gridRowEnd: ['responsive'],
    // gridRowStart: ['responsive'],
    // gridTemplateColumns: ['responsive'],
    // gridTemplateRows: ['responsive'],
    // height: ['responsive'],
    // inset: ['responsive'],
    // justifyContent: ['responsive'],
    // justifyItems: ['responsive'],
    // justifySelf: ['responsive'],
    // letterSpacing: ['responsive'],
    // lineHeight: ['responsive'],
    // listStylePosition: ['responsive'],
    // listStyleType: ['responsive'],
    // margin: ['responsive'],
    // maxHeight: ['responsive'],
    // maxWidth: ['responsive'],
    // minHeight: ['responsive'],
    // minWidth: ['responsive'],
    // objectFit: ['responsive'],
    // objectPosition: ['responsive'],
    // opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // order: ['responsive'],
    // outline: ['responsive', 'focus-within', 'focus'],
    // overflow: ['responsive'],
    // overscrollBehavior: ['responsive'],
    // padding: ['responsive'],
    // placeContent: ['responsive'],
    // placeItems: ['responsive'],
    // placeSelf: ['responsive'],
    // placeholderColor: ['responsive', 'dark', 'focus'],
    // placeholderOpacity: ['responsive', 'focus'],
    // pointerEvents: ['responsive'],
    // position: ['responsive'],
    // resize: ['responsive'],
    // ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    // ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    // ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    // ringOpacity: ['responsive', 'focus-within', 'focus'],
    // ringWidth: ['responsive', 'focus-within', 'focus'],
    // rotate: ['responsive', 'hover', 'focus'],
    // scale: ['responsive', 'hover', 'focus'],
    // skew: ['responsive', 'hover', 'focus'],
    // space: ['responsive'],
    // stroke: ['responsive'],
    // strokeWidth: ['responsive'],
    // tableLayout: ['responsive'],
    // textAlign: ['responsive'],
    // textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    // textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // textOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    // textOverflow: ['responsive'],
    // textTransform: ['responsive'],
    // transform: ['responsive'],
    // transformOrigin: ['responsive'],
    // transitionDelay: ['responsive'],
    // transitionDuration: ['responsive'],
    // transitionProperty: ['responsive'],
    // transitionTimingFunction: ['responsive'],
    // translate: ['responsive', 'hover', 'focus'],
    // userSelect: ['responsive'],
    // verticalAlign: ['responsive'],
    // visibility: ['responsive'],
    // whitespace: ['responsive'],
    // width: ['responsive'],
    // wordBreak: ['responsive'],
    // zIndex: ['responsive', 'focus-within', 'focus'],
  },
  plugins: [],
};
