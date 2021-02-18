const Utils = () => {
  return {
    convertReal(number) {
      return number.toLocaleString('pt-BR');
    },
    sortList(list, prop, subProp) {
      const sortedList = [...list];

      return sortedList.sort((a, b) => {
        let result = a[prop][subProp] - b[prop][subProp];
        if (isNaN(result)) result = this.sortString(a[prop][subProp], b[prop][subProp]);
        return result;
      });
    },
    sortString(a, b) {
      const nameA = a.toUpperCase();
      const nameB = b.toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    },
    sortListByDate(list, prop, subProp) {
      const sortedList = [...list];

      return sortedList.sort((a, b) => {
        const result = new Date(a[prop][subProp]) - new Date(b[prop][subProp]);
        return result;
      });
    },
    removeDuplicatedItems(array) {
      return array.filter((value, index) => {
        return array.indexOf(value) === index;
      });
    },
    sortBySearch(querySearch, arrayList, prop, subProp) {
      const listResult = [];

      arrayList.filter(product => {
        if (!isNaN(querySearch) && product[prop][subProp] === Number(querySearch)) listResult.push(product);
        if (product[prop][subProp].toLowerCase().includes(querySearch.toLowerCase())) listResult.push(product);
      });

      if (querySearch !== '') return this.removeDuplicatedItems(listResult);
      return arrayList;
    },
  };
};

export default Utils;
