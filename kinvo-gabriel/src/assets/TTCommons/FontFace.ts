const TTCommonsRegular = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '400',
  src: `
    url(${require('./ttcommons-regular-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-regular-webfont.woff2')}) format('woff2'),
  `
}

const TTCommonsMedium = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '500',
  src: `
    url(${require('./ttcommons-medium-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-medium-webfont.woff2')}) format('woff2'),
  `
}

const TTCommonsDemiBold = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '600',
  src: `
    url(${require('./ttcommons-demibold-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-demibold-webfont.woff2')}) format('woff2'),
  `
}

const TTCommonsBold = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '700',
  src: `
    url(${require('./ttcommons-bold-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-bold-webfont.woff2')}) format('woff2'),
  `
}

const TTCommonsExtraBold = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '900',
  src: `
    url(${require('./ttcommons-extrabold-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-extrabold-webfont.woff2')}) format('woff2'),
  `
}

const TTCommonsLight = {
  fontFamily: 'TTCommons',
  fontStyle: 'normal',
  display: 'swap',
  fontWeight: '200',
  src: `
    url(${require('./ttcommons-light-webfont.woff')}) format('woff'),
    url(${require('./ttcommons-light-webfont.woff2')}) format('woff2'),
  `
}


export const fontFace = [
  TTCommonsRegular,
  TTCommonsMedium,
  TTCommonsDemiBold,
  TTCommonsBold,
  TTCommonsExtraBold,
  TTCommonsLight
]
