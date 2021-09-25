import React, { useEffect, useCallback, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageGallary from "components/gallary/ImageGallary";
import SearchHeader from "components/gallary/SearchHeader";
import AppLoader from "components/common/AppLoader";
import { getTrendingGiphy, getLoading } from "redux/giphy/selector";
import giphyActions from "redux/giphy/actions";

const Dashboard = () => {
  const [savedSearch, setSavedSearch] = useState("");
  // Redux Selector
  const giphyData = useSelector(getTrendingGiphy);
  const loading = useSelector(getLoading);
  // Pagination Data
  const defaultPageSize = 50;
  const pagination = giphyData?.pagination;

  const defaultRequest = useMemo(() => {
    return {
      offset: 0,
      limit: defaultPageSize //default = 25
    };
  }, []);

  // Dispatch method
  const dispatch = useDispatch();

  // Initial fetching
  useEffect(() => {
    dispatch(giphyActions.requestGetTrendingGiphy(defaultRequest));
  }, [dispatch, defaultRequest]);

  // Load More Handler
  const loadMoreGiphy = useCallback(() => {
    const scrollHeight = document?.scrollingElement?.scrollHeight || 0;
    if (
      window.innerHeight + document?.documentElement?.scrollTop ===
      scrollHeight
    ) {
      console.log("called", pagination);
      // Do load more ghiphy here!
      const params = {
        offset: pagination.offset + defaultPageSize,
        limit: defaultPageSize
      };
      if (savedSearch && savedSearch !== "") {
        const paramSearch = {
          q: savedSearch,
          ...params
        };
        dispatch(giphyActions.requestGetSearchGiphy(paramSearch));
      } else {
        dispatch(giphyActions.requestGetTrendingGiphy(params));
      }
    }
  }, [dispatch, pagination, savedSearch]);

  // Track Scroll event
  useEffect(() => {
    window.addEventListener("scroll", loadMoreGiphy);
    return () => {
      window.removeEventListener("scroll", loadMoreGiphy);
    };
  }, [loadMoreGiphy]);

  // Handler for search
  const onSearchHandler = search => {
    setSavedSearch(search);
    if (search && search !== "") {
      const paramSearch = {
        q: search,
        ...defaultRequest
      };
      dispatch(giphyActions.requestGetSearchGiphy(paramSearch));
    } else {
      dispatch(giphyActions.requestGetTrendingGiphy(defaultRequest));
    }
  };

  return (
    <div className="dashboard-container">
      <SearchHeader onSearchHandler={onSearchHandler} />
      <ImageGallary allImages={giphyData?.data} />
      {loading && <AppLoader />}
    </div>
  );
};

export default Dashboard;
