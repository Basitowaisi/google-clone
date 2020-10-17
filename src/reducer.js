export const initialState = {
  query: null,
}

export const SET_SEARCH_QUERY = "app/SET_SEARCH_QUERY"

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
      }
    default:
      return state
  }
}

export default reducer
