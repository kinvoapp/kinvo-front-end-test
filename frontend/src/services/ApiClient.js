const BASE_URL = 'http://localhost:8000/';


async function get(resource) 
{
  const resposta = await fetch(BASE_URL+resource);

  return resposta.json();
}

export default get;