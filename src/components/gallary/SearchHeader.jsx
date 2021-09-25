import React, { useMemo, useState } from "react";
import { AutoComplete, Input } from "antd";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";
import giphyActions from "redux/giphy/actions";
import { getSearchSuggestion } from "redux/giphy/selector";

const SearchHeader = ({ onSearchHandler }) => {
  const suggesions = useSelector(getSearchSuggestion);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const onChange = data => {
    setSearch(data);
  };

  const onSelect = data => {
    onSearchHandler(data);
  };

  const suggesionOptions = useMemo(() => {
    if (suggesions && suggesions.length) {
      return suggesions.map(s => ({ value: s.name }));
    }
    return [];
  }, [suggesions]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = value => {
      const suggestion = {
        q: value,
        limit: 100
      };
      setSearch(value);
      dispatch(giphyActions.requestGetSearchSuggestion(suggestion));
    };

    return debounce(loadOptions, 300);
  }, [dispatch]);

  return (
    <div className="search-container text-center pa20">
      <AutoComplete
        value={search}
        options={suggesionOptions}
        onSelect={onSelect}
        onSearch={debounceFetcher}
        onChange={onChange}
        style={{ width: 300 }}
      >
        <Input.Search
          size="large"
          placeholder="Search here..."
          onSearch={onSearchHandler}
          className="header-search"
        />
      </AutoComplete>
    </div>
  );
};

export default SearchHeader;
