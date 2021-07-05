async function fetchInfo(baseApi, endpoint) {
  const url = `${baseApi}${endpoint}`;
  const requestResponse = await fetch(url);
  const data = requestResponse.json();
  return data;
}

export default fetchInfo;
