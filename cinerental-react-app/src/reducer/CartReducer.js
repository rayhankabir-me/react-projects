const initialState = {
  cartMovie: [],
};
function CartReducer(state, action) {
  switch (action.type) {
    case "added_cart":
      return {
        cartMovie: [...state.cartMovie, action.payload],
      };

    case "removed_cart":
      return {
        ...state,
        cartMovie: state.cartMovie.filter((x) => x.id != action.payload.id),
      };
    default:
      return state;
  }
}

export { CartReducer, initialState };
