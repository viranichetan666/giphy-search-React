import giphyActions from "./actions";

const initState = {
  loading: false,
  giphyList: {},
  searchSuggestion: []
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case giphyActions.REQUEST_GET_TRENDING_GIPHY:
      return {
        ...state,
        loading: true
      };
    case giphyActions.SUCCESS_GET_TRENDING_GIPHY:
      return {
        ...state,
        loading: false,
        giphyList: action.payload
      };
    case giphyActions.SUCCESS_MORE_GET_TRENDING_GIPHY:
      return {
        ...state,
        loading: false,
        giphyList: {
          ...state.giphyList,
          data: [...state.giphyList?.data, ...action.payload?.data],
          pagination: action.payload?.pagination
        }
      };
    case giphyActions.REQUEST_GET_SEARCH_GIPHY:
      return {
        ...state,
        loading: true
      };
    case giphyActions.SUCCESS_GET_SEARCH_GIPHY:
      return {
        ...state,
        giphyList: action.payload,
        loading: false
      };
    case giphyActions.SUCCESS_GET_SEARCH_SUGGESTION:
      return {
        ...state,
        searchSuggestion: action.payload
      };
    default:
      return state;
  }
}
