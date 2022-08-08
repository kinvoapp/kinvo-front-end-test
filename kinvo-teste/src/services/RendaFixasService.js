class RendaFixasService {
  async getRendaFixas() {
    const response = await fetch(
      `https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData`
    );
      const responsejson = response.json();
    return responsejson;

  }
}

export default new RendaFixasService();