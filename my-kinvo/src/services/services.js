const getSnapshotByProduct = () => {
    return fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData')
    .then(response => response.json())
    .then(({ data }) => { 
        const { snapshotByProduct } = data
        return snapshotByProduct;
    })
}

export default getSnapshotByProduct;
