async function FetchIncomeData() {
  try {
    const response = await fetch('https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData');
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export default FetchIncomeData;
