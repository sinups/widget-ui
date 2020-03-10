const color = {
  primary: '#3e89fa',
  danger: '#e22d44',
  info: '#5856d6',
};
const rhythm = (value = 1, unit = 'rem', basis = 1.5) => (
  Array.isArray(value)
    ? value.map(v => `${basis * v}${unit}`).join(' ')
    : `${basis * value}${unit}`
)
module.exports = {
  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    fontFamily: {
      base: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      monospace: [
        'SF Mono',
        'Monaco',
        'Inconsolata',
        'Fira Code',
        'Fira Mono',
        'Droid Sans Mono',
        'Consolas',
        'Roboto Mono',
        'Source Code Pro',
        'monospace',
      ],
    },
    color: {
      link: color.info,
      linkHover: 'rgb(70, 69, 171)',
      sidebarBackground: color.primary,
      errorBackground: color.danger,
    },
  },
  styles: {
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
      },
      content: {},
      logo: {
        border: 'none',
        paddingBottom: 0,
      },
    },
    Logo: {
      logo: {
        color: '#fff',
        fontSize: 20,
      },
    },
    ComponentsList: {
      list: {
        '& ul': {
          paddingLeft: 10,
        },
      },
      item: {
        '& a': {
          color: ['rgba(255, 255, 255, 0.9)', '!important'],
          fontWeight: [500, '!important'],
          cursor: ['pointer', '!important'],
          '&:hover': {
            textDecoration: 'underline',
            color: ['#fff', '!important'],
          },
        },
      },
      heading: {
        fontSize: ['18px', '!important'],
        fontWeight: [600, '!important'],
        color: ['#fff', '!important'],
      },
    },
    Heading: {
      heading1: {
        display: 'block',
        position: 'relative',
        paddingBottom: rhythm(0.75),
        marginBottom: rhythm(0.75),
        fontWeight: 700,
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: rhythm(3),
          height: '4px',
          backgroundColor: color.primary,
          borderRadius: '4px'
        },
        '& > a': {
          fontWeight: '700 !important',
          fontSize: '30px !important'
        }
      },
    },
    Pathline: {
      copyButton: {
        border: 0,
      },
    },
    Playground: {
      preview: {
        padding: 16,
      },
    },
    PlaygroundError: {
      root: {
        margin: 0,
      },
    },
  },
};
