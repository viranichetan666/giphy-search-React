const giphyActions = {
  REQUEST_GET_TRENDING_GIPHY: "REQUEST_GET_TRENDING_GIPHY",
  SUCCESS_GET_TRENDING_GIPHY: "SUCCESS_GET_TRENDING_GIPHY",
  REQUEST_GET_SEARCH_GIPHY: "REQUEST_GET_SEARCH_GIPHY",
  SUCCESS_GET_SEARCH_GIPHY: "SUCCESS_GET_SEARCH_GIPHY",
  REQUEST_GET_SEARCH_SUGGESTION: "REQUEST_GET_SEARCH_SUGGESTION",
  SUCCESS_GET_SEARCH_SUGGESTION: "SUCCESS_GET_SEARCH_SUGGESTION",
  SUCCESS_MORE_GET_TRENDING_GIPHY: "SUCCESS_MORE_GET_TRENDING_GIPHY",

  requestGetTrendingGiphy: value => {
    return {
      type: giphyActions.REQUEST_GET_TRENDING_GIPHY,
      payload: value
    };
  },
  successGetTrendingGiphy: value => {
    return {
      type: giphyActions.SUCCESS_GET_TRENDING_GIPHY,
      payload: value
    };
  },
  successMoreGetSearchGiphy: value => {
    return {
      type: giphyActions.SUCCESS_MORE_GET_TRENDING_GIPHY,
      payload: value
    };
  },
  requestGetSearchGiphy: value => {
    return {
      type: giphyActions.REQUEST_GET_SEARCH_GIPHY,
      payload: value
    };
  },
  requestGetSearchSuggestion: value => {
    return {
      type: giphyActions.REQUEST_GET_SEARCH_SUGGESTION,
      payload: value
    };
  },
  successGetSearchSuggestion: value => {
    return {
      type: giphyActions.SUCCESS_GET_SEARCH_SUGGESTION,
      payload: value
    };
  }
};

export default giphyActions;
