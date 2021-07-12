import get from '../services/ApiClient';

async function Data()
{
  try 
  {
    const dados_api = await get('');
    
    return dados_api;
  }
  
  catch (error) 
  {
    return error.message;
  }
}

export default Data;