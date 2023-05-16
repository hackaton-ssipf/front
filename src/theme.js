import { createContext, useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'

// color design tokens export
export const tokens = mode => ({
  grey: {
    50: '#ebebeb',
    100: '#d6d6d6',
    200: '#adadad',
    300: '#858585',
    400: '#5c5c5c',
    500: '#333333',
    600: '#292929',
    700: '#1f1f1f',
    800: '#141414',
    900: '#0a0a0a'
  },
  primary: {
    50: '#f1f1f1',
    100: '#d3d3d3',
    200: '#a6a6a6',
    300: '#7a7a7a',
    400: '#4d4d4d',
    500: '#1a1a1a',
    600: '#212121',
    700: '#141414',
    800: '#0d0d0d',
    900: '#070707'
  },
  yellowAccent: {
    50: '#fdfbe6',
    100: '#faf6cd',
    200: '#f6ed9b',
    300: '#f1e46a',
    400: '#eddb38',
    500: '#e8d206',
    600: '#baa805',
    700: '#8b7e04',
    800: '#5d5402',
    900: '#2e2a01'
  },

  greenAccent: {
    50: '#f7fde6',
    100: '#effbcd',
    200: '#e0f89b',
    300: '#d0f46a',
    400: '#c1f138',
    500: '#b1ed06',
    600: '#8ebe05',
    700: '#6a8e04',
    800: '#475f02',
    900: '#232f01'
  },

  redAccent: {
    100: '#f8dcdb',
    200: '#f1b9b7',
    300: '#e99592',
    400: '#e2726e',
    500: '#db4f4a',
    600: '#af3f3b',
    700: '#832f2c',
    800: '#58201e',
    900: '#2c100f'
  },
  blueAccent: {
    100: '#e1e2fe',
    200: '#c3c6fd',
    300: '#a4a9fc',
    400: '#868dfb',
    500: '#6870fa',
    600: '#535ac8',
    700: '#3e4396',
    800: '#2a2d64',
    900: '#151632'
  }
})

// mui theme settings
export const themeSettings = mode => {
  const colors = tokens(mode)
  return {
    palette: {
            // palette values for dark mode
            primary: {
              main: colors.primary[500]
            },
            secondary: {
              main: colors.greenAccent[500]
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100]
            },
            background: {
              default: colors.primary[500]
            }
          }
    };
    typography: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 40
      },
      h2: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 32
      },
      h3: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 24
      },
      h4: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 20
      },
      h5: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 16
      },
      h6: {
        fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
        fontSize: 14
      }
    }
  }
}

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})

export const useMode = () => {
  const [mode, setMode] = useState('dark')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return [theme, colorMode]
}
