const filterTodo = (filter, portfolio, tags) => {
  if (filter === "all") {
    return true;
  }

  if (tags.includes(filter)) {
     if (portfolio.tags.includes(filter)) {
       return portfolio;
     }
  }
};

  function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

export const getPortfolio = (state) => {
  const filter = state.reducerFilter.selectedFilter;
  const tags = state.reducerPortfolio.tasks.map(({tags}) => tags.join(',')).join(',').split(',');
  return state.reducerPortfolio.tasks.filter((tasks) => filterTodo(filter, tasks, tags));
};


export const getTags = (state) => {
  const tags = state.reducerPortfolio.tasks.map(({tags}) => tags.join(',')).join(',').split(',');
  return unique(tags)
}