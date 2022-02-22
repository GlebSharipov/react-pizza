// Action Creator
export const setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});

// Action
// const setSortBy = ({
//   type: "SET_SORT_BY",
//   payload: name,
// });

export const setCategory = (catIndex) => ({
  type: "SET_CATYGORY",
  payload: catIndex,
});
