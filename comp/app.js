let jurosPCA = document.querySelector('.jurosPCA')
let fixedIncome = document.querySelector('.fixedIncome')

let button = document.querySelector('.submit')

let diasExp = document.querySelector('.diasExp')
let vencData = document.querySelector('.dataVenc')

let valorInvest = document.querySelector('.valorInvest')
let saldoBruto = document.querySelector('.saldoBruto')
let rentab = document.querySelector('.rentab')
let cart = document.querySelector('.cart')
let cdi = document.querySelector('.cdi')
let sobreCdi = document.querySelector('.sobreCdi')


button.addEventListener("click", function(){
    fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData')
    .then(response => response.json())
    .then(data => {
        let tesouroDireto = data['data']['snapshotByProduct'][0]['fixedIncome']['bondType']
        let PCAValue = data['data']['snapshotByProduct'][0]['fixedIncome']['name']

        let valorInvestValue = data['data']['snapshotByPortfolio']['valueApplied']
        let saldoBrutoValue = data['data']['snapshotByPortfolio']['equity']
        let rentabValue = data['data']['snapshotByPortfolio']['percentageProfit']
        let cartValue = data['data']['snapshotByPortfolio']['portfolioPercentage']
        let cdiValue = data['data']['snapshotByPortfolio']['indexerValue']
        let sobreCdiValue = data['data']['snapshotByPortfolio']['percentageOverIndexer']

        let vencDataValue = data['data']['snapshotByProduct'][0]['due']['date']
        let diasExpValue = data['data']['snapshotByProduct'][0]['due']['date']['daysUntilExpiration']

        fixedIncome.innerHTML = tesouroDireto;
        jurosPCA.innerHTML = PCAValue;

        valorInvest.innerHTML = valorInvestValue;
        saldoBruto.innerHTML = saldoBrutoValue;
        rentab.innerHTML = rentabValue;
        cart.innerHTML = cartValue;
        cdi.innerHTML = cdiValue;
        sobreCdi.innerHTML = sobreCdiValue;

        vencData.innerHTML = vencDataValue;
        diasExp.innerHTML = diasExpValue;
    })
    .catch(err => console.log(err))
});