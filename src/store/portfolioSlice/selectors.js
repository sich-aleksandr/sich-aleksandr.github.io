const filterTodo = (filter, todo) => {
  if (filter === "all") {
    return true;
  }

  if (filter === "compleated") {
    return todo.isDone;
  }

  if (filter === "active") {
    return !todo.isDone;
  }
};

export const getPortfolio = (state) => {
  const filter = state.reducerFilter.selectedFilter;
  return state.reducerPortfolio.tasks.filter((tasks) => filterTodo(filter, tasks));
};
