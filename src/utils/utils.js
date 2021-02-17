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
    removeDuplicatedItems: function (array) {
      return array.filter(function (value, index) {
        return array.indexOf(value) === index;
      });
    },
    sortBySearch: function (querySearch, arrayList, prop, subProp) {
      var listResult = [];

      arrayList.filter(function (product) {
        if (!isNaN(querySearch) && product[prop][subProp] === Number(querySearch)) listResult.push(product);
        if (product[prop][subProp].toLowerCase().includes(querySearch.toLowerCase())) listResult.push(product);
      });

      if (querySearch !== "") return this.removeDuplicatedItems(listResult);
      return arrayList;
  },
  };
};

export default Utils;
