const walletColors = {
    'tesouro direto': 'var(--color-purple)',
    'renda fixa pré': 'var(--color-orange)',
    'renda fixa pós': 'var(--color-torquoise)'
}
export function getWalletTypeColor(type){
    return walletColors[type.toLowerCase()]
}