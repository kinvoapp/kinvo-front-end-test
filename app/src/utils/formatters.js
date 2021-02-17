export function formatNumber (value, type, locale='pt-br', currency='BRL') {
    switch(type){
        case 'currency':
            return Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value)
        default:
            return Intl.NumberFormat(locale).format(value)        
    }
}