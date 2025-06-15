import * as ColorsV from '@tamagui/colors'

// nice and flat

export const light = {
  ...ColorsV.blue,
  ...ColorsV.gray,
  ...ColorsV.grayA,
  ...ColorsV.green,
  ...ColorsV.indigo,
  ...ColorsV.orange,
  ...ColorsV.pink,
  ...ColorsV.purple,
  ...ColorsV.red,
  ...ColorsV.violet,
  ...ColorsV.yellow,
}

export const dark = {
  ...ColorsV.blueDark,
  ...ColorsV.grayDark,
  ...ColorsV.grayDarkA,
  ...ColorsV.greenDark,
  ...ColorsV.indigoDark,
  ...ColorsV.orangeDark,
  ...ColorsV.pinkDark,
  ...ColorsV.purpleDark,
  ...ColorsV.redDark,
  ...ColorsV.violetDark,
  ...ColorsV.yellowDark,
}

export const darkColorsPostfixed = Object.fromEntries(
  // Dark
  Object.entries(dark).map(([k, v]) => [`${k}Dark`, v])
) as {
  [key in `${keyof typeof dark}Dark`]: string
}

export type ColorNamesLight = keyof typeof light
export type ColorNamesDark = keyof typeof dark

export const colorNamesLight = Object.keys(light) as ColorNamesLight[]
export const colorNamesDark = Object.keys(dark) as ColorNamesDark[]

/*
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';
*/
export const Colors = {
  light ,
  dark
};
