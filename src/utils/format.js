function parseMoney (value) {
    return value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
function parsePercent (value, precision = 0) {
    return (value/100).toLocaleString('pt-BR', {style: 'percent', minimumFractionDigits: precision})
}
//return (value/100).toLocaleString('pt-BR', {style: 'percent', maximumSignificantDigits: 5 });


export {
    parseMoney,
    parsePercent
}