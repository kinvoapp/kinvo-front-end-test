let button = document.querySelector('.submit')

button.addEventListener("click", function(){
    fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData')
    .then(response => response.json())
    .then(data => {
        const { data: { snapshotByProduct, snapshotByPortfolio } } = data
        Object.values(snapshotByPortfolio).map(value => { 
            const position = document.querySelector('.position')
            let p = document.createElement('p')
            p.innerHTML = value
            position.appendChild(p)
        
        })
    })
    .catch(err => console.log(err))
});