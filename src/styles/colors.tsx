import theme from 'styled-theming'

export enum colors {
    black = '#111111',
    dark_gray = '#181818',
    gray = '#303030',
    light_gray = '#888888',
    soft_gray = '#e6e6e6',
    white = '#fffefe',
  
  }
  
  export const mainColor = theme('mode', {
    light: colors.white,
    dark: colors.dark_gray
  })
  export const secondColor = theme('mode', {
    light: colors.soft_gray,
    dark: colors.gray
  })
  export const textColor = theme('mode', {
    light: colors.dark_gray,
    dark: colors.light_gray
  })
