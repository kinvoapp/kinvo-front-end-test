export const useFormatMask = () => {
  const formatMask = (template, value) => {
    if (template === 'int') {
      let str = value.toString()
      const regex = /R?\$\s*\d{1,3}(\.\d{3})*,\d{2}/g
      if (regex.test(str)) {
        // If the string already matches the expected format, return it
        return str
      } else {
        // Otherwise, add thousands separators to the string
        str = str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        // Add a zero to the end if there's only one digit after the comma
        if (/,\d$/.test(str)) {
          str += '0'
        }
        return str
      }
    }
  }
  return { formatMask }
}
