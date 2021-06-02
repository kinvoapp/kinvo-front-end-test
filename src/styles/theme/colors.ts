// eslint-disable-next-line no-shadow
export enum Colors {
  purple100 = '#FBF8FF',
  purple200 = '#F0E7FF',
  purple400 = '#B69BE0',
  purple500 = '#9773CF',
  purple700 = '#4c309b',
  blue100 = '#EFF7FF',
  blue200 = '#D8EAFE',
  blue400 = '#97BDE6',
  blue500 = '#9773CF',
  blue700 = '#3972B2',
  green100 = '#F0FFF3',
  green200 = '#CEEFD7',
  green400 = '#7FCB96',
  green700 = '#348A56',
  yellow100 = '#FFFAEF',
  yellow200 = '#FAECD5',
  yellow400 = '#EBC087',
  yellow700 = '#CF7E38',
  red100 = '#FFF5F5',
  red400 = '#E69293',
  red700 = '#CB404C',
  grey100 = '#F6F6F8',
  grey200 = '#E9E7EF',
  grey400 = '#CAC8D2',
  grey700 = '#7A7388',
  grey900 = '#413A4F',
  white = '#FFFFFF',
}

export type ColorsTheme = typeof Colors;
export type ColorsType = keyof typeof Colors;
