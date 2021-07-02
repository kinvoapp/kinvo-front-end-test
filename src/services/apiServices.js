const apiInfo = {
    api: 'https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/',
    endpoint: 'getFixedIncomeClassData',
};

const url = `${apiInfo.api}${apiInfo.endpoint}`;

async function fetchPortfolioInfo() {
    const requestResponse = await fetch(url);
    const data = requestResponse.json();
    return data;
}

export default fetchPortfolioInfo;
